import { notFound } from "next/navigation";
import {
  sampleConstituencies,
  getNavalComparison,
  getConstituencyQuip,
} from "@/data/constituencies-sample";
import { formatMillions } from "@/lib/format";
import type { Metadata } from "next";
import ConstituencyPage from "@/components/ConstituencyPage";

interface Props {
  params: Promise<{ constituency: string }>;
}

// Protect known routes from being treated as constituency slugs
const RESERVED_SLUGS = ["fleet", "methodology", "api"];

export async function generateStaticParams() {
  return sampleConstituencies.map((c) => ({ constituency: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { constituency: slug } = await params;
  if (RESERVED_SLUGS.includes(slug)) return {};

  const data = sampleConstituencies.find((c) => c.slug === slug);
  if (!data) return {};

  return {
    title: `HMS ${data.name} — HMS Benefit State`,
    description: `HMS ${data.name}. Annual Displacement: ${formatMillions(data.totalBenefitsAnnual)}. Crew: ${data.workingAgeClaimants.toLocaleString()} working-age claimants. ${getNavalComparison(data.totalBenefitsAnnual)}.`,
    openGraph: {
      title: `HMS ${data.name}`,
      description: getConstituencyQuip(data),
      images: [
        {
          url: `/api/og?type=constituency&name=${encodeURIComponent(data.name)}&displacement=${encodeURIComponent(formatMillions(data.totalBenefitsAnnual))}&crew=${encodeURIComponent(`${data.workingAgeClaimants.toLocaleString()} claimants`)}`,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

export default async function ConstituencyRoute({ params }: Props) {
  const { constituency: slug } = await params;
  if (RESERVED_SLUGS.includes(slug)) notFound();

  const data = sampleConstituencies.find((c) => c.slug === slug);
  if (!data) notFound();

  return (
    <ConstituencyPage
      data={data}
      navalComparison={getNavalComparison(data.totalBenefitsAnnual)}
      quip={getConstituencyQuip(data)}
    />
  );
}
