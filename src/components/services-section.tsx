import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { HardHat, Paintbrush, Wrench, Plug, ShieldCheck, Zap, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const services = [
  {
    icon: <HardHat className="h-10 w-10 text-primary" />,
    title: 'Facility inspection works',
    description: 'Facility inspection • Defect or problem determination • Secure solution offer • Estimated preparation • Each customer receives individual approach.',
  },
  {
    icon: <Paintbrush className="h-10 w-10 text-primary" />,
    title: 'External power supply',
    description: 'Area lighting • Building facades lighting • Lightning defense and earthing • Electrogenerators and chp installation and connection to the electricity grid • Gas pipeline electrochemical anticorrosion protection.',
  },
  {
    icon: <Wrench className="h-10 w-10 text-primary" />,
    title: 'Internal & external electrical networks',
    description: 'Wiring work • Lightning defense and earthing • Access control system • Security alarms, fire alarm, the public notification system, videosurveillance systems • Communication networks • Building management system (BMS)',
  },
  {
    icon: <Plug className="h-10 w-10 text-primary" />,
    title: 'Access control systems',
    description: 'Communication networks ( Cat 3, Cat 5, Cat 6, Cat 7, optical networks, TV / SAT networks ) • Data communication equipment installation and connection • Payment terminals and ATMs installation and connection',
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-primary" />,
    title: 'Buildings wiring system maintenance to the operating condition',
    description: 'Electrogenerators and CHP machines maintenance • Buildings electrical system modernisation and renovation',
  },
  {
    icon: <Zap className="h-10 w-10 text-primary" />,
    title: 'Design works',
    description: 'Project creation and coordination • Executive documentation preparing.',
  },
];

export function ServicesSection({ showMoreLink = false }: { showMoreLink?: boolean }) {
  return (
    <section id="services" className="w-full py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <Badge variant="default">Our Services</Badge>
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">What We Offer</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          You can order a free professional advice.
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
                FIND MORE
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
