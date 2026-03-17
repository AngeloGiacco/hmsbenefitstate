import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://hmsbenefitstate.co.uk"),
  title: {
    default: "HMS Benefit State",
    template: "%s — HMS Benefit State",
  },
  description:
    "The United Kingdom spends £334 billion per year on welfare — more than the entire Royal Navy has received since Trafalgar. HMS Benefit State is a naval vessel registry of UK welfare spending.",
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
    title: "HMS Benefit State",
    description:
      "UK welfare spending reimagined as a naval vessel registry. £334bn/year in displacement.",
    url: "https://hmsbenefitstate.co.uk",
    siteName: "HMS Benefit State",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "HMS Benefit State — UK welfare spending reimagined as a naval vessel registry",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HMS Benefit State",
    description:
      "UK welfare spending reimagined as a naval vessel registry. £334bn/year in displacement.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "HMS Benefit State — UK welfare spending reimagined as a naval vessel registry",
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
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased font-mono">
        {children}
      </body>
    </html>
  );
}
