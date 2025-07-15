import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { HardHat, Paintbrush, Wrench, Plug, ShieldCheck, Zap, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const services = [
  {
    icon: <HardHat className="h-10 w-10 text-primary" />,
    title: 'Objektu apsekošanas darbi',
    description: 'Objektu apsekošana • Defektu vai problēmu noteikšana • Droša risinājuma piedāvājums • Tāmes sagatavošana • Katram klientam individuālā pieeja.',
  },
  {
    icon: <Paintbrush className="h-10 w-10 text-primary" />,
    title: 'Ārējā elektroapgāde',
    description: 'Teritoriju apgaismojums • Ēku fasāžu apgaismojums • Zibensaizsardzība un zemējums • Elektroģeneratoru un koģenerācijas staciju uzstādīšana un pieslēgšana pie lietotāja elektrotīkliem • Gāzes vadu elektroķīmiskā pretkorozijas aizsardzība.',
  },
  {
    icon: <Wrench className="h-10 w-10 text-primary" />,
    title: 'Ārējie un iekšējie elektriskie tīkli',
    description: 'Elektroinstalācijas darbi • Zibensaizsardzība un zemējums • Pieejas kontroles sistēmas • Apsardzes signalizācijas, ugunsdrošības signalizācijas, publiskās apziņošanas sistēmas, video novērošanas sistēmas • Sakaru un komunikāciju tīkli • Ēku vadības sistēmas (BMS).',
  },
  {
    icon: <Plug className="h-10 w-10 text-primary" />,
    title: 'Pieejas kontroles sistēmas',
    description: 'Sakaru un komunikāciju tīkli (Cat3, Cat5, Cat6, Cat7, optiskie tīkli, TV/SAT tīkli) • Datu pārraides iekārtu uzstādīšana un pieslēgšana • Maksājumu terminālu un bankomātu uzstādīšana un pieslēgšana.',
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-primary" />,
    title: 'Ēku elektroinstalācijas sistēmu uzturēšana ekspluatācijas kārtībā',
    description: 'Elektroģeneratoru un koģenerācijas staciju apkalpošana • Ēku elektrosistēmu modernizācija un remonts.',
  },
  {
    icon: <Zap className="h-10 w-10 text-primary" />,
    title: 'Projektēšanas darbi',
    description: 'Projektu veidošana un saskaņošana • Izpilddokumentācijas sagatavošana.',
  },
];

export function ServicesSection({ showMoreLink = false }: { showMoreLink?: boolean }) {
  return (
    <section id="services" className="w-full py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <Badge variant="default">Mūsu Pakalpojumi</Badge>
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">Ko Mēs Piedāvājam</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Iespēja saņemt bezmaksas ekspertu padomu
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-5xl items-stretch gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 lg:max-w-none">
          {services.map((service) => (
            <Card key={service.title} className="h-full flex flex-col transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
              <CardHeader className="items-center text-center flex-1 flex flex-col">
                <div className="mb-4 rounded-full bg-primary/10 p-4">{service.icon}</div>
                <CardTitle className="font-headline">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
        {showMoreLink && (
          <div className="mt-12 flex justify-center">
            <Button asChild size="lg" className="bg-gray-300 text-gray-700 hover:bg-yellow-400 hover:text-gray-900 transition-colors duration-300">
              <Link href="/services" className="flex items-center gap-2">
                UZZINI VAIRĀK
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
