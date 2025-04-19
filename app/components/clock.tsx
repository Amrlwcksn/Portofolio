'use client';

import { useEffect, useState } from 'react';

export default function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (date: Date) =>
    date.toLocaleTimeString('id-ID', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    });

  const formatDate = (date: Date) =>
    date.toLocaleDateString('id-ID', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

  return (
    <div className="flex items-center gap-2 sm:gap-3 text-zinc-800 dark:text-zinc-200 font-bold text-sm sm:text-base">
      <span className="tracking-tight">{formatDate(time)}</span>
      <span className="mx-1 text-zinc-400">•</span>
      <span className="font-notojp font-semibold text-lg sm:text-xl">
        {formatTime(time)}
      </span>
    </div>
  );
}
