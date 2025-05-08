'use client'
import { useState, useEffect, useRef } from "react";
import Clock from "../components/clock";

export default function PomodoroTimer() {
  const [timeLeft, setTimeLeft] = useState(25 * 60); // Default 25 menit
  const [isRunning, setIsRunning] = useState(false); // Untuk track status timer
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const alarmRef = useRef<HTMLAudioElement | null>(null);
  const isAlarmPlayedRef = useRef(false); // Cegah bunyi berulang-ulang

  // Format waktu menjadi mm:ss
  const formatTime = (seconds:number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;
  };

  // Start Timer
  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true);
      isAlarmPlayedRef.current = false;
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev === 1 && !isAlarmPlayedRef.current) {
            if (alarmRef.current) {
              alarmRef.current.play(); // 🔊 Bunyi ketika selesai
              isAlarmPlayedRef.current = true;
            }
          }
          return prev > 0 ? prev - 1 : 0;
        });
      }, 1000);
    }
  };

  // Stop Timer
  const stopTimer = () => {
    setIsRunning(false);
    clearInterval(timerRef.current);
  };

  // Reset Timer
  const resetTimer = () => {
    setIsRunning(false);
    clearInterval(timerRef.current);
    setTimeLeft(25 * 60); // Reset ke 25 menit
  };

  // Cleanup timer saat komponen unmount
  useEffect(() => {
    return () => clearInterval(timerRef.current);
  }, []);

  return (
    <div className="text-center py-10">
      <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-9xl font-notojp font-bold">
        {formatTime(timeLeft)}
      </h1>
      <div className="mt-5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <Clock></Clock>
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
