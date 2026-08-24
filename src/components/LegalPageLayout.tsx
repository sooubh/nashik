import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Shield, ChevronDown } from 'lucide-react';

export interface TocItem {
  id: string;
  title: string;
}

interface LegalPageLayoutProps {
  title: string;
  lastUpdated: string;
  summary?: string;
  toc: TocItem[];
  children: React.ReactNode;
}

export function LegalPageLayout({
  title,
  lastUpdated,
  summary,
  toc,
  children,
}: LegalPageLayoutProps) {
  const legalLinks = [
    { title: 'Privacy Policy', href: '/privacy-policy' },
    { title: 'Terms of Use', href: '/terms-of-use' },
    { title: 'Data Safety Sheet', href: '/data-safety' },
    { title: 'Cookies Policy', href: '/cookies-policy' },
    { title: 'Disclaimer', href: '/disclaimer' },
    { title: 'Contact Helpdesk', href: '/contact' },
  ];

  return (
    <div className="pt-28 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
      {/* Back button */}
      <div className="mb-6 sm:mb-8 flex items-center justify-between gap-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-brand-blue dark:hover:text-brand-light transition-colors py-1"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Homepage</span>
        </Link>

        <div className="inline-flex items-center gap-1.5 text-xs text-slate-500 font-medium">
          <Shield className="w-3.5 h-3.5 text-brand-blue shrink-0" />
          <span>Official Legal Center</span>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-start">
        {/* Mobile Collapsible TOC */}
        <div className="w-full lg:hidden bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 p-4 rounded-2xl shadow-soft-sm">
          <details className="group">
            <summary className="flex items-center justify-between font-bold text-xs uppercase tracking-wider text-slate-700 dark:text-slate-200 cursor-pointer list-none">
              <span>Jump to Section ({toc.length})</span>
              <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180 text-slate-400" />
            </summary>
            <ul className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-800 space-y-2 text-xs font-medium text-slate-600 dark:text-slate-400">
              {toc.map((item, idx) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="block hover:text-brand-blue dark:hover:text-brand-light transition-colors py-1"
                  >
                    {idx + 1}. {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </details>
        </div>

        {/* Desktop Sidebar Table of Contents */}
        <aside className="hidden lg:block w-1/4 sticky top-28 h-fit space-y-4 shrink-0">
          <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 p-6 rounded-3xl shadow-soft-sm">
            <h3 className="font-extrabold text-xs uppercase tracking-wider text-slate-400 mb-4">
              Table of Contents
            </h3>
            <ul className="space-y-2 text-xs font-semibold text-slate-600 dark:text-slate-400">
              {toc.map((item, idx) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="block hover:text-brand-blue dark:hover:text-brand-light transition-colors py-1 leading-snug"
                  >
                    {idx + 1}. {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 p-6 rounded-3xl shadow-soft-sm">
            <h3 className="font-extrabold text-xs uppercase tracking-wider text-slate-400 mb-3">
              Other Legal Policies
            </h3>
            <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-brand-blue dark:hover:text-brand-light transition-colors py-1 block"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Article Body */}
        <article className="flex-1 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 p-5 sm:p-8 md:p-12 rounded-3xl shadow-soft-sm w-full min-w-0">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-2">
            {title}
          </h1>
          <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 font-semibold mb-6 sm:mb-8 uppercase tracking-widest">
            Last Updated: {lastUpdated}
          </p>

          {summary && (
            <div className="p-4 sm:p-6 bg-slate-50 dark:bg-slate-850 border border-slate-200/80 dark:border-slate-800 rounded-2xl mb-6 sm:mb-8">
              <h3 className="font-extrabold text-xs uppercase tracking-wider text-brand-blue dark:text-brand-light mb-1.5 sm:mb-2">
                Executive Overview
              </h3>
              <p className="text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {summary}
              </p>
            </div>
          )}

          <div className="prose prose-slate dark:prose-invert max-w-none space-y-6 sm:space-y-8 text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300">
            {children}
          </div>
        </article>
      </div>
    </div>
  );
}
