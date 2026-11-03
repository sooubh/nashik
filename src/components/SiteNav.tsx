'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { SITE_CONFIG } from '@/config/site';

const NAV_ITEMS = [
  { label: 'Home', href: '#main-content' },
  { label: 'Destinations', href: '#destinations' },
  { label: 'Experiences', href: '#experiences' },
  { label: 'App Preview', href: '#app-preview' },
  { label: 'Why Trivio', href: '#why-trivio' },
];

export function SiteNav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={'fixed left-0 right-0 top-0 z-50 w-full transition-all duration-300 ' + (
        isScrolled
          ? 'border-b border-white/10 bg-slate-950/90 py-3.5 shadow-xl backdrop-blur-md'
          : 'bg-transparent py-6 sm:py-8'
      )}
    >
      <div className="flex w-full items-center justify-between px-6 sm:px-12 lg:px-16">
        <Link
          href="/"
          className="group flex select-none items-center gap-1.5 text-xl font-black tracking-widest text-white sm:text-2xl"
          aria-label="Trivio Home"
        >
          <span>TRIVIO</span>
          <span aria-hidden="true" className="text-sm text-signal-lime">●</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex lg:gap-10">
          <nav aria-label="Main Navigation" className="flex items-center gap-6 lg:gap-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="whitespace-nowrap text-sm font-medium tracking-wide text-white/90 transition-colors hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href={SITE_CONFIG.playStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-signal-lime px-5 py-2.5 text-xs font-bold text-[#221045] transition-colors hover:bg-[#d5ff4f]"
          >
            Get the app
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((open) => !open)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-black/10 text-white transition-colors hover:bg-white/10 md:hidden"
          aria-label={mobileOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
        >
          {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="mt-3 w-full px-6 md:hidden" id="mobile-navigation">
          <nav
            aria-label="Mobile Navigation Menu"
            className="flex flex-col gap-2 rounded-2xl border border-white/15 bg-slate-950/95 p-5 text-white shadow-2xl backdrop-blur-xl"
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-white/90 transition-colors hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <a
              href={SITE_CONFIG.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-full bg-signal-lime py-3 text-center text-sm font-bold text-[#221045]"
            >
              Get the app on Google Play
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
