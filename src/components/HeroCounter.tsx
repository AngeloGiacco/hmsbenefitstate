"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { WELFARE_PER_SECOND, NAVY_PER_SECOND } from "@/data/fleet";

function formatPounds(value: number): string {
  return "£" + value.toLocaleString("en-GB", { maximumFractionDigits: 0 });
}

export default function HeroCounter() {
  const startTime = useRef<number | null>(null);
  const rafId = useRef<number>(0);
  const [welfareSpent, setWelfareSpent] = useState(0);
  const [navySpent, setNavySpent] = useState(0);

  const tick = useCallback((timestamp: number) => {
    if (startTime.current === null) {
      startTime.current = timestamp;
    }
    const seconds = (timestamp - startTime.current) / 1000;
    setWelfareSpent(Math.floor(seconds * WELFARE_PER_SECOND));
    setNavySpent(Math.floor(seconds * NAVY_PER_SECOND));
    rafId.current = requestAnimationFrame(tick);
  }, []);

  useEffect(() => {
    rafId.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId.current);
  }, [tick]);

  const welfareWidth = 95;
  const navyWidth = (NAVY_PER_SECOND / WELFARE_PER_SECOND) * welfareWidth;

  return (
    <section className="full-section relative px-4 overflow-hidden">
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(34,211,238,1) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 w-full max-w-4xl mx-auto text-center">
        {/* Title */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-offwhite/40 text-xs sm:text-sm tracking-[0.3em] uppercase mb-8 sm:mb-12 font-mono"
        >
          Since you opened this page, the UK has spent
        </motion.p>

        {/* Welfare counter */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-4"
        >
          <div className="text-coral font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl tabular-nums tracking-tight glow-coral font-sans">
            {formatPounds(welfareSpent)}
          </div>
          <p className="text-coral/60 text-sm sm:text-lg tracking-[0.2em] uppercase mt-2 font-mono">
            on welfare
          </p>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-offwhite/20 text-2xl sm:text-3xl my-4 sm:my-6"
        >
          &amp;
        </motion.div>

        {/* Navy counter */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-10 sm:mb-16"
        >
          <div className="text-cyan-400 font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl tabular-nums tracking-tight glow-cyan font-sans">
            {formatPounds(navySpent)}
          </div>
          <p className="text-cyan-400/60 text-sm sm:text-lg tracking-[0.2em] uppercase mt-2 font-mono">
            on the Royal Navy
          </p>
        </motion.div>

        {/* Rate comparison bars */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="max-w-lg mx-auto space-y-3"
        >
          <div>
            <div className="flex justify-between items-baseline mb-1">
              <span className="text-coral/80 text-xs font-mono tracking-wider">WELFARE</span>
              <span className="text-coral/60 text-xs font-mono">{formatPounds(WELFARE_PER_SECOND)}/sec</span>
            </div>
            <div className="h-3 bg-offwhite/5 rounded-full overflow-hidden">
              <div
                className="h-full bg-coral rounded-full animate-pulse-bar"
                style={{ width: `${welfareWidth}%` }}
              />
            </div>
          </div>
          <div>
            <div className="flex justify-between items-baseline mb-1">
              <span className="text-cyan-400/80 text-xs font-mono tracking-wider">ROYAL NAVY</span>
              <span className="text-cyan-400/60 text-xs font-mono">{formatPounds(NAVY_PER_SECOND)}/sec</span>
            </div>
            <div className="h-3 bg-offwhite/5 rounded-full overflow-hidden">
              <div
                className="h-full bg-cyan-400 rounded-full"
                style={{ width: `${navyWidth}%` }}
              />
            </div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          className="mt-12 sm:mt-16 bounce-down"
        >
          <p className="text-offwhite/20 text-xs tracking-[0.3em] uppercase mb-2 font-mono">Scroll</p>
          <svg className="w-5 h-5 mx-auto text-offwhite/20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
