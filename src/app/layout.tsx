import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Michael Blaizot — Senior Product Designer Freelance",
  description: "Senior product / UX / UI designer with 15 years of experience. Freelance based in Toulouse area, France.",
  openGraph: {
    title: "Michael Blaizot — Senior Product Designer Freelance",
    description: "Senior product / UX / UI designer with 15 years of experience. Freelance based in Toulouse area, France.",
    url: "https://www.michaelblaizot.com",
    siteName: "Michael Blaizot",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
