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

function ShipSilhouettes({ percentage }: { percentage: number }) {
  const count = Math.max(0, Math.round(percentage * 3));
  return (
    <div className="flex flex-wrap gap-1.5 mt-3">
      {Array.from({ length: count }, (_, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.03, duration: 0.2 }}
          className="text-[#22d3ee] text-lg"
        >
          ▲
        </motion.span>
      ))}
    </div>
  );
}

function WelfareBar({
  remaining,
  total,
}: {
  remaining: number;
  total: number;
}) {
  const ratio = remaining / total;
  return (
    <div className="mt-3 space-y-2">
      <div className="flex items-center gap-2 text-xs font-mono text-[#e8e6e3]/40">
        <span>£0</span>
        <div className="flex-1" />
        <span>{formatBillions(total)}</span>
      </div>
      <div className="relative h-8 bg-[#e8e6e3]/5 border border-[#e8e6e3]/10 overflow-hidden">
        <motion.div
          className="absolute inset-y-0 left-0 bg-[#22d3ee]/20 border-r border-[#22d3ee]/40"
          animate={{ width: `${ratio * 100}%` }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
        <div className="absolute inset-0 flex items-center justify-center text-xs font-mono text-[#e8e6e3]/60">
          {(ratio * 100).toFixed(1)}% retained
        </div>
      </div>
      <p className="text-[#e8e6e3]/30 text-xs font-mono text-center">
        The bar barely moves.
      </p>
    </div>
  );
}

export default function RefitPlanner() {
  const [percentage, setPercentage] = useState(0);
  const lastSnap = useRef(-1);

  const data = useMemo(() => interpolateStop(percentage), [percentage]);

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
    <section className="w-full max-w-4xl mx-auto px-4 py-16 font-[var(--font-mono)]">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-[#22d3ee] text-xl md:text-2xl font-bold tracking-wider mb-2 text-center"
      >
        REFIT ORDER: HMS GREAT BRITAIN
      </motion.h2>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="h-px bg-[#22d3ee]/30 mb-10 origin-center"
      />

      {/* Slider */}
      <div className="max-w-xl mx-auto mb-10">
        <div className="flex items-baseline justify-between mb-2">
          <span className="text-[#e8e6e3]/60 text-xs font-mono">
            Redirect welfare increase to the Royal Navy
          </span>
          <span className="text-[#22d3ee] font-bold text-lg">
            {percentage.toFixed(1)}%
          </span>
        </div>

        <div className="relative">
          <input
            type="range"
            min={0}
            max={10}
            step={0.1}
            value={percentage}
            onChange={handleChange}
            className="w-full h-2 appearance-none cursor-pointer rounded-none outline-none
              [&::-webkit-slider-runnable-track]:h-2
              [&::-webkit-slider-runnable-track]:bg-[#e8e6e3]/10
              [&::-webkit-slider-runnable-track]:border
              [&::-webkit-slider-runnable-track]:border-[#e8e6e3]/20
              [&::-webkit-slider-thumb]:appearance-none
              [&::-webkit-slider-thumb]:h-5
              [&::-webkit-slider-thumb]:w-5
              [&::-webkit-slider-thumb]:rounded-none
              [&::-webkit-slider-thumb]:bg-[#22d3ee]
              [&::-webkit-slider-thumb]:border-2
              [&::-webkit-slider-thumb]:border-[#0a0e17]
              [&::-webkit-slider-thumb]:mt-[-6px]
              [&::-webkit-slider-thumb]:shadow-[0_0_8px_rgba(34,211,238,0.5)]
              [&::-moz-range-track]:h-2
              [&::-moz-range-track]:bg-[#e8e6e3]/10
              [&::-moz-range-track]:border
              [&::-moz-range-track]:border-[#e8e6e3]/20
              [&::-moz-range-thumb]:h-5
              [&::-moz-range-thumb]:w-5
              [&::-moz-range-thumb]:rounded-none
              [&::-moz-range-thumb]:bg-[#22d3ee]
              [&::-moz-range-thumb]:border-2
              [&::-moz-range-thumb]:border-[#0a0e17]
              [&::-moz-range-thumb]:shadow-[0_0_8px_rgba(34,211,238,0.5)]"
          />
          {/* Snap point markers */}
          <div className="absolute top-3 left-0 right-0 flex pointer-events-none">
            {[...SNAP_POINTS].map((snap) => (
              <div
                key={snap}
                className="absolute h-1.5 w-px bg-[#22d3ee]/40"
                style={{ left: `${(snap / 10) * 100}%` }}
              />
            ))}
          </div>
        </div>

        <div className="flex justify-between text-[#e8e6e3]/30 text-xs font-mono mt-2">
          <span>0%</span>
          <span>10%</span>
        </div>
      </div>

      {/* Two-panel layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {/* Left: Shipyard Output */}
        <motion.div
          layout
          className="border border-[#22d3ee]/20 p-5"
        >
          <h3 className="text-[#22d3ee] text-sm font-bold tracking-wider mb-1">
            SHIPYARD OUTPUT
          </h3>
          <p className="text-[#e8e6e3]/40 text-xs mb-4 font-mono">
            Redirected: {data.amount}
          </p>
          <p className="text-[#e8e6e3] text-sm font-mono leading-relaxed">
            {data.fleetGains}
          </p>
          <ShipSilhouettes percentage={percentage} />
        </motion.div>

        {/* Right: Welfare Impact */}
        <motion.div
          layout
          className="border border-[#e8e6e3]/10 p-5"
        >
          <h3 className="text-[#e8e6e3]/70 text-sm font-bold tracking-wider mb-1">
            WELFARE IMPACT
          </h3>
          <p className="text-[#e8e6e3]/40 text-xs mb-4 font-mono">
            Remaining: {data.welfareRemaining}
          </p>
          <div className="space-y-2 text-sm font-mono">
            <div className="flex justify-between">
              <span className="text-[#e8e6e3]/50">Increase since 2015:</span>
              <span className="text-[#e8e6e3]">{data.welfareIncrease}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#e8e6e3]/50">Growth:</span>
              <span className="text-[#e8e6e3]">
                {data.welfarePercentIncrease}
              </span>
            </div>
          </div>
          <WelfareBar
            remaining={
              TOTAL_WELFARE - (data.amountValue ?? 0)
            }
            total={TOTAL_WELFARE}
          />
        </motion.div>
      </div>

      {/* Bottom annotation */}
      <motion.div
        key={data.quip}
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="text-center border-t border-[#e8e6e3]/10 pt-6"
      >
        <p className="text-[#e8e6e3]/50 text-sm font-mono italic max-w-lg mx-auto">
          &ldquo;{data.quip}&rdquo;
        </p>
      </motion.div>
    </section>
  );
}
