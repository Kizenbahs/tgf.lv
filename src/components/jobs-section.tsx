import { Badge } from '@/components/ui/badge';

export function JobsSection() {
  return (
    <section id="jobs" className="w-full py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <Badge variant="default">Vakances</Badge>
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">
            Karjeras Iespējas
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Pievienojies mūsu komandai un būvē nākotni kopā ar mums.
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-3xl space-y-6 text-center">
          <p className="text-xl font-semibold text-foreground">
            Pašlaik nav brīvu vakantu amatu.
          </p>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Mūsu uzņēmums darbiniekus izvēlas, izmantojot konkurētspējīgu atlases procesu.
            </p>
            <p>
              Jūsu CV tiks izskatīts nākamajā atlases kārtā norādītajam amatam.
            </p>
            <p>
              TGF Build garantē, ka Jūsu dati netiks nodoti trešajām personām.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
