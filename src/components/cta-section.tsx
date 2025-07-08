import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function CtaSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-primary/10">
      <div className="container mx-auto flex flex-col items-center px-4 text-center md:px-6">
        <div className="mx-auto max-w-3xl space-y-4">
          <Badge variant="default">Let's Build Together</Badge>
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Ready to Start Your Next Project?
          </h2>
          <p className="text-muted-foreground md:text-xl">
            Let's build something amazing together. Contact us for a free consultation and quote.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">Get a Quote</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
