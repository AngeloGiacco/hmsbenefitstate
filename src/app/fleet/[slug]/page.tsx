import { notFound } from "next/navigation";
import { welfareFleet } from "@/data/fleet";
import type { Metadata } from "next";
import FleetShipPage from "@/components/FleetShipPage";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return welfareFleet.map((ship) => ({ slug: ship.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const ship = welfareFleet.find((s) => s.slug === slug);
  if (!ship) return {};

  return {
    title: `${ship.name} — HMS Benefit State`,
    description: `${ship.name}. ${ship.class}. Displacement: ${ship.displacement}. Crew: ${ship.crew}.`,
    openGraph: {
      title: ship.name,
      description: `${ship.class}. Displacement: ${ship.displacement}.`,
      type: "website",
    },
  };
}

export default async function FleetPage({ params }: Props) {
  const { slug } = await params;
  const ship = welfareFleet.find((s) => s.slug === slug);
  if (!ship) notFound();

  return <FleetShipPage ship={ship} />;
}
