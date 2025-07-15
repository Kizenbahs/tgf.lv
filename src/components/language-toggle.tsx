'use client';
import Link from 'next/link';

export function LanguageToggle() {
  return (
    <Link
      href="https://tgf.lv"
      target="_self"
      className="text-sm font-medium uppercase transition-colors hover:text-primary"
    >
      LV
    </Link>
  );
} 