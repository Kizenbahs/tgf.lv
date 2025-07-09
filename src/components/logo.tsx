import Link from 'next/link';

export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <Link href="/" aria-label="TGF Build Home">
      <img
        src={dark ? "/images/logo-dark.png" : "/images/logo-light.png"}
        alt="TGF Build Logo"
        className="h-10 w-auto"
      />
    </Link>
  );
}
