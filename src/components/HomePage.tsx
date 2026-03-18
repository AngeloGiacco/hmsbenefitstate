"use client";

import HeroCounter from "@/components/HeroCounter";
import TheScale from "@/components/TheScale";
import TheRatio from "@/components/TheRatio";
import SpendingGrowth from "@/components/SpendingGrowth";
import ActualNavy from "@/components/ActualNavy";
import VanishingFleet from "@/components/VanishingFleet";
import Shipyard from "@/components/Shipyard";
import RefitPlanner from "@/components/RefitPlanner";
import PostcodeLookup from "@/components/PostcodeLookup";
import ShareSection from "@/components/ShareSection";
import FloatingShareBar from "@/components/FloatingShareBar";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="bg-navy-900 pb-10">
      {/* Section 1: Live counter — THE viral hook */}
      <HeroCounter />

      {/* Section 2: The massive number */}
      <TheScale />

      {/* Section 3: The 21:1 ratio */}
      <TheRatio />

      {/* Section 4: How fast it's growing */}
      <SpendingGrowth />

      {/* Section 5: The actual navy — 0/2 carriers */}
      <ActualNavy />

      {/* Section 6: The vanishing fleet */}
      <VanishingFleet />

      {/* Section 7: What £117bn buys */}
      <Shipyard />

      {/* Section 8: The refit planner */}
      <RefitPlanner />

      {/* Section 9: Your constituency */}
      <PostcodeLookup />

      {/* Section 10: Share + signup */}
      <ShareSection />

      {/* Floating share bar — always visible */}
      <FloatingShareBar />

      {/* Fixed footer */}
      <Footer />
    </main>
  );
}
