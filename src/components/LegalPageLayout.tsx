import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Shield, ChevronDown, Trash2 } from 'lucide-react';

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
    { title: 'Delete Account', href: '/delete-account' },
    { title: 'Terms of Use', href: '/terms-of-use' },
    { title: 'Data Safety Sheet', href: '/data-safety' },
    { title: 'Cookies Policy', href: '/cookies-policy' },
    { title: 'Disclaimer', href: '/disclaimer' },
    { title: 'Contact Helpdesk', href: '/contact' },
  ];

  return (
    <div className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Back button */}
      <div className="mb-14 sm:mb-18 flex items-center justify-between gap-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-brand-blue dark:hover:text-brand-400 transition-colors py-2 min-h-[44px]"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Homepage</span>
        </Link>

        <div className="inline-flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-medium bg-surface-50 dark:bg-slate-900/50 px-3 py-1.5 rounded-full border border-slate-200/60 dark:border-slate-800/60">
          <Shield className="w-3.5 h-3.5 text-brand-blue dark:text-brand-400 shrink-0" />
          <span>Official Legal Center</span>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
        {/* Mobile Collapsible TOC */}
        <div className="w-full lg:hidden bg-white dark:bg-slate-900/80 border border-slate-200/60 dark:border-slate-800/60 p-5 rounded-2xl shadow-card">
          <details className="group">
            <summary className="flex items-center justify-between font-bold text-xs uppercase tracking-widest text-slate-900 dark:text-white cursor-pointer list-none min-h-[44px]">
              <span>Jump to Section ({toc.length})</span>
              <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180 text-slate-400" />
            </summary>
            <ul className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800/60 space-y-3 text-sm text-slate-600 dark:text-slate-400">
              {toc.map((item, idx) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="block hover:text-brand-blue dark:hover:text-brand-400 transition-colors py-1 min-h-[44px] flex items-center"
                  >
                    {idx + 1}. {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </details>
        </div>

        {/* Desktop Sidebar Table of Contents */}
        <aside className="hidden lg:block w-1/4 sticky top-28 h-fit space-y-6 shrink-0">
          <div className="bg-white dark:bg-slate-900/80 border border-slate-200/60 dark:border-slate-800/60 p-7 rounded-2xl shadow-card">
            <h3 className="font-bold text-xs uppercase tracking-widest text-brand-blue dark:text-brand-400 mb-5">
              Table of Contents
            </h3>
            <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
              {toc.map((item, idx) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="block hover:text-brand-blue dark:hover:text-brand-400 transition-colors py-1 leading-snug"
                  >
                    {idx + 1}. {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white dark:bg-slate-900/80 border border-slate-200/60 dark:border-slate-800/60 p-7 rounded-2xl shadow-card">
            <h3 className="font-bold text-xs uppercase tracking-widest text-brand-blue dark:text-brand-400 mb-5">
              Other Legal Policies
            </h3>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`hover:text-brand-blue dark:hover:text-brand-400 transition-colors py-2 block ${
                      link.href === '/delete-account'
                        ? 'text-rose-600 dark:text-rose-400 font-bold'
                        : ''
                    }`}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Article Body */}
        <article className="flex-1 bg-white dark:bg-slate-900/80 border border-slate-200/60 dark:border-slate-800/60 p-6 sm:p-10 md:p-12 rounded-2xl shadow-card w-full min-w-0">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            {title}
          </h1>
          <p className="text-xs text-brand-blue dark:text-brand-400 font-bold mb-10 uppercase tracking-widest">
            Last Updated: {lastUpdated}
          </p>

          {summary && (
            <div className="p-6 bg-brand-50 dark:bg-slate-800/50 border border-brand-100 dark:border-slate-700/50 rounded-2xl mb-10">
              <h3 className="font-bold text-xs uppercase tracking-widest text-brand-blue dark:text-brand-400 mb-3">
                Executive Overview
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300">
                {summary}
              </p>
            </div>
          )}

          <div className="prose prose-slate dark:prose-invert max-w-none space-y-8 text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300 prose-headings:font-bold prose-headings:text-slate-900 dark:prose-headings:text-white prose-a:text-brand-blue dark:prose-a:text-brand-400 hover:prose-a:text-brand-700 dark:hover:prose-a:text-brand-300">
            {children}
          </div>
        </article>
      </div>
    </div>
  );
}
