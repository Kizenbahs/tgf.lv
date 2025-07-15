import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function CtaSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-primary/10">
      <div className="container mx-auto flex flex-col items-center px-4 text-center md:px-6">
        <div className="mx-auto max-w-3xl space-y-4">
          <Badge variant="default">Būvēsim Kopā</Badge>
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Esi Gatavs Uzsākt Nākamo Projektu?
          </h2>
          <p className="text-muted-foreground md:text-xl">
            Radīsim kopā kaut ko lielisku. Sazinies ar mums, lai saņemtu konsultāciju.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact" className="flex items-center gap-2">
              SAZINIES AR MUMS
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
