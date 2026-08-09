"use client";

import { useEffect, useState } from "react";

const MARKS = [
  { at: 0, label: "Ankle", note: "where the water starts" },
  { at: 22, label: "Knee", note: "roads to Kamoki, my train ride" },
  { at: 48, label: "Waist", note: "homes and shops, Wazirabad" },
  { at: 74, label: "10 ft", note: "the underpass in Kamoke" },
  { at: 96, label: "Rising still", note: "this is where it changes" },
];

export default function WaterGauge() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const scrollTop = doc.scrollTop || document.body.scrollTop;
      const scrollHeight =
        (doc.scrollHeight || document.body.scrollHeight) - doc.clientHeight;
      const pct = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      setProgress(Math.min(100, Math.max(0, pct)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      className="fixed left-6 top-0 z-20 hidden h-screen w-16 items-stretch py-24 md:flex lg:left-10"
      aria-hidden="true"
    >
      <div className="relative w-[3px] flex-1 rounded-full bg-line/40">
        <div
          className="absolute bottom-0 left-0 w-full rounded-full bg-flood transition-[height] duration-150 ease-out"
          style={{ height: `${progress}%` }}
        />
        {MARKS.map((m) => (
          <div
            key={m.label}
            className="absolute left-1/2 -translate-x-1/2"
            style={{ bottom: `${m.at}%` }}
          >
            <div
              className={`h-2 w-2 -translate-x-1/2 rounded-full ${
                progress >= m.at ? "bg-warn" : "bg-line"
              }`}
            />
            <span
              className={`absolute left-4 top-1/2 -translate-y-1/2 whitespace-nowrap font-mono text-[10px] uppercase tracking-wider transition-opacity ${
                progress >= m.at - 3 ? "opacity-100" : "opacity-0"
              } ${progress >= m.at ? "text-flood" : "text-line"}`}
            >
              {m.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
