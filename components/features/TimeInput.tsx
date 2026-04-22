"use client";

import { useState } from "react";

type Props = {
  onStart: (seconds: number) => void;
  disabled: boolean;
};

const MAX_MIN = 15;
const MAX_SEC = 59;

export default function TimeInput({ onStart, disabled }: Props) {
  const [minutes, setMinutes] = useState<number>(15);
  const [seconds, setSeconds] = useState<number>(59);

  const handleStart = () => {
    const m = Math.min(Math.max(0, minutes), MAX_MIN);
    let s = Math.min(Math.max(0, seconds), MAX_SEC);

    // Prevent > 15:59
    if (m === 15 && s > 59) s = 59;

    const totalSeconds = m * 60 + s;
    onStart(totalSeconds);
  };

  return (
    <div className="space-y-3">
      <div className="flex gap-2">
        <input
          type="number"
          value={minutes}
          disabled={disabled}
          onChange={(e) => setMinutes(Number(e.target.value))}
          className="w-1/2 p-2 rounded bg-gray-700 text-white"
          placeholder="Min"
        />
        <input
          type="number"
          value={seconds}
          disabled={disabled}
          onChange={(e) => setSeconds(Number(e.target.value))}
          className="w-1/2 p-2 rounded bg-gray-700 text-white"
          placeholder="Sec"
        />
      </div>

      <button
        onClick={handleStart}
        disabled={disabled}
        className="w-full bg-green-500 hover:bg-green-600 py-2 rounded-lg disabled:opacity-50"
      >
        Start
      </button>
    </div>
  );
}
