import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { generateBreadcrumbSchema } from '@/lib/schema';
import { safeJsonLd } from '@/lib/utils';

export interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const schemaItems = items.map((item) => ({
    name: item.label,
    url: item.href,
  }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd(generateBreadcrumbSchema(schemaItems)),
        }}
      />
      <nav aria-label="Breadcrumb" className="w-full overflow-x-auto py-2 no-scrollbar">
        <ol className="flex items-center gap-1.5 text-xs text-on-surface-variant font-medium whitespace-nowrap">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={item.href} className="flex items-center gap-1.5">
                {index > 0 && (
                  <ChevronRight className="h-3.5 w-3.5 text-outline/60 shrink-0" aria-hidden="true" />
                )}
                {isLast ? (
                  <span className="font-semibold text-deep-violet truncate max-w-[200px] sm:max-w-[320px]" aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="hover:text-deep-violet transition-colors flex items-center gap-1"
                  >
                    {index === 0 && <Home className="h-3.5 w-3.5" aria-hidden="true" />}
                    <span>{item.label}</span>
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
