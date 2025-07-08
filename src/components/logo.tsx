import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" aria-label="TGF Build Home">
      <svg
        viewBox="0 0 180 48"
        className="h-10 w-auto"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.27271 18.9625C1.27271 18.9625 23.0909 0 43.6363 0C64.1818 0 64.1818 7.025 64.1818 18.9625C64.1818 30.9 64.1818 37.925 43.6363 37.925C23.0909 37.925 1.27271 18.9625 1.27271 18.9625Z"
          transform="scale(0.5) translate(0, 5)"
          className="text-primary fill-current"
        />
        <text
          x="28"
          y="26"
          fontFamily="inherit"
          fontSize="24"
          fontWeight="bold"
          className="text-primary fill-current font-headline"
        >
          TGF Build
        </text>
        <rect x="28" y="32" width="150" height="2" className="text-primary fill-current" />
        <text
          x="30"
          y="44"
          fontFamily="inherit"
          fontSize="10"
          fontWeight="normal"
          letterSpacing="1"
          className="fill-current font-body"
        >
          ELEKTROMONTĀŽA
        </text>
      </svg>
    </Link>
  );
}
