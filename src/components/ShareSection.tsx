"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ShareSection() {
  const [email, setEmail] = useState("");
  const [enlisted, setEnlisted] = useState(false);

  const shareText =
    "The UK spends £334bn/year on welfare. The Royal Navy gets £15.5bn. Both aircraft carriers are in dock. See the numbers in real time:";
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

  const handleEnlist = (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setEnlisted(true);
  };

  return (
    <section className="py-20 sm:py-32 px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Share */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
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

        <div className="gradient-line mb-16" />

        {/* Email signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-offwhite/30 text-xs sm:text-sm tracking-[0.3em] uppercase mb-3 font-mono">
            One email per year
          </p>
          <p className="text-offwhite/50 text-sm sm:text-base mb-6 max-w-md mx-auto">
            An annual data briefing on the state of welfare spending and the fleet
            it could fund. Not a newsletter. Not a campaign. One signal lamp, once a year.
          </p>

          <AnimatePresence mode="wait">
            {!enlisted ? (
              <motion.form
                key="form"
                onSubmit={handleEnlist}
                exit={{ opacity: 0 }}
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  required
                  className="flex-1 bg-offwhite/5 border border-offwhite/10 text-offwhite px-4 py-3.5 rounded-lg text-sm focus:outline-none focus:border-cyan-400/50 transition-colors placeholder:text-offwhite/20"
                />
                <button
                  type="submit"
                  className="bg-cyan-400 text-navy-900 px-8 py-3.5 rounded-lg font-bold text-sm tracking-wider hover:bg-cyan-300 transition-colors shrink-0"
                >
                  Join
                </button>
              </motion.form>
            ) : (
              <motion.p
                key="confirmed"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-cyan-400 text-sm"
              >
                You&apos;re in. First dispatch arrives within the year.
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
