import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://hmsbenefitstate.co.uk"),
  title: {
    default: "HMS Benefit State — £334bn/year. Zero ships.",
    template: "%s — HMS Benefit State",
  },
  description:
    "The UK spends £334 billion per year on welfare. The Royal Navy gets £15.5 billion. Both aircraft carriers are in dock. See the numbers in real time.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "£334,000,000,000 — and not a single ship",
    description:
      "The UK spends £334bn/year on welfare. The Royal Navy gets £15.5bn. Both carriers are in dock. Watch the money flow in real time.",
    url: "https://hmsbenefitstate.co.uk",
    siteName: "HMS Benefit State",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "HMS Benefit State — £334bn per year on welfare. Zero ships at sea.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "£334,000,000,000/year — and both carriers are in dock",
    description:
      "Watch UK welfare vs Royal Navy spending in real time. The numbers will make you seasick.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "HMS Benefit State — £334bn per year on welfare. Zero ships at sea.",
      },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
