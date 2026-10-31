import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Shield, ChevronDown } from 'lucide-react';
import { BreadcrumbJsonLd } from './BreadcrumbJsonLd';

export interface TocItem {
  id: string;
  title: string;
}

interface LegalPageLayoutProps {
  title: string;
  path?: string;
  lastUpdated: string;
  summary?: string;
  toc: TocItem[];
  children: React.ReactNode;
}

export function LegalPageLayout({
  title,
  path,
  lastUpdated,
  summary,
  toc,
  children,
}: LegalPageLayoutProps) {
  const legalLinks = [
    { title: 'Privacy Policy', href: '/privacy-policy' },
    { title: 'Delete Account', href: '/delete-account' },
    { title: 'Terms of Use', href: '/terms-of-use' },
    { title: 'Data Safety Sheet', href: '/data-safety' },
    { title: 'Cookies Policy', href: '/cookies-policy' },
    { title: 'Disclaimer', href: '/disclaimer' },
    { title: 'Contact Support', href: '/contact' },
  ];

  return (
    <div className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {path && (
        <BreadcrumbJsonLd
          items={[
            { name: 'Home', url: 'https://nashik.sooubh.me' },
            { name: title, url: `https://nashik.sooubh.me${path}` },
          ]}
        />
      )}

      {/* Back button */}
      <div className="mb-14 flex items-center justify-between gap-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-2 min-h-[44px]"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Homepage</span>
        </Link>

        <div className="inline-flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-medium bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-full">
          <Shield className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
          <span>Policy Center</span>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
        {/* Mobile Collapsible TOC */}
        <div className="w-full lg:hidden bg-slate-100 dark:bg-slate-900 p-6 rounded-2xl">
          <details className="group">
            <summary className="flex items-center justify-between font-bold text-xs text-slate-900 dark:text-white cursor-pointer list-none min-h-[44px]">
              <span>Jump to Section ({toc.length})</span>
              <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180 text-slate-400" />
            </summary>
            <nav className="mt-4 pt-4 space-y-2">
              {toc.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="block text-xs text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 py-1.5 font-medium transition-colors"
                >
                  {item.title}
                </a>
              ))}
            </nav>
          </details>
        </div>

        {/* Desktop Sticky Left Sidebar */}
        <aside className="hidden lg:block w-72 shrink-0 sticky top-28 space-y-8">
          <div className="p-6 rounded-2xl bg-slate-100 dark:bg-slate-900">
            <p className="text-xs font-bold text-slate-900 dark:text-white mb-4">
              Sections on this Page
            </p>
            <nav className="space-y-1">
              {toc.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="block text-xs text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:translate-x-1 py-1.5 font-medium transition-[color,transform]"
                >
                  {item.title}
                </a>
              ))}
            </nav>
          </div>

          <div className="p-6 rounded-2xl bg-slate-100 dark:bg-slate-900">
            <p className="text-xs font-bold text-slate-900 dark:text-white mb-4">
              Other Legal Policies
            </p>
            <nav className="space-y-1">
              {legalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-xs text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 py-1.5 font-medium transition-colors"
                >
                  {link.title}
                </Link>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content Area */}
        <article className="flex-1 w-full min-w-0">
          <header className="mb-10 text-left space-y-3">
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              {title}
            </h1>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
              Last Revised: {lastUpdated}
            </p>
            {summary && (
              <p className="mt-4 text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-normal p-5 rounded-2xl bg-slate-100 dark:bg-slate-900">
                {summary}
              </p>
            )}
          </header>

          <div className="space-y-12 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
            {children}
          </div>
        </article>
      </div>
    </div>
  );
}
