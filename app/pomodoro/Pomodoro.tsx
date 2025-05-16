'use client'
import { useState, useEffect, useRef } from "react";
import Clock from "../components/clock";

export default function PomodoroTimer() {
  const WORK_DURATION = 25 * 60;
  const REST_DURATION = 5 * 60;

  const [timeLeft, setTimeLeft] = useState(WORK_DURATION);
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [mode, setMode] = useState<"work" | "rest">("work");

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const alarmRef = useRef<HTMLAudioElement | null>(null);
  const isAlarmPlayedRef = useRef(false);
  const startTimeRef = useRef<number | null>(null);
  const pausedTimeRef = useRef<number | null>(null);

  const getDuration = () => (mode === "work" ? WORK_DURATION : REST_DURATION);

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;
  };

  const tick = () => {
    if (startTimeRef.current === null) return;

    const elapsed = Math.floor((Date.now() - startTimeRef.current) / 1000);
    const newTimeLeft = Math.max((pausedTimeRef.current ?? getDuration()) - elapsed, 0);
    setTimeLeft(newTimeLeft);

    if (newTimeLeft === 0 && !isAlarmPlayedRef.current) {
      if (alarmRef.current) alarmRef.current.play();
      isAlarmPlayedRef.current = true;
      stopTimer();
    }
  };

  const startTimer = () => {
    if (!isRunning) {
      startTimeRef.current = Date.now();
      timerRef.current = setInterval(tick, 1000);
      setIsRunning(true);
      setIsPaused(false);
      isAlarmPlayedRef.current = false;
    }
  };

  const pauseTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    pausedTimeRef.current = timeLeft;
    setIsRunning(false);
    setIsPaused(true);
  };

  const resumeTimer = () => {
    if (isPaused && pausedTimeRef.current !== null) {
      startTimeRef.current = Date.now();
      timerRef.current = setInterval(tick, 1000);
      setIsRunning(true);
      setIsPaused(false);
    }
  };

  const stopTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setIsRunning(false);
    setIsPaused(false);
    pausedTimeRef.current = null;
  };

  const resetTimer = () => {
    stopTimer();
    setTimeLeft(WORK_DURATION);
    setMode("work");
    isAlarmPlayedRef.current = false;
  };

  const startRest = () => {
    stopTimer();
    setMode("rest");
    setTimeLeft(REST_DURATION);
    setTimeout(() => startTimer(), 100);
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  return (
    <div className="text-center py-10 flex flex-col items-center">
      {/* Mode label */}
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-notojp">
        {mode === "work" ? "Work Time" : "Rest Time"}
      </h2>

      <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-9xl font-notojp font-bold">
        {formatTime(timeLeft)}
      </h1>

      <div className="mt-5">
        <Clock />
      </div>

      <div>
        <h1 className="mt-1 font-notojp font-bold">
          You don’t need to be perfect, just consistent.
        </h1>
      </div>

      <div className="mt-4 border-2 rounded-smflex flex-col md:flex-row items-center gap-4 md:gap-x-6 border-2 border-zinc-300 hover:transition-all duration-300 p-2 rounded-3xl w-full max-w-fit mx-auto">
        <div className="flex justify-center gap-4">
          {!isRunning && !isPaused && timeLeft > 0 && (
            <button
              onClick={startTimer}
              className="font-notojp font-bold hover:scale-105 transition duration-200 px-4 py-2 rounded-2xl hover:bg-blue-600 hover:text-white"
            >
              Start
            </button>
          )}
          {isRunning && (
            <button
              onClick={pauseTimer}
              className="font-notojp font-bold hover:scale-105 transition duration-200 px-4 py-2 rounded-2xl hover:bg-yellow-600 hover:text-white"
            >
              Pause
            </button>
          )}
          {isPaused && (
            <button
              onClick={resumeTimer}
              className="font-notojp font-bold hover:scale-105 transition duration-200 px-4 py-2 rounded-2xl hover:bg-green-600 hover:text-white"
            >
              Resume
            </button>
          )}
          {!isRunning && timeLeft === 0 && mode === "work" && (
            <button
              onClick={startRest}
              className="font-notojp font-bold hover:scale-105 transition duration-200 px-4 py-2 rounded-2xl hover:bg-green-600 hover:text-white"
            >
              Rest
            </button>
          )}
          <button
            onClick={resetTimer}
            className="font-notojp font-bold hover:scale-105 transition duration-200 px-4 py-2 rounded-2xl hover:bg-gray-600 hover:text-white"
          >
            Reset
          </button>
        </div>
        <audio ref={alarmRef} src="/sounds/lofi-alarm-clock-243766.mp3" />
      </div>
    </div>
  );
}
