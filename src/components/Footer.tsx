"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 bg-navy-900/95 backdrop-blur-sm border-t border-offwhite/5">
      <div className="max-w-7xl mx-auto px-4 h-8 flex items-center justify-between text-offwhite/20 text-[10px] sm:text-xs font-mono">
        <span>
          Independent data visualisation. Not affiliated with MoD or HM Treasury. No cookies.
        </span>
        <div className="flex items-center gap-3">
          <Link
            href="/methodology"
            className="text-cyan-400/30 hover:text-cyan-400/60 transition-colors hidden sm:inline"
          >
            Methodology
          </Link>
          <span className="hidden sm:inline text-offwhite/10">|</span>
          <span>
            &copy; {new Date().getFullYear()} HMS Benefit State{" · "}
            <a
              href="https://x.com/giaccoangelo"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-offwhite/40 transition-colors"
            >
              @giaccoangelo
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
