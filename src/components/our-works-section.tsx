import Image from 'next/image';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';

const projects = [
  {
    image: "https://placehold.co/600x400.png",
    hint: "modern building",
    title: "Modern Villa",
  },
  {
    image: "https://placehold.co/600x400.png",
    hint: "commercial skyscraper",
    title: "Skyscraper HQ",
  },
  {
    image: "https://placehold.co/600x400.png",
    hint: "bridge architecture",
    title: "Suspension Bridge",
  },
   {
    image: "https://placehold.co/600x400.png",
    hint: "interior design",
    title: "Loft Renovation",
  },
];

export function OurWorksSection() {
  return (
    <section id="works" className="w-full py-12 md:py-16 lg:py-20 bg-muted/40">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Our Works</div>
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">Featured Projects</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Check out some of our proudest accomplishments and successful projects.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 grid grid-cols-1 items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-4">
          {projects.map((project) => (
            <Card key={project.title} className="transform overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
                <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="h-48 w-full object-cover"
                    data-ai-hint={project.hint}
                />
              <CardHeader>
                <CardTitle className="font-headline">{project.title}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
