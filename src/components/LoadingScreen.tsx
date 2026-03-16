"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

const lines = [
  "ADMIRALTY FILE NO. 2026/001",
  "CLASSIFICATION: PUBLIC",
  "SUBJECT: HMS BENEFIT STATE — VESSEL ASSESSMENT",
  "STATUS: ACTIVE",
];

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Total time: lines fade in sequentially (each ~0.3s delay + 0.4s duration)
    // then hold for a moment, then fade out
    const totalLineTime = lines.length * 300 + 400;
    const holdTime = 600;
    const timer = setTimeout(() => {
      setVisible(false);
    }, totalLineTime + holdTime);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {visible && (
        <motion.div
          key="loading"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ backgroundColor: "#0a0e17" }}
        >
          <div className="flex flex-col gap-3 px-6 text-center font-mono text-sm sm:text-base">
            {lines.map((line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: i * 0.3,
                  ease: "easeOut",
                }}
                style={{ color: "#67e8f9" }}
              >
                {line}
              </motion.p>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
