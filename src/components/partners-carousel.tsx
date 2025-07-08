import Image from 'next/image';

const guliverLogoSvg = `data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMjUwIDEwMCI+PGcgc3R5bGU9ImZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmOyBmaWxsOiAjODg4OyI+PHRleHQgeD0iNTAlIiB5PSI0NSUiIHN0eWxlPSJmb250LXNpemU6IDMycHg7IGZvbnQtd2VpZ2h0OiBib2xkOyB0ZXh0LWFuY2hvcjogbWlkZGxlOyBkb21pbmFudC1iYXNlbGluZTogbWlkZGxlOyI+R1VMSVZFUjwvdGV4dD48dGV4dCB4PSI1MCUiIHk9IjcwJSIgc3R5bGU9ImZvbnQtc2l6ZTogMTZweDsgdGV4dC1hbmNob3I6IG1pZGRsZTsgZG9taW5hbnQtYmFzZWxpbmU6IG1pZGRsZTsiPkJVVk5JRUNJQkE8L3RleHQ+PC9nPjwvc3ZnPg==`;

const logos = [
  { src: guliverLogoSvg, alt: "Guliver Construction", hint: "construction logo" },
  { src: "https://placehold.co/250x100.png", alt: "Partner Logo 2", hint: "company logo" },
  { src: "https://placehold.co/250x100.png", alt: "Partner Logo 3", hint: "company logo" },
  { src: "https://placehold.co/250x100.png", alt: "Partner Logo 4", hint: "company logo" },
];

export function PartnersCarousel() {
  return (
    <section className="w-full bg-background py-12">
      <div className="container mx-auto">
        <div 
          className="w-full flex flex-nowrap overflow-hidden [mask-image:_linear_gradient(to_right,transparent_0,_black_8rem,_black_calc(100%-8rem),transparent_100%)]"
        >
          <ul className="flex shrink-0 items-center justify-center md:justify-start [&_li]:mx-20 animate-scroll">
            {logos.map((logo, index) => (
              <li key={index}>
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={250}
                  height={100}
                  className="object-contain grayscale"
                  data-ai-hint={logo.hint}
                />
              </li>
            ))}
          </ul>
          <ul className="flex shrink-0 items-center justify-center md:justify-start [&_li]:mx-20 animate-scroll" aria-hidden="true">
             {logos.map((logo, index) => (
              <li key={index}>
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={250}
                  height={100}
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
