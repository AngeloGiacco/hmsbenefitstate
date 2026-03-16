import HomePage from "@/components/HomePage";

// Explicitly force static generation to prevent routing conflicts
// with the [constituency] dynamic segment on Vercel
export const dynamic = "force-static";

export default function Home() {
  return <HomePage />;
}
