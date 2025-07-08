import type { Metadata } from 'next';
import { DM_Sans } from "next/font/google";
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";

const font = DM_Sans({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: 'ConstructPro',
  description: 'Modern solutions for your construction needs.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={cn(
        "font-body antialiased",
        font.variable
      )}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
