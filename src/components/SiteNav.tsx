'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, MapPin, User } from 'lucide-react';
import { SITE_CONFIG } from '@/config/site';

export function SiteNav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#' },
    { label: 'About Us', href: '#features' },
    { label: 'Pricing', href: '#packages' },
    { label: 'Tours', href: '#tours' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full ${
        isScrolled
          ? 'bg-slate-950/90 backdrop-blur-md border-b border-white/10 py-3.5 shadow-xl'
          : 'bg-transparent py-6 sm:py-8'
      }`}
    >
      <div className="w-full px-6 sm:px-12 lg:px-16 flex items-center justify-between">
        {/* Brand Logo: TRIVIO + MapPin */}
        <Link
          href="/"
          className="group flex items-center gap-1.5 text-white tracking-widest font-black text-xl sm:text-2xl select-none"
          aria-label="Trivio Home"
        >
          <span>TRIVIO</span>
          <MapPin className="w-5 h-5 fill-white text-white transition-transform group-hover:scale-110" />
        </Link>

        {/* Desktop Navigation Links & User Avatar */}
        <div className="hidden md:flex items-center gap-8 lg:gap-12">
          <nav aria-label="Main Navigation" className="flex items-center gap-8 lg:gap-10">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-white/90 hover:text-white transition-colors tracking-wide"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* User Profile Avatar Icon */}
          <button
            type="button"
            aria-label="User Account"
            className="w-9 h-9 rounded-full border border-white/70 hover:border-white flex items-center justify-center text-white/90 hover:text-white transition-colors hover:bg-white/10"
          >
            <User className="w-4 h-4 stroke-[2]" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-3">
          <button
            type="button"
            aria-label="User Account"
            className="w-8 h-8 rounded-full border border-white/70 flex items-center justify-center text-white"
          >
            <User className="w-3.5 h-3.5" />
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-colors"
            aria-label={mobileOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden w-full px-6 mt-3">
          <nav
            aria-label="Mobile Navigation Menu"
            className="rounded-2xl bg-slate-950/95 backdrop-blur-xl border border-white/15 p-5 flex flex-col gap-3 text-white shadow-2xl"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="px-3 py-2 text-base font-medium text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href={SITE_CONFIG.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 text-center py-3 rounded-full bg-signal-lime text-[#221045] font-bold text-sm shadow-md"
            >
              Get App on Google Play
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
