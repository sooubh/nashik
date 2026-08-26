'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Download, QrCode, Sparkles, Compass } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { QrCodeModal } from './QrCodeModal';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isQrModalOpen, setIsQrModalOpen] = useState(false);
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
        setIsQrModalOpen(false);
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

  const navLinks = [
    { label: 'Overview', href: '/#about' },
    { label: 'Features', href: '/#features' },
    { label: 'AI Planner', href: '/trip-planner', highlight: true },
    { label: 'Categories', href: '/#categories' },
    { label: 'Screenshots', href: '/#gallery' },
    { label: 'Reviews', href: '/#reviews' },
    { label: 'FAQ', href: '/#faq' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <>
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
            aria-label="Nashik Travel Guide Home"
          >
            <div className="relative h-10 w-10 sm:h-12 sm:w-12 rounded-2xl overflow-hidden shadow-soft-sm border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 transition-transform group-hover:-translate-y-1 flex items-center justify-center p-2 shrink-0">
              <Image
                src="/images/logo.png"
                alt="Nashik Travel Guide Logo"
                width={40}
                height={40}
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-base sm:text-lg md:text-xl tracking-tight text-slate-900 dark:text-white leading-tight">
                Nashik<span className="text-brand-blue dark:text-brand-400">Guide</span>
              </span>
              <span className="block text-[10px] sm:text-xs uppercase font-bold tracking-widest text-slate-500 dark:text-slate-400 leading-none mt-1">
                Official App
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden lg:flex items-center gap-6 xl:gap-8 px-8 py-3 rounded-2xl glass-card shadow-soft-sm"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => {
              const isPlanner = link.href === '/trip-planner';
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    'text-sm font-bold transition-all py-1.5 flex items-center gap-2',
                    isActive
                      ? 'text-brand-blue dark:text-brand-400 font-extrabold'
                      : isPlanner
                      ? 'text-brand-blue dark:text-brand-300 hover:text-brand-700 dark:hover:text-brand-200 hover:-translate-y-0.5'
                      : 'text-slate-600 dark:text-slate-300 hover:text-brand-blue dark:hover:text-brand-400 hover:-translate-y-0.5'
                  )}
                >
                  {isPlanner && <Sparkles className="w-4 h-4 text-brand-blue animate-pulse" />}
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right Action buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* QR Code trigger button */}
            <button
              type="button"
              onClick={() => setIsQrModalOpen(true)}
              className="hidden md:inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 hover:text-brand-blue dark:hover:text-brand-400 hover:border-brand-300 text-sm font-bold transition-all shadow-soft-sm active:scale-[0.97] min-h-[44px]"
              title="Scan QR Code to install app"
            >
              <QrCode className="w-4 h-4 text-brand-blue" />
              <span>QR Code</span>
            </button>

            <ThemeToggle />

            {/* Google Play CTA */}
            <a
              href="https://play.google.com/store/apps/details?id=com.nashikexplore.app"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-white bg-brand-blue hover:bg-brand-700 transition-all font-bold text-sm shadow-glow-sm active:scale-[0.97] shrink-0 min-h-[44px]"
            >
              <Download className="w-4 h-4" />
              <span>Get App</span>
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              type="button"
              className="lg:hidden p-2.5 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 focus:outline-none hover:bg-slate-100 dark:hover:bg-slate-800 transition-all min-h-[44px] min-w-[44px] flex items-center justify-center active:scale-[0.97]"
              aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-[72px] sm:top-[88px] z-40 bg-surface-50/98 dark:bg-surface-900/98 backdrop-blur-2xl px-6 py-8 flex flex-col justify-between overflow-y-auto animate-in fade-in duration-200 border-t border-slate-200 dark:border-slate-800 h-[calc(100dvh-72px)] sm:h-[calc(100dvh-88px)]">
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
                  <span className="flex items-center gap-3">
                    {link.label === 'AI Planner' && <Sparkles className="w-5 h-5 text-brand-blue" />}
                    {link.label}
                  </span>
                  {link.label === 'AI Planner' && (
                    <span className="text-xs uppercase font-extrabold px-3 py-1 rounded-lg bg-brand-blue text-white shadow-glow-sm">
                      Interactive
                    </span>
                  )}
                </Link>
              ))}
            </div>

            <div className="pt-6 border-t border-slate-200/80 dark:border-slate-800/80 flex flex-col gap-4 shrink-0 pb-6 mt-6">
              <a
                href="https://play.google.com/store/apps/details?id=com.nashikexplore.app"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-xl text-white bg-brand-blue hover:bg-brand-700 font-bold text-base text-center flex items-center justify-center gap-2 shadow-glow-sm active:scale-[0.97] min-h-[44px]"
              >
                <Download className="w-5 h-5" />
                <span>Download on Google Play</span>
              </a>

              <button
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsQrModalOpen(true);
                }}
                className="w-full py-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-bold text-base text-center flex items-center justify-center gap-2 shadow-soft-sm active:scale-[0.97] hover:border-brand-300 dark:hover:border-brand-700 min-h-[44px]"
              >
                <QrCode className="w-5 h-5 text-brand-blue" />
                <span>Show QR Code</span>
              </button>
            </div>
          </div>
        )}
      </header>

      {/* QR Code Scanner Modal */}
      <QrCodeModal isOpen={isQrModalOpen} onClose={() => setIsQrModalOpen(false)} />
    </>
  );
}
