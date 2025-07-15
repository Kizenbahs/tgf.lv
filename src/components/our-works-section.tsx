import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    image: "/images/work-01.png",
    hint: "modern building",
    title: "Modern Villa",
  },
  {
    image: "/images/work-02.png",
    hint: "commercial skyscraper",
    title: "Skyscraper HQ",
  },
  {
    image: "/images/work-03.png",
    hint: "bridge architecture",
    title: "Suspension Bridge",
  },
  {
    image: "/images/work-04.png",
    hint: "interior design",
    title: "Loft Renovation",
  },
  {
    image: "/images/work-05.png",
    hint: "residential complex",
    title: "Residential Complex",
  },
  {
    image: "/images/work-06.png",
    hint: "industrial facility",
    title: "Industrial Facility",
  },
  // Add more placeholders if needed
  {
    image: "https://placehold.co/600x400.png?text=More+Coming+Soon",
    hint: "placeholder",
    title: "More Coming Soon 1",
  },
];

export function OurWorksSection() {
  return (
    <section id="works" className="w-full py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <Badge variant="default">Mūsu Darbi</Badge>
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">Pēdējie Darbi</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Iepazīstieties ar mūsu darbiem, kas atspoguļo mūsu apņemšanos nodrošināt kvalitāti.
          </p>
        </div>
        <div className="mx-auto mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">
          {projects.map((project) => (
            <Card key={project.title} className="transform overflow-hidden rounded-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
                <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="aspect-square w-full object-cover"
                    data-ai-hint={project.hint}
                />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
