import Image from 'next/image';
import { Badge } from '@/components/ui/badge';

export function AboutUsSection() {
  return (
    <section id="about" className="w-full py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <Badge variant="default">About Us</Badge>
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">
            Building the Future, Restoring the Past
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Discover the story behind our success and the values that drive our work.
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-5xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-4 text-left">
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              ConstructPro has been a leader in the construction industry for over two decades. Our commitment to quality, safety, and innovation has made us a trusted partner for clients on projects of all scales. We believe in building strong relationships with our clients, based on transparency and mutual respect.
            </p>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our team of experienced professionals is dedicated to delivering projects on time and within budget, without compromising on the quality of our work. We use the latest technology and sustainable practices to create buildings that are not only beautiful but also durable and environmentally friendly.
            </p>
          </div>
          <div className="flex items-center justify-center">
             <Image
                src="https://placehold.co/600x450.png"
                alt="Construction team meeting"
                width={600}
                height={450}
                className="aspect-[4/3] rounded-xl object-cover shadow-2xl"
                data-ai-hint="construction team"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
