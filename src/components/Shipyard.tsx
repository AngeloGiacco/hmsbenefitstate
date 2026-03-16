"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { shipyardComparisons } from "@/data/fleet";

function ShipGrid({
  comparison,
  index,
  onVisibleCount,
}: {
  comparison: (typeof shipyardComparisons)[number];
  index: number;
  onVisibleCount: (count: number) => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleRows, setVisibleRows] = useState(0);
  const rowSize = 20;
  const totalRows = Math.ceil(comparison.count / rowSize);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const rows = container.querySelectorAll<HTMLElement>("[data-row]");
    const observer = new IntersectionObserver(
      (entries) => {
        let maxVisible = visibleRows;
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const rowIndex = Number(
              (entry.target as HTMLElement).dataset.row
            );
            if (rowIndex + 1 > maxVisible) {
              maxVisible = rowIndex + 1;
            }
          }
        });
        if (maxVisible > visibleRows) {
          setVisibleRows(maxVisible);
        }
      },
      { threshold: 0.1 }
    );

    rows.forEach((row) => observer.observe(row));
    return () => observer.disconnect();
  }, [visibleRows]);

  useEffect(() => {
    const shipsRevealed = Math.min(visibleRows * rowSize, comparison.count);
    onVisibleCount(shipsRevealed);
  }, [visibleRows, comparison.count, rowSize, onVisibleCount]);

  const silhouette = comparison.shipType.includes("Carrier")
    ? "▲"
    : comparison.shipType.includes("Submarine")
      ? "◆"
      : "▲";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="mb-4">
        <h3 className="text-[#22d3ee] font-bold text-base tracking-wider">
          {comparison.count}x {comparison.shipType}
        </h3>
        <p className="text-[#e8e6e3]/40 text-xs font-mono">
          at current unit cost
        </p>
      </div>

      <div ref={containerRef} className="mb-4">
        {Array.from({ length: totalRows }, (_, rowIdx) => {
          const shipsInRow =
            rowIdx < totalRows - 1
              ? rowSize
              : comparison.count - rowIdx * rowSize;
          const isVisible = rowIdx < visibleRows;

          return (
            <div
              key={rowIdx}
              data-row={rowIdx}
              className="transition-all duration-300 overflow-hidden"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(8px)",
              }}
            >
              <div className="flex flex-wrap gap-x-1 gap-y-0.5 leading-tight text-xs font-mono">
                {Array.from({ length: shipsInRow }, (_, shipIdx) => (
                  <span
                    key={shipIdx}
                    className="text-[#22d3ee]/70 hover:text-[#22d3ee] transition-colors"
                  >
                    {silhouette}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <p className="text-[#e8e6e3]/50 text-sm font-mono italic border-l-2 border-[#22d3ee]/30 pl-3">
        {comparison.navyNote}
      </p>
    </motion.div>
  );
}

export default function Shipyard() {
  const [shipCounts, setShipCounts] = useState<Record<number, number>>({});

  const handleVisibleCount = useCallback((index: number, count: number) => {
    setShipCounts((prev) => {
      if (prev[index] === count) return prev;
      return { ...prev, [index]: count };
    });
  }, []);

  const totalScrolledPast = Object.values(shipCounts).reduce(
    (sum, c) => sum + c,
    0
  );

  return (
    <section className="relative w-full max-w-4xl mx-auto px-4 py-16 font-[var(--font-mono)]">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-[#22d3ee] text-xl md:text-2xl font-bold tracking-wider mb-2 text-center"
      >
        THE SHIPYARD: WHAT &pound;117 BILLION BUYS
      </motion.h2>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="h-px bg-[#22d3ee]/30 mb-8 origin-center"
      />

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-[#e8e6e3]/60 text-sm font-mono text-center mb-12 max-w-2xl mx-auto"
      >
        UK welfare spending increases by roughly &pound;117 billion per year.
        That annual <em>increase alone</em> could buy the following fleet
        &mdash; every single year.
      </motion.p>

      <div className="space-y-0">
        {shipyardComparisons.map((comparison, i) => (
          <div key={comparison.shipType}>
            <ShipGrid
              comparison={comparison}
              index={i}
              onVisibleCount={(count) => handleVisibleCount(i, count)}
            />
            {i < shipyardComparisons.length - 1 && (
              <div className="flex items-center gap-4 my-10">
                <div className="flex-1 h-px bg-[#e8e6e3]/10" />
                <span className="text-[#e8e6e3]/30 text-xs font-mono tracking-widest">
                  OR
                </span>
                <div className="flex-1 h-px bg-[#e8e6e3]/10" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Sticky counter */}
      <div className="sticky bottom-0 left-0 right-0 z-10 mt-12 pointer-events-none">
        <div className="bg-[#0a0e17]/90 backdrop-blur border-t border-[#22d3ee]/20 py-3 px-4 text-center">
          <span className="text-[#e8e6e3]/50 text-xs font-mono">
            You have scrolled past{" "}
            <span className="text-[#22d3ee] font-bold text-sm">
              {totalScrolledPast}
            </span>{" "}
            ships
          </span>
        </div>
      </div>
    </section>
  );
}
