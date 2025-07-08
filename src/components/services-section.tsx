import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { HardHat, Paintbrush, Wrench } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const services = [
  {
    icon: <HardHat className="h-10 w-10 text-primary" />,
    title: 'General Contracting',
    description: 'Comprehensive management of your construction project from start to finish, ensuring quality and timeliness.',
  },
  {
    icon: <Paintbrush className="h-10 w-10 text-primary" />,
    title: 'Design & Build',
    description: 'A streamlined process that combines design and construction, fostering collaboration and innovation.',
  },
  {
    icon: <Wrench className="h-10 w-10 text-primary" />,
    title: 'Renovations',
    description: 'Transforming existing spaces with modern designs, materials, and a commitment to craftsmanship.',
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <Badge variant="secondary">Our Services</Badge>
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">What We Offer</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We provide a wide range of construction services to meet the diverse needs of our clients.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 lg:max-w-none mt-12">
          {services.map((service) => (
            <Card key={service.title} className="transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
              <CardHeader className="items-center text-center">
                <div className="mb-4 rounded-full bg-primary/10 p-4">{service.icon}</div>
                <CardTitle className="font-headline">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
