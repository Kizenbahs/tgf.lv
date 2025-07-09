import { Badge } from '@/components/ui/badge';

export function JobsSection() {
  return (
    <section id="jobs" className="w-full py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <Badge variant="default">Jobs</Badge>
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">
            Career Opportunities
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Join our team and build the future with us.
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-3xl space-y-6 text-center">
          <p className="text-xl font-semibold text-foreground">
            At the moment, there are no available vacancies.
          </p>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Our company selects employees through a competitive selection process.
            </p>
            <p>
              Your CV will be considered in the upcoming selection for the specified position.
            </p>
            <p>
              TGF Build guarantees that your data will not be disclosed to third parties.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
