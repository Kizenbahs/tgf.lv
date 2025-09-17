import type { Metadata } from 'next';
import { DM_Sans } from "next/font/google";
import Script from 'next/script';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";

const font = DM_Sans({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.tgf-build.lv'),
  title: {
    default: 'TGF Build | Elektromontāžas Darbi. Projektēšana. Būvniecība. Elektromontāža.',
    template: `%s | TGF Build`,
  },
  description: 'Elektromontāža un Vispārējā Būvniecība. Mēs piedāvājam pilnu ciklu pakalpojumus no projekta dizaina līdz komisijas pārbaudei.',
  keywords: ['elektromontāža', 'būvniecība', 'būvniecības uzņēmums', 'būvniecības uzņēmums Rīga', 'būvniecības uzņēmums Latvija', 'elektromontāžas darbi', 'projektēšana', 'būvniecības pakalpojumi'],
  authors: [{ name: 'TGF Build' }],
  creator: 'TGF Build',
  publisher: 'TGF Build',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'TGF Build | Elektromontāža un Vispārējā Būvniecība',
    description: 'Elektromontāža un Vispārējā Būvniecība. Mēs piedāvājam pilnu ciklu pakalpojumus no projekta dizaina līdz komisijas pārbaudei.',
    url: 'https://www.tgf-build.lv',
    siteName: 'TGF Build',
    images: [
      {
        url: '/images/social.png',
        width: 1200,
        height: 630,
        alt: 'TGF Build Construction Site',
      },
    ],
    locale: 'lv_LV',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TGF Build | Elektromontāža un Vispārējā Būvniecība',
    description: 'Elektromontāža un Vispārējā Būvniecība. Mēs piedāvājam pilnu ciklu pakalpojumus no projekta dizaina līdz komisijas pārbaudei.',
    images: ['/images/social.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    name: 'TGF Build',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Krišjāņa Barona ielā 136e',
      addressLocality: 'Riga',
      postalCode: 'LV-1012',
      addressCountry: 'LV',
    },
    email: 'info@tgf.lv',
    telephone: '+371-29328337',
    url: 'https://www.tgf-build.lv',
    logo: '/images/social.png',
    openingHours: 'Mo-Fr 09:00-18:00',
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+371-29328337',
        contactType: 'customer service',
        name: 'Filips Pērkons',
      },
      {
        '@type': 'ContactPoint',
        telephone: '+371-29992269',
        contactType: 'customer service',
        name: 'Eduards Antipovs',
      },
      {
        '@type': 'ContactPoint',
        telephone: '+371-22176883',
        contactType: 'customer service',
        name: 'Ruslans',
      },
    ],
  };

  return (
    <html lang="lv" className="!scroll-smooth">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-PLKTHBE5NP"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PLKTHBE5NP');
          `}
        </Script>
      </head>
      <body className={cn(
        "font-body antialiased",
        font.variable
      )}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Toaster />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
