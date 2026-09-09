#!/usr/bin/env node
// Countdown to a target date: days, hours, minutes, seconds. No dependencies.
const target = new Date(process.argv[2] || "2030-01-01T00:00:00Z");

function parts(ms) {
  const s = Math.max(0, Math.floor(ms / 1000));
  return {
    days: Math.floor(s / 86400),
    hours: Math.floor((s % 86400) / 3600),
    minutes: Math.floor((s % 3600) / 60),
    seconds: s % 60,
  };
}

const pad = (n) => String(n).padStart(2, "0");

setInterval(() => {
  const d = parts(target - Date.now());
  process.stdout.write(
    `\r${d.days}d ${pad(d.hours)}:${pad(d.minutes)}:${pad(d.seconds)} `
  );
}, 1000);
