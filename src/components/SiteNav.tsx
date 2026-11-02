'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { SITE_CONFIG } from '@/config/site';

export function SiteNav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 pt-4 sm:pt-6 pointer-events-none">
      <div className="max-w-5xl mx-auto flex items-center justify-between pointer-events-auto">
        {/* Navigation Bar */}
        <div className="w-full h-14 px-4 sm:px-6 rounded-full bg-slate-950/85 backdrop-blur-md border border-white/20 flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-signal-lime rounded-lg"
            aria-label={`${SITE_CONFIG.name} Home`}
          >
            <Image
              src="/images/branding/app-horizontal-icon.png"
              alt="Trivio"
              width={140}
              height={36}
              priority
              className="h-7 sm:h-8 w-auto object-contain brightness-105"
            />
          </Link>

          {/* Desktop Nav Items */}
          <nav aria-label="Main Navigation" className="hidden md:flex items-center gap-6">
            {SITE_CONFIG.navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs sm:text-sm font-medium text-white/80 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action & Mobile Toggle */}
          <div className="flex items-center gap-2.5">
            <a
              href={SITE_CONFIG.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="h-9 px-4 rounded-full bg-signal-lime hover:bg-[#d5ff4f] text-[#221045] text-xs sm:text-sm font-bold inline-flex items-center gap-1.5 transition-transform hover:scale-[1.02] active:scale-95"
            >
              <span>Get App</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-white transition-colors"
              aria-label={mobileOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden pointer-events-auto max-w-5xl mx-auto mt-2 px-2">
          <nav
            aria-label="Mobile Navigation Menu"
            className="rounded-2xl bg-slate-950/95 backdrop-blur-xl border border-white/15 p-4 flex flex-col gap-3 text-white"
          >
            {SITE_CONFIG.navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-3 py-2 text-sm font-medium text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={SITE_CONFIG.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 text-center py-2.5 rounded-xl bg-signal-lime text-[#221045] font-bold text-sm"
            >
              Download on Google Play
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
