import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Download, Mail, MapPin, ExternalLink } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white dark:bg-[#060A12] border-t border-slate-200/80 dark:border-slate-800/80 pt-16 pb-12 px-6 md:px-8 transition-colors">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
        {/* Col 1: Brand */}
        <div className="lg:col-span-2 space-y-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative h-9 w-9 rounded-xl overflow-hidden shadow-soft-sm border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-center p-1">
              <Image
                src="/images/logo.png"
                alt="Nashik Travel Guide Logo"
                width={32}
                height={32}
                className="object-contain"
              />
            </div>
            <div>
              <span className="font-extrabold text-base tracking-tight text-slate-900 dark:text-white">
                Nashik<span className="text-brand-blue dark:text-brand-400">Guide</span>
              </span>
              <span className="block text-[10px] uppercase font-bold tracking-widest text-slate-500 dark:text-slate-400">
                Official Companion App
              </span>
            </div>
          </Link>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm">
            The premier Android travel guide for Nashik, Maharashtra. Explore verified attractions, spiritual circuits, vineyard trails, and offline travel maps.
          </p>

          <div className="pt-2 flex items-center gap-3">
            <a
              href="https://play.google.com/store/apps/details?id=com.nashikexplore.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 transition-all shadow-soft-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Available on Google Play</span>
            </a>
          </div>
        </div>

        {/* Col 2: Navigation Links */}
        <div>
          <h4 className="font-bold text-xs uppercase tracking-wider text-slate-900 dark:text-slate-100 mb-4">
            Navigation
          </h4>
          <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium">
            <li>
              <Link href="/#about" className="hover:text-brand-blue dark:hover:text-brand-400 transition-colors">
                Overview
              </Link>
            </li>
            <li>
              <Link href="/#features" className="hover:text-brand-blue dark:hover:text-brand-400 transition-colors">
                App Features
              </Link>
            </li>
            <li>
              <Link href="/#categories" className="hover:text-brand-blue dark:hover:text-brand-400 transition-colors">
                Categories
              </Link>
            </li>
            <li>
              <Link href="/#gallery" className="hover:text-brand-blue dark:hover:text-brand-400 transition-colors">
                Screenshots
              </Link>
            </li>
            <li>
              <Link href="/#reviews" className="hover:text-brand-blue dark:hover:text-brand-400 transition-colors">
                Reviews
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 3: Legal & Policy */}
        <div>
          <h4 className="font-bold text-xs uppercase tracking-wider text-slate-900 dark:text-slate-100 mb-4">
            Legal & Trust
          </h4>
          <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium">
            <li>
              <Link href="/privacy-policy" className="hover:text-brand-blue dark:hover:text-brand-400 transition-colors">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms-of-use" className="hover:text-brand-blue dark:hover:text-brand-400 transition-colors">
                Terms of Use
              </Link>
            </li>
            <li>
              <Link href="/data-safety" className="hover:text-brand-blue dark:hover:text-brand-400 transition-colors">
                Data Safety
              </Link>
            </li>
            <li>
              <Link href="/cookies-policy" className="hover:text-brand-blue dark:hover:text-brand-400 transition-colors">
                Cookies Policy
              </Link>
            </li>
            <li>
              <Link href="/disclaimer" className="hover:text-brand-blue dark:hover:text-brand-400 transition-colors">
                Disclaimer
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 4: Support & Contact */}
        <div>
          <h4 className="font-bold text-xs uppercase tracking-wider text-slate-900 dark:text-slate-100 mb-4">
            Helpdesk
          </h4>
          <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium">
            <li>
              <Link href="/contact" className="hover:text-brand-blue dark:hover:text-brand-400 transition-colors flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                <span>Contact Support</span>
              </Link>
            </li>
            <li>
              <Link href="/#faq" className="hover:text-brand-blue dark:hover:text-brand-400 transition-colors">
                FAQ Center
              </Link>
            </li>
            <li className="pt-2 text-xs text-slate-500">
              <span className="font-semibold block text-slate-700 dark:text-slate-300">Office Location</span>
              <span>College Road, Nashik, Maharashtra 422005</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-slate-200/80 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-xs text-slate-500 dark:text-slate-400 font-medium text-center sm:text-left">
          &copy; {new Date().getFullYear()} Nashik Travel Guide. All rights reserved.
        </span>

        <div className="flex items-center gap-6 text-xs text-slate-500 dark:text-slate-400 font-medium">
          <Link href="/privacy-policy" className="hover:underline">
            Privacy
          </Link>
          <span>•</span>
          <Link href="/terms-of-use" className="hover:underline">
            Terms
          </Link>
          <span>•</span>
          <Link href="/sitemap.xml" className="hover:underline">
            Sitemap
          </Link>
        </div>
      </div>
    </footer>
  );
}
