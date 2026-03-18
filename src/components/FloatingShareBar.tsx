"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingShareBar() {
  const [visible, setVisible] = useState(false);
  const [copied, setCopied] = useState(false);

  const shareText = "£334bn on welfare. £15.5bn for the Navy. Both carriers in dock. See why:";
  const shareUrl = "https://hmsbenefitstate.co.uk";

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleShareX = () => {
    window.open(
      `https://x.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
      "_blank"
    );
  };

  const handleShareWhatsApp = () => {
    window.open(
      `https://wa.me/?text=${encodeURIComponent(shareText + " " + shareUrl)}`,
      "_blank"
    );
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 60, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-12 left-1/2 -translate-x-1/2 z-40 flex items-center gap-2 bg-navy-800/95 backdrop-blur-md border border-offwhite/10 rounded-full px-3 py-2 shadow-lg shadow-black/40"
        >
          <button
            onClick={handleShareX}
            className="text-offwhite/60 hover:text-offwhite text-xs font-semibold px-3 py-1.5 rounded-full hover:bg-offwhite/5 transition-all"
          >
            X
          </button>
          <div className="w-px h-4 bg-offwhite/10" />
          <button
            onClick={handleShareWhatsApp}
            className="text-offwhite/60 hover:text-offwhite text-xs font-semibold px-3 py-1.5 rounded-full hover:bg-offwhite/5 transition-all"
          >
            WhatsApp
          </button>
          <div className="w-px h-4 bg-offwhite/10" />
          <button
            onClick={handleCopy}
            className="text-offwhite/60 hover:text-offwhite text-xs font-semibold px-3 py-1.5 rounded-full hover:bg-offwhite/5 transition-all"
          >
            {copied ? "Copied" : "Copy link"}
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
