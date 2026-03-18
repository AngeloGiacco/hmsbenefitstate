"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const spendingHistory = [
  { year: 2010, amount: 190, label: "£190bn" },
  { year: 2013, amount: 208, label: "£208bn" },
  { year: 2015, amount: 217, label: "£217bn" },
  { year: 2018, amount: 238, label: "£238bn" },
  { year: 2020, amount: 270, label: "£270bn" },
  { year: 2022, amount: 295, label: "£295bn" },
  { year: 2024, amount: 320, label: "£320bn" },
  { year: 2026, amount: 334, label: "£334bn" },
];

const maxAmount = 360;

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 1500;
    const start = performance.now();
    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [isInView, target]);

  return <span ref={ref}>{value}{suffix}</span>;
}

export default function SpendingGrowth() {
  const chartRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(chartRef, { once: true, margin: "-80px" });

  return (
    <section className="py-20 sm:py-32 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <p className="text-offwhite/30 text-xs sm:text-sm tracking-[0.3em] uppercase mb-4 font-mono">
            In the last decade
          </p>
          <h2 className="text-coral font-black text-4xl sm:text-6xl md:text-7xl tracking-tighter font-sans">
            +£<AnimatedCounter target={144} />bn
          </h2>
          <p className="text-offwhite/50 text-base sm:text-lg mt-4 font-light">
            Welfare spending has grown by <span className="text-coral font-semibold">76%</span> since 2010.
            <br className="hidden sm:block" />
            {" "}The Navy budget hasn&apos;t kept pace with inflation.
          </p>
        </motion.div>

        {/* Bar chart */}
        <div ref={chartRef} className="max-w-2xl mx-auto mb-12">
          <div className="space-y-3">
            {spendingHistory.map((entry, i) => {
              const widthPercent = (entry.amount / maxAmount) * 100;
              const isCurrent = entry.year === 2026;
              return (
                <motion.div
                  key={entry.year}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-center gap-3"
                >
                  <span className={`text-xs font-mono w-10 text-right shrink-0 ${isCurrent ? "text-coral" : "text-offwhite/30"}`}>
                    {entry.year}
                  </span>
                  <div className="flex-1 h-7 sm:h-8 bg-offwhite/5 rounded overflow-hidden relative">
                    <motion.div
                      className={`h-full rounded ${isCurrent ? "bg-coral/80" : "bg-coral/30"}`}
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${widthPercent}%` } : {}}
                      transition={{ duration: 0.8, delay: i * 0.08 + 0.2, ease: "easeOut" }}
                    />
                    <span className={`absolute right-2 top-1/2 -translate-y-1/2 text-xs font-mono ${isCurrent ? "text-offwhite/80" : "text-offwhite/30"}`}>
                      {entry.label}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Key stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto"
        >
          <div className="text-center">
            <p className="text-coral font-black text-2xl sm:text-3xl tracking-tight font-sans">+76%</p>
            <p className="text-offwhite/30 text-xs font-mono mt-1">Welfare growth</p>
            <p className="text-offwhite/20 text-xs mt-0.5">since 2010</p>
          </div>
          <div className="text-center">
            <p className="text-coral font-black text-2xl sm:text-3xl tracking-tight font-sans">+£117bn</p>
            <p className="text-offwhite/30 text-xs font-mono mt-1">Annual increase</p>
            <p className="text-offwhite/20 text-xs mt-0.5">year on year</p>
          </div>
          <div className="text-center">
            <p className="text-cyan-400 font-black text-2xl sm:text-3xl tracking-tight font-sans">-55%</p>
            <p className="text-offwhite/30 text-xs font-mono mt-1">Fleet shrinkage</p>
            <p className="text-offwhite/20 text-xs mt-0.5">since 2000</p>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-10 text-offwhite/20 text-sm font-mono"
        >
          Every year welfare goes up, the fleet gets smaller.
        </motion.p>
      </div>
    </section>
  );
}
