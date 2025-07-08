import { Button } from '@/components/ui/button';

export function CtaSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-primary/10">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="mx-auto max-w-3xl space-y-4">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Ready to Start Your Next Project?
          </h2>
          <p className="text-muted-foreground md:text-xl">
            Let's build something amazing together. Contact us for a free consultation and quote.
          </p>
          <Button size="lg">Get a Quote</Button>
        </div>
      </div>
    </section>
  );
}
