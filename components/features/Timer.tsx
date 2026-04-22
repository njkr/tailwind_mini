"use client";

import { useEffect, useRef, useState } from "react";
import TimeInput from "./TimeInput";

const MAX_TIME = 15 * 60 + 59; // 15:59
const RESET_TIME = 14 * 60 + 59; // 14:59

export default function Timer() {
  const [time, setTime] = useState<number>(MAX_TIME);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startTimer = (inputSeconds: number) => {
    clearInterval(intervalRef.current as NodeJS.Timeout);
    setTime(inputSeconds);
    setIsRunning(true);

    intervalRef.current = setInterval(() => {
      setTime((prev) => {
        if (prev <= 0) {
          return RESET_TIME; // 🔁 reset to 14:59
        }
        return prev - 1;
      });
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current as NodeJS.Timeout);
    setIsRunning(false);
  };

  useEffect(() => {
    return () => clearInterval(intervalRef.current as NodeJS.Timeout);
  }, []);

  const formatTime = (seconds: number): string => {
    const m = String(Math.floor(seconds / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    return `${m}:${s}`;
  };

  return (
    <div className="bg-gray-800 p-6 rounded-2xl shadow-lg w-80 text-center space-y-4">
      <h1 className="text-xl font-bold">Timer</h1>

      <div className="text-4xl font-mono">{formatTime(time)}</div>

      <TimeInput onStart={startTimer} disabled={isRunning} />

      <button
        onClick={stopTimer}
        className="w-full bg-red-500 hover:bg-red-600 py-2 rounded-lg"
      >
        Stop
      </button>
    </div>
  );
}
