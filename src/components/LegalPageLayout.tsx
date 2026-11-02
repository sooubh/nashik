import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Shield, ChevronDown } from 'lucide-react';
import { BreadcrumbJsonLd } from './BreadcrumbJsonLd';
import { SiteNav } from '@/components/SiteNav';
import { SiteFooter } from '@/components/SiteFooter';

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
    <div className="min-h-[100dvh] bg-paper flex flex-col justify-between">
      <SiteNav />

      <main className="flex-1 pt-24 sm:pt-28 pb-12 sm:pb-16 px-4 sm:px-8 lg:px-12 max-w-6xl mx-auto w-full">
        {path && (
          <BreadcrumbJsonLd
            items={[
              { name: 'Home', url: 'https://nashik.sooubh.me' },
              { name: title, url: `https://nashik.sooubh.me${path}` },
            ]}
          />
        )}

        {/* Back navigation & badge */}
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-deep-violet hover:text-primary transition-colors py-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Trivio Home</span>
          </Link>

          <div className="inline-flex items-center gap-2 text-xs text-deep-violet font-semibold bg-deep-violet/10 px-3.5 py-1.5 rounded-full">
            <Shield className="w-3.5 h-3.5 text-deep-violet shrink-0" />
            <span>Official Policy Center</span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          {/* Mobile Collapsible TOC */}
          <div className="w-full lg:hidden bg-[#F4F1F8] p-5 rounded-card">
            <details className="group">
              <summary className="flex items-center justify-between font-bold text-xs text-deep-violet cursor-pointer list-none min-h-[36px]">
                <span>Jump to Section ({toc.length})</span>
                <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180 text-deep-violet" />
              </summary>
              <nav className="mt-4 pt-2 space-y-2">
                {toc.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="block text-xs text-on-surface-variant hover:text-deep-violet py-1 font-medium transition-colors"
                  >
                    {item.title}
                  </a>
                ))}
              </nav>
            </details>
          </div>

          {/* Desktop Sticky Left Sidebar */}
          <aside className="hidden lg:block w-64 shrink-0 sticky top-24 space-y-6">
            <div className="p-5 rounded-card bg-[#F4F1F8] border border-[#ded9e8]">
              <p className="text-xs font-bold text-deep-violet mb-3">
                Sections on this Page
              </p>
              <nav className="space-y-1">
                {toc.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="block text-xs text-on-surface-variant hover:text-deep-violet hover:translate-x-0.5 py-1.5 font-medium transition-[color,transform]"
                  >
                    {item.title}
                  </a>
                ))}
              </nav>
            </div>

            <div className="p-5 rounded-card bg-[#F4F1F8] border border-[#ded9e8]">
              <p className="text-xs font-bold text-deep-violet mb-3">
                Other Legal Policies
              </p>
              <nav className="space-y-1">
                {legalLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block text-xs text-on-surface-variant hover:text-deep-violet py-1.5 font-medium transition-colors"
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
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-on-surface leading-tight">
                {title}
              </h1>
              <p className="text-xs text-on-surface-variant font-medium">
                Last Revised: {lastUpdated}
              </p>
              {summary && (
                <div className="mt-4 p-5 rounded-card bg-[#F4F1F8] border border-[#ded9e8]">
                  <p className="text-sm sm:text-base text-on-surface-variant font-editorial italic leading-relaxed">
                    {summary}
                  </p>
                </div>
              )}
            </header>

            <div className="space-y-10 text-on-surface leading-relaxed text-sm sm:text-base">
              {children}
            </div>
          </article>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
