'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section className="relative -mt-16 h-[70vh] min-h-[500px] w-full md:h-screen">
      <Image
        src="https://placehold.co/1920x1080.png"
        alt="Construction site background"
        layout="fill"
        objectFit="cover"
        className="brightness-50"
        data-ai-hint="construction architecture"
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
            Building Your Vision
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="mx-auto mt-4 max-w-[700px] text-lg text-gray-200 md:text-xl"
          >
            From concept to creation, ConstructPro delivers excellence and precision in every project.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="mt-8"
          >
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Explore Our Work
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
