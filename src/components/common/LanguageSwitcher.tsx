'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Globe } from 'lucide-react';
import { Locale } from '@/types/content';

interface LanguageSwitcherProps {
  currentLocale: Locale;
}

export function LanguageSwitcher({ currentLocale }: LanguageSwitcherProps) {
  const pathname = usePathname();

  // Strip existing locale prefix to get base path
  let basePath = pathname;
  if (basePath.startsWith('/mr')) {
    basePath = basePath.slice(3) || '/';
  } else if (basePath.startsWith('/hi')) {
    basePath = basePath.slice(3) || '/';
  }

  const languages = [
    { code: 'en' as Locale, label: 'EN', fullName: 'English', path: basePath },
    { code: 'mr' as Locale, label: 'मराठी', fullName: 'मराठी', path: `/mr${basePath === '/' ? '' : basePath}` },
    { code: 'hi' as Locale, label: 'हिंदी', fullName: 'हिंदी', path: `/hi${basePath === '/' ? '' : basePath}` },
  ];

  return (
    <div className="inline-flex items-center rounded-full border border-black/10 bg-white/90 p-1 shadow-sm backdrop-blur-md">
      <Globe className="ml-2 mr-1 h-3.5 w-3.5 text-deep-violet" aria-hidden="true" />
      <div className="flex items-center gap-0.5">
        {languages.map((lang) => {
          const isActive = lang.code === currentLocale;
          return (
            <Link
              key={lang.code}
              href={lang.path}
              className={`rounded-full px-2.5 py-1 text-xs font-semibold transition-all ${
                isActive
                  ? 'bg-deep-violet text-white shadow-sm'
                  : 'text-on-surface-variant hover:text-deep-violet hover:bg-brand-50'
              }`}
              title={lang.fullName}
            >
              {lang.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
