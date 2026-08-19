"use client";

import { useEffect, useState } from "react";

const TARGET = new Date("2026-08-28T00:00:00+02:00").getTime();

function getLeft() {
  const distance = Math.max(0, TARGET - Date.now());
  return {
    days: Math.floor(distance / 86400000),
    hours: Math.floor((distance / 3600000) % 24),
    minutes: Math.floor((distance / 60000) % 60),
    seconds: Math.floor((distance / 1000) % 60),
  };
}

export default function Countdown() {
  const [time, setTime] = useState(getLeft());

  useEffect(() => {
    const timer = window.setInterval(() => setTime(getLeft()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="countdown" aria-label="Countdown to Runaway Heart">
      {Object.entries(time).map(([label, value]) => (
        <div className="count-unit" key={label}>
          <strong>{String(value).padStart(2, "0")}</strong>
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
}
