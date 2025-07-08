import { Building2 } from 'lucide-react';

export function Logo() {
  return (
    <a href="#" className="flex items-center gap-2">
      <Building2 className="h-8 w-8 text-primary" />
      <span className="text-xl font-semibold font-headline text-white md:text-foreground">ConstructPro</span>
    </a>
  );
}
