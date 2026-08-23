import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Shield, FileText, Lock, AlertCircle, Database } from 'lucide-react';

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
  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto">
      {/* Back button */}
      <div className="mb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-brand-blue dark:hover:text-brand-light transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Homepage</span>
        </Link>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 items-start">
        {/* Sidebar Table of Contents */}
        <aside className="w-full lg:w-1/4 lg:sticky lg:top-28 h-fit space-y-4">
          <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 p-6 rounded-3xl shadow-sm">
            <h3 className="font-extrabold text-xs uppercase tracking-wider text-slate-400 mb-4">
              Table of Contents
            </h3>
            <ul className="space-y-2.5 text-xs font-semibold text-slate-600 dark:text-slate-400">
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
          </div>
        </aside>

        {/* Article Body */}
        <article className="flex-1 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 p-6 sm:p-10 md:p-12 rounded-3xl shadow-sm w-full">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-2">
            {title}
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold mb-8 uppercase tracking-widest">
            Last Updated: {lastUpdated}
          </p>

          {summary && (
            <div className="p-6 bg-slate-50 dark:bg-slate-850 border border-slate-200/80 dark:border-slate-800 rounded-2xl mb-8">
              <h3 className="font-extrabold text-xs uppercase tracking-wider text-brand-blue dark:text-brand-light mb-2">
                Executive Overview
              </h3>
              <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                {summary}
              </p>
            </div>
          )}

          <div className="prose prose-slate dark:prose-invert max-w-none space-y-8 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
            {children}
          </div>
        </article>
      </div>
    </div>
  );
}
