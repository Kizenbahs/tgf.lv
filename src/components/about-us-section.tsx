import Image from 'next/image';
import { Badge } from '@/components/ui/badge';

export function AboutUsSection() {
  return (
    <section id="about" className="w-full py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <Badge variant="default">Par Mums</Badge>
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">
            Mēs Būvējam Nākotni
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Uzņēmums ar 10 gadu pieredzi elektroinstalāciju jomā.
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-6xl gap-8 md:grid-cols-3">
          <div className="rounded-lg bg-secondary p-6 shadow-lg">
            <h3 className="mb-4 text-xl font-bold text-foreground">Profesionalitāte</h3>
            <p className="text-muted-foreground">
              Uzņēmumā SIA "TGF build" darbiniekiem ir 10 gadu pieredze elektromontāžā Latvijā, Lietuvā, Zviedrijā. Ar vairākiem uzņēmumiem, kopīgiem spēkiem, realizējam lielus objektus. Visiem uzņēmuma darbiniekiem ir B,C elektrodrošības grupas.
            </p>
          </div>
          
          <div className="rounded-lg bg-secondary p-6 shadow-lg">
            <h3 className="mb-4 text-xl font-bold text-foreground">Sertifikāti</h3>
            <p className="text-muted-foreground">
              Elektroietaišu izbūve, izbūves darbu vadīšana un būvuzraudzība gaisvadu līnijas līdz 1kV, kabeļlīnijas līdz 1kV un Ēku elektroinstalācija līdz 1kV. Elektroietaišu projektēšana transformātoru apakšstacijas un sadales punkti līdz 20kV, gaisvadu līnijas un kabeļlīnijas līdz 20kV un ēku elektroinstalācija līdz 1kV, būvju zibensaizsardzība un pārspriegumaizsardzība līdz 1kV.
            </p>
          </div>
          
          <div className="rounded-lg bg-secondary p-6 shadow-lg">
            <h3 className="mb-4 text-xl font-bold text-foreground">Garantija</h3>
            <p className="text-muted-foreground">
              Mēs dodam garantiju pielitotajiem materiāliem un paveiktajam darbam. Mēs atbildam par darbu kvalitāti. Mums ir svarīgs katrs klients, tāpēc mums uzticas un rekomendē partneriem un draugiem.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
