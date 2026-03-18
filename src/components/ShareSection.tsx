"use client";

import { motion } from "framer-motion";

export default function ShareSection() {
  const shareText =
    "£334bn on welfare. £15.5bn for the Navy. Both carriers in dock. See why:";
  const shareUrl = "https://hmsbenefitstate.co.uk";

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
    } catch {
      // fallback
    }
  };

  return (
    <section className="py-20 sm:py-32 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-offwhite/30 text-xs sm:text-sm tracking-[0.3em] uppercase mb-4 font-mono">
            Think others should see this?
          </p>
          <h2 className="text-offwhite font-black text-3xl sm:text-5xl tracking-tight font-sans mb-8">
            Share the numbers
          </h2>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            <button
              onClick={handleShareX}
              className="share-btn bg-offwhite/5 border border-offwhite/10 text-offwhite px-6 sm:px-8 py-3.5 rounded-lg text-sm font-semibold tracking-wider hover:bg-offwhite/10 hover:border-cyan-400/30 transition-all"
            >
              Share on X
            </button>
            <button
              onClick={handleShareWhatsApp}
              className="share-btn bg-offwhite/5 border border-offwhite/10 text-offwhite px-6 sm:px-8 py-3.5 rounded-lg text-sm font-semibold tracking-wider hover:bg-offwhite/10 hover:border-cyan-400/30 transition-all"
            >
              WhatsApp
            </button>
            <button
              onClick={handleCopy}
              className="share-btn bg-offwhite/5 border border-offwhite/10 text-offwhite px-6 sm:px-8 py-3.5 rounded-lg text-sm font-semibold tracking-wider hover:bg-offwhite/10 hover:border-cyan-400/30 transition-all"
            >
              Copy link
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
