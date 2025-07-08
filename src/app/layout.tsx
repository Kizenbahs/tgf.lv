import type { Metadata } from 'next';
import { DM_Sans } from "next/font/google";
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";

const font = DM_Sans({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.tgf-build.lv'),
  title: {
    default: 'TGF Build | Elektromontāža un Būvniecība',
    template: `%s | TGF Build`,
  },
  description: 'Vadošais uzņēmums elektromontāžas un vispārējās būvniecības jomā. Piedāvājam pilna cikla pakalpojumus no projektēšanas līdz objekta nodošanai ekspluatācijā.',
  keywords: ['elektromontāža', 'būvniecība', 'celtniecība', 'renovācija', 'ģenerāluzņēmējs', 'Rīga', 'Latvija', 'TGF Build'],
  authors: [{ name: 'TGF Build' }],
  openGraph: {
    title: 'TGF Build | Elektromontāža un Būvniecība',
    description: 'Vadošais uzņēmums elektromontāžas un vispārējās būvniecības jomā.',
    url: 'https://www.tgf-build.lv',
    siteName: 'TGF Build',
    images: [
      {
        url: 'https://placehold.co/1200x630.png',
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
    title: 'TGF Build | Elektromontāža un Būvniecība',
    description: 'Vadošais uzņēmums elektromontāžas un vispārējās būvniecības jomā.',
    images: ['https://placehold.co/1200x630.png'],
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
    logo: 'https://www.tgf-build.lv/logo.svg',
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
      </body>
    </html>
  );
}
