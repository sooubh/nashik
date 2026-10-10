'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Download } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: 'Features', href: '/#features' },
    { label: 'Screenshots', href: '/#screenshots' },
    { label: 'Trip Planner', href: '/trip-planner' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-40 transition-all duration-300 px-4 sm:px-6 md:px-8',
        isScrolled
          ? 'py-3 sm:py-4 glass-nav shadow-soft-sm'
          : 'py-4 sm:py-6 bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Brand Logo & Name */}
        <Link
          href="/"
          className="flex items-center gap-3 group focus:outline-none shrink-0"
          aria-label="NashikExplore Home"
        >
          <div className="relative h-10 w-10 sm:h-12 sm:w-12 rounded-2xl overflow-hidden shadow-soft-sm border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 transition-transform group-hover:-translate-y-1 flex items-center justify-center p-2 shrink-0">
            <Image
              src="/images/logo.png"
              alt="NashikExplore Logo"
              width={40}
              height={40}
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col shrink-0">
            <span className="font-extrabold text-base sm:text-lg md:text-xl tracking-tight text-slate-900 dark:text-white leading-tight">
              Nashik<span className="text-brand-blue dark:text-brand-400">Explore</span>
            </span>
            <span className="block text-[10px] sm:text-xs uppercase font-bold tracking-widest text-slate-500 dark:text-slate-400 leading-none mt-1">
              Android App
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden lg:flex items-center gap-6 xl:gap-8 px-8 py-3 rounded-2xl glass-card shadow-soft-sm"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  'text-sm font-bold transition-all py-1.5 flex items-center gap-2',
                  isActive
                    ? 'text-brand-blue dark:text-brand-400 font-extrabold'
                    : 'text-slate-600 dark:text-slate-300 hover:text-brand-blue dark:hover:text-brand-400 hover:-translate-y-0.5'
                )}
              >
                <span>{link.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Right Action buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />

          {/* Google Play CTA */}
          <a
            href="https://play.google.com/store/apps/details?id=com.nashikexplore.app"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Get NashikExplore on Google Play (opens in a new tab)"
            className="hidden sm:inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-white bg-brand-blue hover:bg-brand-700 transition-all font-bold text-sm shadow-glow-sm active:scale-[0.97] shrink-0 min-h-[44px]"
          >
            <Download className="w-4 h-4" />
            <span>Get App</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            type="button"
            className="lg:hidden p-2.5 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 focus:outline-none hover:bg-slate-100 dark:hover:bg-slate-800 transition-all min-h-[44px] min-w-[44px] flex items-center justify-center active:scale-[0.97] cursor-pointer"
            aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-nav-drawer"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
          className="lg:hidden fixed inset-x-0 top-full z-40 bg-surface-50/98 dark:bg-surface-900/98 backdrop-blur-2xl px-6 py-8 flex flex-col justify-between overflow-y-auto animate-in fade-in duration-200 border-t border-slate-200 dark:border-slate-800 h-[calc(100dvh-100%)] shadow-2xl"
        >
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  'text-base sm:text-lg font-bold py-4 px-5 rounded-2xl transition-colors flex items-center justify-between min-h-[44px]',
                  link.href === pathname
                    ? 'bg-brand-50 text-brand-blue dark:bg-brand-900/40 dark:text-brand-400 font-extrabold'
                    : 'text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 active:bg-slate-200 dark:active:bg-slate-700'
                )}
              >
                <span>{link.label}</span>
              </Link>
            ))}
          </div>

          <div className="pt-6 border-t border-slate-200/80 dark:border-slate-800/80 flex flex-col gap-4 shrink-0 pb-6 mt-6">
            <a
              href="https://play.google.com/store/apps/details?id=com.nashikexplore.app"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Get NashikExplore on Google Play (opens in a new tab)"
              className="w-full py-4 rounded-xl text-white bg-brand-blue hover:bg-brand-700 font-bold text-base text-center flex items-center justify-center gap-2 shadow-glow-sm active:scale-[0.97] min-h-[44px]"
            >
              <Download className="w-5 h-5" />
              <span>Get App on Google Play</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
