import Image from 'next/image';
import { Badge } from '@/components/ui/badge';

export function AboutUsSection() {
  return (
    <section id="about" className="w-full py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <Badge variant="default">About Us</Badge>
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">
            We Building the Future
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          A company with 10 years of experience in the field of electric installation.
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-6xl gap-8 md:grid-cols-3">
          <div className="rounded-lg bg-secondary p-6 shadow-lg">
            <h3 className="mb-4 text-xl font-bold text-foreground">Professionalism</h3>
            <p className="text-muted-foreground">
              Company SIA "TGF Build" employees have 10 years of experience in Latvia, Lithuania, Sweden. With a number of companies, collectively, are conducting large objects. All employees of the company are B, C electrical group.
            </p>
          </div>
          
          <div className="rounded-lg bg-secondary p-6 shadow-lg">
            <h3 className="mb-4 text-xl font-bold text-foreground">Certificates</h3>
            <p className="text-muted-foreground">
              The main construction work management and construction supervision overhead lines to 1 kV cable line up to 1 kV and 1 kV electrical installations up to the buildings. The design transformātorusubstations and distribution points to 20 kV overhead lines and the cable line up to 20 kV and 1 kV electrical installations of buildings, structures and lightning protection and over voltage protection to 1kV.
            </p>
          </div>
          
          <div className="rounded-lg bg-secondary p-6 shadow-lg">
            <h3 className="mb-4 text-xl font-bold text-foreground">The Guarantee</h3>
            <p className="text-muted-foreground">
              We are giving a guarantee of the used materials and the work. We are responsible for the quality of the work. Every client is important to us, so we have the trust and we are being recommended to partners and friends. For 10 years, we are being recommended to partners and friends.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
