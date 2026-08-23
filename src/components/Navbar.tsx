'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Download, QrCode, Sparkles } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { QrCodeModal } from './QrCodeModal';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isQrModalOpen, setIsQrModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const navLinks = [
    { label: 'Overview', href: '/#about' },
    { label: 'Features', href: '/#features' },
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
            ? 'py-3 bg-white/80 dark:bg-[#060A12]/80 backdrop-blur-xl border-b border-slate-200/80 dark:border-slate-800/80 shadow-soft-sm'
            : 'py-5 bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Brand Logo & Name */}
          <Link href="/" className="flex items-center gap-3 group focus:outline-none">
            <div className="relative h-10 w-10 rounded-xl overflow-hidden shadow-soft-sm border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 group-hover:scale-105 transition-transform flex items-center justify-center p-1.5">
              <Image
                src="/images/logo.png"
                alt="Nashik Travel Guide Logo"
                width={32}
                height={32}
                className="object-contain"
                priority
              />
            </div>
            <div>
              <span className="font-extrabold text-base sm:text-lg tracking-tight text-slate-900 dark:text-white">
                Nashik<span className="text-brand-blue dark:text-brand-400">Guide</span>
              </span>
              <span className="block text-[10px] uppercase font-bold tracking-widest text-slate-500 dark:text-slate-400">
                Official Android App
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 px-6 py-2 rounded-full glass-card shadow-soft-sm border border-slate-200/60 dark:border-slate-800/60">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-xs font-bold text-slate-600 dark:text-slate-300 hover:text-brand-blue dark:hover:text-brand-400 transition-colors py-1"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Action buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* QR Code trigger button */}
            <button
              type="button"
              onClick={() => setIsQrModalOpen(true)}
              className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-brand-blue dark:hover:text-brand-400 hover:border-brand-300 text-xs font-bold transition-all shadow-soft-sm active:scale-95"
              title="Scan QR Code to install app"
            >
              <QrCode className="w-3.5 h-3.5 text-brand-blue" />
              <span>QR Code</span>
            </button>

            <ThemeToggle />

            {/* Google Play CTA */}
            <a
              href="https://play.google.com/store/apps/details?id=com.nashikexplore.app"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-white bg-brand-blue hover:bg-brand-700 transition-all font-bold text-xs shadow-glow-sm hover:scale-105 active:scale-95"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Get the App</span>
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              type="button"
              className="lg:hidden p-2 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 focus:outline-none hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-[65px] z-40 bg-white/95 dark:bg-[#060A12]/95 backdrop-blur-2xl px-6 py-8 flex flex-col justify-between overflow-y-auto animate-in fade-in duration-200 border-t border-slate-200 dark:border-slate-800">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-base font-bold py-3 px-4 rounded-xl transition-colors text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="pt-6 border-t border-slate-200/80 dark:border-slate-800/80 flex flex-col gap-3">
              <a
                href="https://play.google.com/store/apps/details?id=com.nashikexplore.app"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-xl text-white bg-brand-blue hover:bg-brand-700 font-bold text-sm text-center flex items-center justify-center gap-2 shadow-glow-sm"
              >
                <Download className="w-4 h-4" />
                <span>Download on Google Play</span>
              </a>

              <button
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsQrModalOpen(true);
                }}
                className="w-full py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-bold text-xs text-center flex items-center justify-center gap-2"
              >
                <QrCode className="w-3.5 h-3.5 text-brand-blue" />
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
