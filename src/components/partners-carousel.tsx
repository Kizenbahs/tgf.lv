import Image from 'next/image';

const logos = [
  { src: "https://placehold.co/150x60.png", alt: "Partner Logo 1", hint: "company logo" },
  { src: "https://placehold.co/150x60.png", alt: "Partner Logo 2", hint: "company logo" },
  { src: "https://placehold.co/150x60.png", alt: "Partner Logo 3", hint: "company logo" },
  { src: "https://placehold.co/150x60.png", alt: "Partner Logo 4", hint: "company logo" },
];

export function PartnersCarousel() {
  return (
    <section className="w-full bg-background py-12">
      <div className="container mx-auto">
        <div 
          className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]"
        >
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 animate-scroll">
            {logos.map((logo, index) => (
              <li key={index}>
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={150}
                  height={60}
                  className="object-contain grayscale"
                  data-ai-hint={logo.hint}
                />
              </li>
            ))}
          </ul>
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 animate-scroll" aria-hidden="true">
             {logos.map((logo, index) => (
              <li key={index}>
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={150}
                  height={60}
                  className="object-contain grayscale"
                  data-ai-hint={logo.hint}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
