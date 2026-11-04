'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, MapPin, X, ArrowUpRight } from 'lucide-react';
import { SITE_CONFIG } from '@/config/site';

const NAV_ITEMS = [
  { label: 'Destinations', href: '/#destinations' },
  { label: 'Field Guide', href: '/#gazetteer' },
  { label: 'Experiences', href: '/#experiences' },
  { label: 'Trip Guide', href: '/trip-planner' },
  { label: 'Why Trivio', href: '/#why-trivio' },
  { label: 'FAQ', href: '/#faq' },
];

export function SiteNav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isSubpage = pathname !== '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMobileOpen(false);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const hasSolidBackdrop = isScrolled || isSubpage;

  return (
    <>
      <header
        className={
          'fixed left-0 right-0 top-0 z-50 w-full transition-all duration-300 ' +
          (hasSolidBackdrop
            ? 'border-b border-white/10 bg-slate-950/90 py-3.5 shadow-xl backdrop-blur-md'
            : 'bg-transparent py-5 sm:py-7')
        }
      >
        <div className="flex w-full items-center justify-between px-4 sm:px-8 lg:px-16">
          <Link
            href="/"
            className="group flex select-none items-center gap-1.5 text-xl font-black tracking-widest text-white sm:text-2xl"
            aria-label="Trivio Home"
          >
            <span>TRIVIO</span>
            <MapPin className="h-5 w-5 fill-white text-white transition-transform group-hover:scale-110" aria-hidden="true" />
          </Link>

          {/* Desktop Navigation (lg:flex ensures ample breathing room for 6 links + logo + CTA) */}
          <div className="hidden items-center gap-6 lg:flex xl:gap-8">
            <nav aria-label="Main Navigation" className="flex items-center gap-5 xl:gap-7">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="whitespace-nowrap text-xs xl:text-sm font-medium tracking-wide text-white/90 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <a
              href={SITE_CONFIG.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[40px] items-center justify-center rounded-full bg-signal-lime px-4 py-2 text-xs font-bold text-[#221045] transition-colors hover:bg-[#d5ff4f]"
            >
              Get the app
            </a>
          </div>

          {/* Hamburger button visible on mobile & tablet */}
          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            className="relative z-[60] flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-slate-950/45 text-white shadow-lg backdrop-blur-md transition-all hover:bg-white/10 active:scale-95 lg:hidden"
            aria-label={mobileOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden" id="mobile-navigation">
          <button
            type="button"
            aria-label="Close navigation menu"
            className="absolute inset-0 h-full w-full bg-slate-950/60 backdrop-blur-[3px]"
            onClick={() => setMobileOpen(false)}
          />
          <nav
            aria-label="Mobile Navigation Menu"
            className="absolute left-4 right-4 top-[72px] mx-auto max-w-md max-h-[calc(100dvh-88px)] overflow-y-auto overscroll-contain rounded-[1.75rem] border border-white/15 bg-[#17112b]/95 p-3.5 text-white shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl no-scrollbar"
          >
            <div className="flex items-center justify-between px-3 pb-3 pt-2">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/45">Explore Trivio</p>
                <p className="mt-1 text-lg font-semibold tracking-tight">Find your next place.</p>
              </div>
              <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] font-semibold tracking-[0.16em] text-white/55">MENU</span>
            </div>
            <div className="space-y-1">
              {NAV_ITEMS.map((item, index) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="group flex min-h-12 items-center justify-between rounded-xl px-3.5 text-[15px] font-medium text-white/85 transition-colors hover:bg-white/[0.08] hover:text-white"
                >
                  <span className="flex items-center gap-3">
                    <span className="font-mono text-[10px] text-white/35">0{index + 1}</span>
                    {item.label}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-white/35 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-signal-lime" />
                </Link>
              ))}
            </div>
            <a
              href={SITE_CONFIG.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="mt-3 flex min-h-12 items-center justify-center gap-2 rounded-full bg-signal-lime px-5 text-sm font-bold text-[#221045] transition-colors hover:bg-[#d5ff4f]"
            >
              Download Trivio <ArrowUpRight className="h-4 w-4" />
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
