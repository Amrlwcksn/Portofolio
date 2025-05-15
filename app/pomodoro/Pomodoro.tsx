'use client'
import { useState, useEffect, useRef } from "react";
import Clock from "../components/clock";

export default function PomodoroTimer() {
  const DURATION = 25 * 60;
  const [timeLeft, setTimeLeft] = useState(DURATION);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const alarmRef = useRef<HTMLAudioElement | null>(null);
  const isAlarmPlayedRef = useRef(false);
  const startTimeRef = useRef<number | null>(null);

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;
  };

  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true);
      isAlarmPlayedRef.current = false;
      startTimeRef.current = Date.now();
      setTimeLeft(DURATION);

      timerRef.current = setInterval(() => {
        if (startTimeRef.current === null) return;

        const elapsed = Math.floor((Date.now() - startTimeRef.current) / 1000);
        const newTimeLeft = Math.max(DURATION - elapsed, 0);

        setTimeLeft(newTimeLeft);

        if (newTimeLeft === 0 && !isAlarmPlayedRef.current) {
          if (alarmRef.current) {
            alarmRef.current.play();
          }
          isAlarmPlayedRef.current = true;
          setIsRunning(false);
          clearInterval(timerRef.current!);
        }
      }, 1000);
    }
  };

  const stopTimer = () => {
    setIsRunning(false);
    if (timerRef.current) clearInterval(timerRef.current);
  };

  const resetTimer = () => {
    setIsRunning(false);
    if (timerRef.current) clearInterval(timerRef.current);
    setTimeLeft(DURATION);
    startTimeRef.current = null;
    isAlarmPlayedRef.current = false;
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  return (
    <div className="text-center py-10">
      <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-9xl font-notojp font-bold">
        {formatTime(timeLeft)}
      </h1>
      <div className="mt-5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <Clock />
      </div>
      <div>
        <h1 className="mt-10 text-center font-notojp font-bold ">
          You don’t need to be perfect, just consistent.
        </h1>
      </div>
      <div className="mt-4 border-2 rounded-smflex flex-col md:flex-row items-center gap-4 md:gap-x-6 border-2 border-zinc-300  hover:ansition-all duration-300 p-2 rounded-3xl w-full max-w-fit mx-auto">
        <div className="flex justify-center gap-4">
          {!isRunning && timeLeft > 0 && (
            <button
              onClick={startTimer}
              className="font-notojp font-bold hover:scale-105 transition duration-200 px-4 py-2 rounded-2xl hover:bg-blue-600 hover:text-white"
            >
              Start
            </button>
          )}
          {isRunning && (
            <button
              onClick={stopTimer}
              className="font-notojp font-bold hover:scale-105 transition duration-200 px-4 py-2 rounded-2xl hover:bg-red-600 hover:text-white"
            >
              Stop
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
