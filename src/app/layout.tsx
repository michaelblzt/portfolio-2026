import type { Metadata } from "next";
import "./globals.css";
import Blobs from "@/components/Blobs/Blobs";
import RevealObserver from "@/components/RevealObserver/RevealObserver";

const SITE_URL = "https://www.michaelblaizot.com";
const FONT_CDN = "https://pub-59c42c6072a14143b0fae944c4eeeb09.r2.dev";

export const metadata: Metadata = {
  title: "Michael Blaizot — Senior Product Designer Freelance",
  description: "Senior product / UX / UI designer with 15 years of experience. Freelance based in Toulouse area, France.",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "Michael Blaizot — Senior Product Designer Freelance",
    description: "Senior product / UX / UI designer with 15 years of experience. Freelance based in Toulouse area, France.",
    url: SITE_URL,
    siteName: "Michael Blaizot",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Michael Blaizot — Senior Product Designer Freelance",
    description: "Senior product / UX / UI designer with 15 years of experience. Freelance based in Toulouse area, France.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href={FONT_CDN} />
        <link
          rel="preload"
          href={`${FONT_CDN}/fonts/PPMonumentExtended/PPMonumentExtended-Regular.woff2`}
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href={`${FONT_CDN}/fonts/TTNormsPro/TTNormsPro-Regular.woff2`}
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <Blobs />
        <RevealObserver />
        {children}
      </body>
    </html>
  );
}
