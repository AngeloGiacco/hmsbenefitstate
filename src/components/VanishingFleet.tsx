"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { timelineData } from "@/data/fleet";

export default function VanishingFleet() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevVessels, setPrevVessels] = useState(timelineData[0].vessels);

  const maxVessels = timelineData[0].vessels;

  const scrollToIndex = useCallback(
    (index: number) => {
      const clamped = Math.max(0, Math.min(index, timelineData.length - 1));
      if (scrollRef.current) {
        const panelWidth = scrollRef.current.offsetWidth;
        scrollRef.current.scrollTo({
          left: panelWidth * clamped,
          behavior: "smooth",
        });
      }
    },
    []
  );

  // Handle scroll to track active panel
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      const panelWidth = container.offsetWidth;
      const newIndex = Math.round(container.scrollLeft / panelWidth);
      if (newIndex !== activeIndex) {
        setPrevVessels(timelineData[activeIndex].vessels);
        setActiveIndex(newIndex);
      }
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, [activeIndex]);

  // Arrow key navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        scrollToIndex(activeIndex + 1);
      } else if (e.key === "ArrowLeft") {
        scrollToIndex(activeIndex - 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, scrollToIndex]);

  const entry = timelineData[activeIndex];
  const vanishedCount = Math.max(0, prevVessels - entry.vessels);

  // Generate ship indicators for a given entry
  const renderShips = (vessels: number, vanished: number) => {
    const shipScale = Math.ceil(maxVessels / 30); // scale down for display
    const displayCount = Math.ceil(vessels / shipScale);
    const vanishedDisplay = Math.ceil(vanished / shipScale);
    const totalDisplay = displayCount + vanishedDisplay;

    return (
      <div className="flex flex-wrap gap-1 justify-center my-6">
        {Array.from({ length: totalDisplay }).map((_, i) => {
          const isVanishing = i >= displayCount;
          return (
            <AnimatePresence key={i}>
              {isVanishing ? (
                <motion.span
                  initial={{ opacity: 1, color: "#e8e6e3" }}
                  animate={{ opacity: 0, color: "#f87171" }}
                  transition={{ duration: 1.2, delay: i * 0.05 }}
                  className="text-lg leading-none"
                >
                  &#9650;
                </motion.span>
              ) : (
                <motion.span
                  initial={{ opacity: 0.3 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="text-lg leading-none text-offwhite/70"
                >
                  &#9650;
                </motion.span>
              )}
            </AnimatePresence>
          );
        })}
      </div>
    );
  };

  return (
    <section className="py-16">
      <div className="px-4 max-w-3xl mx-auto mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-cyan-400 tracking-widest mb-2">
          THE VANISHING FLEET
        </h2>
        <p className="text-offwhite/50 text-xs tracking-wider">
          USE ARROW KEYS OR SWIPE TO NAVIGATE
        </p>
      </div>

      <div
        ref={scrollRef}
        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {timelineData.map((item, index) => (
          <div
            key={item.year}
            className="flex-none w-full snap-center px-4"
          >
            <div className="max-w-3xl mx-auto border border-navy-600 bg-navy-800 p-8 min-h-[320px] flex flex-col justify-center">
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-cyan-400 mb-2">
                  {item.year}
                </div>
                <div className="text-3xl font-bold text-offwhite mb-1">
                  {item.vessels}{" "}
                  <span className="text-offwhite/50 text-lg">vessels</span>
                </div>
                {index > 0 && (
                  <div className="text-coral text-sm mb-4">
                    &minus;{timelineData[index - 1].vessels - item.vessels} since{" "}
                    {timelineData[index - 1].year}
                  </div>
                )}

                {renderShips(
                  item.vessels,
                  index === activeIndex ? vanishedCount : 0
                )}

                <p className="text-offwhite/60 text-sm mt-4 max-w-md mx-auto leading-relaxed">
                  {item.event}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {timelineData.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToIndex(index)}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              index === activeIndex
                ? "bg-cyan-400"
                : "bg-navy-600 hover:bg-navy-600/80"
            }`}
            aria-label={`Go to ${timelineData[index].year}`}
          />
        ))}
      </div>

      {/* End annotation */}
      <div className="px-4 max-w-3xl mx-auto mt-8">
        <p className="text-offwhite/40 text-xs font-mono leading-relaxed border-l-2 border-cyan-400/30 pl-4">
          In 1990, the Royal Navy had 150 vessels and could credibly project
          power globally. In 2026, it has roughly 30 — and more admirals than
          ships. The welfare budget, meanwhile, has grown by £117bn per year.
          The fleet didn&apos;t vanish overnight. It was traded, review by
          review, for things that win elections.
        </p>
      </div>
    </section>
  );
}
