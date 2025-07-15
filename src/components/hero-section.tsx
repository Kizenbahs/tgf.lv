'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative -mt-16 h-[70vh] min-h-[500px] w-full md:h-screen">
      <Image
        src="/images/electric-installation-hero-bg.webp"
        alt="Electric installation background"
        fill
        className="object-cover brightness-50"
        priority
      />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
        <div className="container px-4 md:px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Uzņēmums ar 10 gadu pieredzi elektromontāžas jomā
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="mx-auto mt-4 max-w-[700px] text-lg text-gray-200 md:text-xl"
          >
            TGF Build īsteno projektus no idejas līdz gatavam risinājumam, nodrošinot augstāko kvalitāti – tieši tāpēc klienti mūs iesaka tālāk.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="mt-8"
          >
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
              <Link href="/services" className="flex items-center gap-2">
                APSKATĪT PAKALPOJUMUS
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
