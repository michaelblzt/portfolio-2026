import type { Metadata } from 'next';
import './globals.css';
import Blobs from '@/components/Blobs/Blobs';
import RevealObserver from '@/components/RevealObserver/RevealObserver';

const SITE_URL = 'https://www.michaelblaizot.com';

export const metadata: Metadata = {
  title: 'Michael Blaizot — Senior Product Designer Freelance',
  description:
    'Senior product / UX / UI designer with 15 years of experience. Freelance based in Toulouse area, France.',
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: 'Michael Blaizot — Senior Product Designer Freelance',
    description:
      'Senior product / UX / UI designer with 15 years of experience. Freelance based in Toulouse area, France.',
    url: SITE_URL,
    siteName: 'Michael Blaizot',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Michael Blaizot — Senior Product Designer Freelance',
    description:
      'Senior product / UX / UI designer with 15 years of experience. Freelance based in Toulouse area, France.',
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
        <link
          rel="preload"
          href="/fonts/PPMonumentExtended/PPMonumentExtended-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/TTNormsPro/TTNormsPro-Regular.woff2"
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
