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
    { label: 'Planner Demo', href: '/#trip-planner-demo' },
    { label: 'Features', href: '/#features' },
    { label: 'Destinations', href: '/#places-preview' },
    { label: 'Screenshots', href: '/#screenshots' },
    { label: 'FAQ', href: '/#faq' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-40 transition-colors duration-200 px-4 sm:px-6 md:px-8',
        isScrolled
          ? 'py-3 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md'
          : 'py-4 sm:py-5 bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Brand Logo & Name */}
        <Link
          href="/"
          className="flex items-center gap-3 group focus:outline-none shrink-0"
          aria-label="NashikExplore Home"
        >
          <div className="relative h-10 w-10 sm:h-11 sm:w-11 rounded-2xl overflow-hidden bg-white dark:bg-slate-900 flex items-center justify-center p-2 shrink-0">
            <Image
              src="/images/logo.png"
              alt="NashikExplore Logo"
              width={36}
              height={36}
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col shrink-0 text-left">
            <span className="font-extrabold text-base sm:text-lg tracking-tight text-slate-900 dark:text-white leading-tight">
              Nashik<span className="text-blue-600 dark:text-blue-400">Explore</span>
            </span>
            <span className="block text-[11px] font-bold text-slate-500 dark:text-slate-400 leading-none mt-0.5">
              Android Travel Guide
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden lg:flex items-center gap-6 xl:gap-7 px-6 py-2.5 rounded-2xl bg-slate-100/90 dark:bg-slate-900/90"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  'text-xs font-bold transition-colors py-1',
                  isActive
                    ? 'text-blue-600 dark:text-blue-400'
                    : 'text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400'
                )}
              >
                <span>{link.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Right Action buttons */}
        <div className="flex items-center gap-2.5">
          <ThemeToggle />

          {/* Google Play CTA */}
          <a
            href="https://play.google.com/store/apps/details?id=com.nashikexplore.app"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Get NashikExplore on Google Play (opens in a new tab)"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-white bg-blue-600 hover:bg-blue-700 transition-colors font-bold text-xs active:scale-[0.98] shrink-0 min-h-[42px]"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Get App</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            type="button"
            className="lg:hidden p-2 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 focus:outline-none hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors min-h-[42px] min-w-[42px] flex items-center justify-center cursor-pointer"
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
          className="lg:hidden fixed inset-x-0 top-full z-40 bg-white dark:bg-slate-950 px-6 py-6 flex flex-col justify-between overflow-y-auto h-[calc(100dvh-100%)]"
        >
          <div className="flex flex-col gap-1.5 text-left">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  'text-base font-bold py-3.5 px-4 rounded-xl transition-colors flex items-center justify-between min-h-[44px]',
                  link.href === pathname
                    ? 'bg-blue-50 text-blue-600 dark:bg-blue-950/60 dark:text-blue-400'
                    : 'text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900'
                )}
              >
                <span>{link.label}</span>
              </Link>
            ))}
          </div>

          <div className="pt-6 flex flex-col gap-3 shrink-0 pb-6 mt-6">
            <a
              href="https://play.google.com/store/apps/details?id=com.nashikexplore.app"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Get NashikExplore on Google Play (opens in a new tab)"
              className="w-full py-3.5 rounded-xl text-white bg-blue-600 hover:bg-blue-700 font-bold text-sm text-center flex items-center justify-center gap-2 min-h-[46px]"
            >
              <Download className="w-4 h-4" />
              <span>Get App on Google Play</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
