import { notFound } from "next/navigation";
import { welfareFleet } from "@/data/fleet";
import type { Metadata } from "next";
import FleetShipPage from "@/components/FleetShipPage";

interface Props {
  params: Promise<{ slug: string }>;
}

// Only serve paths returned by generateStaticParams — no on-demand SSR
export const dynamicParams = false;

export async function generateStaticParams() {
  return welfareFleet.map((ship) => ({ slug: ship.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const ship = welfareFleet.find((s) => s.slug === slug);
  if (!ship) return {};

  const ogDescription = `${ship.class}. Displacement: ${ship.displacement}. Crew: ${ship.crew}.`;

  return {
    title: ship.name,
    description: `${ship.name}. ${ship.class}. Displacement: ${ship.displacement}. Crew: ${ship.crew}.`,
    openGraph: {
      title: `${ship.name} — HMS Benefit State`,
      description: ogDescription,
      type: "website",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: `${ship.name} — HMS Benefit State Fleet Registry`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${ship.name} — HMS Benefit State`,
      description: ogDescription,
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: `${ship.name} — HMS Benefit State Fleet Registry`,
        },
      ],
    },
  };
}

export default async function FleetPage({ params }: Props) {
  const { slug } = await params;
  const ship = welfareFleet.find((s) => s.slug === slug);
  if (!ship) notFound();

  return <FleetShipPage ship={ship} />;
}
