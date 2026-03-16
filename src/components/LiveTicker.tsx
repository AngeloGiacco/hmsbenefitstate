"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { WELFARE_PER_SECOND, NAVY_PER_SECOND } from "@/data/fleet";

function formatPounds(value: number): string {
  return value.toLocaleString("en-GB", {
    maximumFractionDigits: 0,
  });
}

export default function LiveTicker() {
  const startTime = useRef<number | null>(null);
  const rafId = useRef<number>(0);
  const [welfareSpent, setWelfareSpent] = useState(0);
  const [navySpent, setNavySpent] = useState(0);
  const [elapsed, setElapsed] = useState(0);

  const tick = useCallback((timestamp: number) => {
    if (startTime.current === null) {
      startTime.current = timestamp;
    }
    const seconds = (timestamp - startTime.current) / 1000;
    setElapsed(seconds);
    setWelfareSpent(Math.floor(seconds * WELFARE_PER_SECOND));
    setNavySpent(Math.floor(seconds * NAVY_PER_SECOND));
    rafId.current = requestAnimationFrame(tick);
  }, []);

  useEffect(() => {
    rafId.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId.current);
  }, [tick]);

  const welfareBarWidth = 85;
  const navyBarWidth = (NAVY_PER_SECOND / WELFARE_PER_SECOND) * welfareBarWidth;

  return (
    <div className="w-full max-w-3xl mx-auto font-mono">
      {/* Rate display */}
      <div className="mb-6 space-y-4">
        {/* Welfare bar */}
        <div>
          <div className="flex items-baseline justify-between mb-1">
            <span className="text-coral text-sm font-bold tracking-wider uppercase">
              Welfare
            </span>
            <span className="text-coral text-sm">
              £{formatPounds(WELFARE_PER_SECOND)}/sec
            </span>
          </div>
          <div className="w-full h-4 bg-navy-800 rounded overflow-hidden border border-coral/30">
            <div
              className="h-full bg-coral animate-pulse-bar rounded"
              style={{ width: `${welfareBarWidth}%` }}
            />
          </div>
        </div>

        {/* Navy bar */}
        <div>
          <div className="flex items-baseline justify-between mb-1">
            <span className="text-cyan-400 text-sm font-bold tracking-wider uppercase">
              Royal Navy
            </span>
            <span className="text-cyan-400 text-sm">
              £{formatPounds(NAVY_PER_SECOND)}/sec
            </span>
          </div>
          <div className="w-full h-4 bg-navy-800 rounded overflow-hidden border border-cyan-400/30">
            <div
              className="h-full bg-cyan-400 rounded"
              style={{ width: `${navyBarWidth}%` }}
            />
          </div>
        </div>
      </div>

      {/* Running counter */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="naval-card rounded p-4 text-center">
          <div className="text-xs text-coral/70 uppercase tracking-widest mb-1">
            Welfare spent
          </div>
          <div className="text-coral text-xl md:text-2xl font-bold tabular-nums">
            £{formatPounds(welfareSpent)}
          </div>
        </div>
        <div className="naval-card rounded p-4 text-center">
          <div className="text-xs text-cyan-400/70 uppercase tracking-widest mb-1">
            Royal Navy spent
          </div>
          <div className="text-cyan-400 text-xl md:text-2xl font-bold tabular-nums">
            £{formatPounds(navySpent)}
          </div>
        </div>
      </div>

      {/* Commentary */}
      <p className="text-offwhite/60 text-xs md:text-sm leading-relaxed border-t border-cyan-400/10 pt-4">
        In the time you&apos;ve been reading this, the UK has spent{" "}
        <span className="text-coral font-bold">£{formatPounds(welfareSpent)}</span>{" "}
        on welfare and{" "}
        <span className="text-cyan-400 font-bold">£{formatPounds(navySpent)}</span>{" "}
        on the Royal Navy. The Royal Navy would like to remind you that both its
        aircraft carriers are currently in dock.
      </p>
    </div>
  );
}
