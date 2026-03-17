"use client";

import { useState, useMemo, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import { sliderStops } from "@/data/fleet";

const TOTAL_WELFARE = 334_000_000_000;
const WELFARE_2015 = 217_000_000_000;
const SNAP_POINTS = new Set([1, 3, 5, 10]);

function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

function formatBillions(value: number): string {
  return `£${(value / 1_000_000_000).toFixed(1)}bn`;
}

function interpolateStop(percentage: number) {
  if (percentage <= 0) {
    return {
      amount: "£0",
      amountValue: 0,
      fleetGains: "No redirection. Status quo. The fleet continues to shrink.",
      welfareRemaining: formatBillions(TOTAL_WELFARE),
      welfareIncrease: formatBillions(TOTAL_WELFARE - WELFARE_2015),
      welfarePercentIncrease: `+${Math.round(((TOTAL_WELFARE - WELFARE_2015) / WELFARE_2015) * 100)}%`,
      quip: "Nothing changes. Nothing improves.",
    };
  }

  const exact = sliderStops.find((s) => s.percentage === percentage);
  if (exact) return exact;

  let lower = sliderStops[0];
  let upper = sliderStops[sliderStops.length - 1];

  for (let i = 0; i < sliderStops.length - 1; i++) {
    if (
      sliderStops[i].percentage <= percentage &&
      sliderStops[i + 1].percentage >= percentage
    ) {
      lower = sliderStops[i];
      upper = sliderStops[i + 1];
      break;
    }
  }

  const t =
    (percentage - lower.percentage) / (upper.percentage - lower.percentage);
  const amountValue = lerp(lower.amountValue, upper.amountValue, t);
  const remaining = TOTAL_WELFARE - amountValue;
  const increase = remaining - WELFARE_2015;

  return {
    amount: formatBillions(amountValue) + "/yr",
    amountValue,
    fleetGains: t < 0.5 ? lower.fleetGains : upper.fleetGains,
    welfareRemaining: formatBillions(remaining),
    welfareIncrease: formatBillions(increase),
    welfarePercentIncrease: `+${Math.round((increase / WELFARE_2015) * 100)}%`,
    quip: t < 0.5 ? lower.quip : upper.quip,
  };
}

export default function RefitPlanner() {
  const [percentage, setPercentage] = useState(0);
  const lastSnap = useRef(-1);

  const data = useMemo(() => interpolateStop(percentage), [percentage]);

  const remaining = TOTAL_WELFARE - (data.amountValue ?? 0);
  const retainedPercent = (remaining / TOTAL_WELFARE) * 100;

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const val = parseFloat(e.target.value);
      setPercentage(val);

      const nearestSnap = [...SNAP_POINTS].find(
        (s) => Math.abs(val - s) < 0.25
      );
      if (nearestSnap !== undefined && nearestSnap !== lastSnap.current) {
        lastSnap.current = nearestSnap;
        try {
          navigator?.vibrate?.(10);
        } catch {
          // vibrate not supported
        }
      } else if (nearestSnap === undefined) {
        lastSnap.current = -1;
      }
    },
    []
  );

  return (
    <section className="py-20 sm:py-32 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <p className="text-offwhite/30 text-xs sm:text-sm tracking-[0.3em] uppercase mb-4 font-mono">
            What if you redirected just
          </p>
          <h2 className="text-cyan-400 font-black text-7xl sm:text-9xl tracking-tighter font-sans">
            {percentage.toFixed(1)}%
          </h2>
          <p className="text-offwhite/30 text-xs sm:text-sm tracking-[0.3em] uppercase mt-4 font-mono">
            of welfare spending to the Royal Navy?
          </p>
        </motion.div>

        {/* Slider */}
        <div className="mb-12 sm:mb-16">
          <input
            type="range"
            min={0}
            max={10}
            step={0.1}
            value={percentage}
            onChange={handleChange}
          />
          <div className="flex justify-between text-offwhite/20 text-xs font-mono mt-2">
            <span>0%</span>
            {[...SNAP_POINTS].map((snap) => (
              <span key={snap} className={percentage >= snap - 0.25 && percentage <= snap + 0.25 ? "text-cyan-400/60" : ""}>
                {snap}%
              </span>
            ))}
          </div>
        </div>

        {/* Results */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Navy gets */}
          <motion.div
            layout
            className="border border-cyan-400/20 rounded-lg p-6 sm:p-8"
          >
            <p className="text-cyan-400/60 text-xs tracking-[0.2em] uppercase mb-3 font-mono">
              Navy receives
            </p>
            <p className="text-cyan-400 font-black text-3xl sm:text-4xl tracking-tight font-sans mb-4">
              {data.amount}
            </p>
            <p className="text-offwhite/60 text-sm leading-relaxed">
              {data.fleetGains}
            </p>
            {/* Ship silhouettes */}
            <div className="flex flex-wrap gap-1.5 mt-4">
              {Array.from({ length: Math.max(0, Math.round(percentage * 3)) }, (_, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.03, duration: 0.2 }}
                  className="text-cyan-400/70 text-base"
                >
                  ▲
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Welfare keeps */}
          <motion.div
            layout
            className="border border-offwhite/10 rounded-lg p-6 sm:p-8"
          >
            <p className="text-offwhite/40 text-xs tracking-[0.2em] uppercase mb-3 font-mono">
              Welfare retains
            </p>
            <p className="text-offwhite font-black text-3xl sm:text-4xl tracking-tight font-sans mb-4">
              {data.welfareRemaining}
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-offwhite/40">Increase since 2015</span>
                <span className="text-offwhite/70">{data.welfareIncrease}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-offwhite/40">Growth</span>
                <span className="text-offwhite/70">{data.welfarePercentIncrease}</span>
              </div>
            </div>
            {/* Retention bar */}
            <div className="mt-4">
              <div className="h-3 bg-offwhite/5 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-offwhite/20 rounded-full"
                  animate={{ width: `${retainedPercent}%` }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
              </div>
              <p className="text-offwhite/20 text-xs font-mono mt-1 text-center">
                {retainedPercent.toFixed(1)}% retained — the bar barely moves
              </p>
            </div>
          </motion.div>
        </div>

        {/* Quip */}
        <motion.div
          key={data.quip}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-center"
        >
          <p className="text-offwhite/30 text-sm font-mono italic">
            &ldquo;{data.quip}&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  );
}
