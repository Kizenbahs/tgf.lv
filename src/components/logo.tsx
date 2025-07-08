import { Building2 } from 'lucide-react';
import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Building2 className="h-8 w-8 text-primary" />
      <span className="text-xl font-semibold font-headline">ConstructPro</span>
    </Link>
  );
}
