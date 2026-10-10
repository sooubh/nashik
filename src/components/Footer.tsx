import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Download, Mail, ExternalLink, Trash2 } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-surface-50 dark:bg-surface-900 border-t border-slate-200/60 dark:border-slate-800/60 pt-14 sm:pt-18 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-8 transition-colors">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-12 sm:mb-16">
        {/* Col 1: Brand & App Download */}
        <div className="space-y-6">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative h-10 w-10 rounded-xl overflow-hidden shadow-soft-sm border border-slate-200/60 dark:border-slate-800/60 bg-white dark:bg-slate-900 flex items-center justify-center p-1.5 shrink-0">
              <Image
                src="/images/logo.png"
                alt="NashikExplore Logo"
                width={32}
                height={32}
                className="object-contain"
              />
            </div>
            <div>
              <span className="font-extrabold text-lg tracking-tight text-slate-900 dark:text-white">
                Nashik<span className="text-brand-blue dark:text-brand-400">Explore</span>
              </span>
              <span className="block text-[10px] uppercase font-bold tracking-widest text-slate-500 dark:text-slate-400">
                Android Travel App
              </span>
            </div>
          </Link>

          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm">
            Discover places, explore attractions, and plan your Nashik trip with NashikExplore.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a
              href="https://play.google.com/store/apps/details?id=com.nashikexplore.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 text-white font-bold text-sm shadow-soft-sm transition-all active:scale-[0.97] min-h-[44px]"
            >
              <Download className="w-4 h-4 text-brand-300" />
              <span>Get on Google Play</span>
            </a>
          </div>
        </div>

        {/* Col 2: Navigation Links */}
        {/* Col 2: Navigation Links */}
        <div>
          <h4 className="font-bold text-xs uppercase tracking-widest text-slate-900 dark:text-white mb-4">
            Explore
          </h4>
          <ul className="space-y-1 text-sm text-slate-600 dark:text-slate-400">
            <li>
              <Link href="/#features" className="hover:text-brand-blue transition-colors py-1.5 flex items-center min-h-[36px]">
                Features
              </Link>
            </li>
            <li>
              <Link href="/#screenshots" className="hover:text-brand-blue transition-colors py-1.5 flex items-center min-h-[36px]">
                Screenshots
              </Link>
            </li>
            <li>
              <Link href="/trip-planner" className="hover:text-brand-blue transition-colors py-1.5 flex items-center min-h-[36px]">
                Trip Planner
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-brand-blue transition-colors py-1.5 flex items-center min-h-[36px]">
                Contact &amp; Support
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 3: Legal & Policy */}
        <div>
          <h4 className="font-bold text-xs uppercase tracking-widest text-slate-900 dark:text-white mb-4">
            Legal &amp; Policy
          </h4>
          <ul className="space-y-1 text-sm text-slate-600 dark:text-slate-400">
            <li>
              <Link href="/privacy-policy" className="hover:text-brand-blue transition-colors font-semibold text-slate-900 dark:text-white py-1.5 flex items-center min-h-[36px]">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/delete-account" className="hover:text-rose-600 dark:hover:text-rose-400 transition-colors font-semibold text-rose-600 dark:text-rose-400 flex items-center gap-2 py-1.5 min-h-[36px]">
                <Trash2 className="w-4 h-4 shrink-0" />
                <span>Delete Account</span>
              </Link>
            </li>
            <li>
              <Link href="/terms-of-use" className="hover:text-brand-blue transition-colors py-1.5 flex items-center min-h-[36px]">
                Terms of Use
              </Link>
            </li>
            <li>
              <Link href="/data-safety" className="hover:text-brand-blue transition-colors py-1.5 flex items-center min-h-[36px]">
                Data Safety
              </Link>
            </li>
            <li>
              <Link href="/cookies-policy" className="hover:text-brand-blue transition-colors py-1.5 flex items-center min-h-[36px]">
                Cookies Policy
              </Link>
            </li>
            <li>
              <Link href="/disclaimer" className="hover:text-brand-blue transition-colors py-1.5 flex items-center min-h-[36px]">
                Disclaimer
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 4: Support & Details */}
        <div>
          <h4 className="font-bold text-xs uppercase tracking-widest text-slate-900 dark:text-white mb-4">
            Support
          </h4>
          <ul className="space-y-1 text-sm text-slate-600 dark:text-slate-400">
            <li>
              <a
                href="mailto:support@nashikexplore.com"
                className="hover:text-brand-blue transition-colors flex items-center gap-2 font-semibold break-all py-1.5 min-h-[36px]"
              >
                <Mail className="w-4 h-4 text-brand-blue shrink-0" />
                <span>support@nashikexplore.com</span>
              </a>
            </li>
            <li>
              <a
                href="https://play.google.com/store/apps/details?id=com.nashikexplore.app"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google Play Store (opens in a new tab)"
                className="hover:text-brand-blue transition-colors flex items-center gap-1.5 py-1.5 min-h-[36px]"
              >
                <span>Google Play Store</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              </a>
            </li>
            <li className="pt-3">
              <span className="font-bold block text-slate-900 dark:text-white mb-1">Location</span>
              <span className="text-xs leading-relaxed">Nashik, Maharashtra, India</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto pt-8 sm:pt-10 border-t border-slate-200/60 dark:border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <span className="text-sm text-slate-500 dark:text-slate-400">
          &copy; {new Date().getFullYear()} NashikExplore. All rights reserved.
        </span>

        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-slate-500 dark:text-slate-400">
          <Link href="/privacy-policy" className="hover:text-brand-blue transition-colors py-1">
            Privacy Policy
          </Link>
          <Link href="/delete-account" className="hover:text-rose-600 dark:hover:text-rose-400 transition-colors py-1">
            Delete Account
          </Link>
          <Link href="/terms-of-use" className="hover:text-brand-blue transition-colors py-1">
            Terms of Use
          </Link>
          <Link href="/data-safety" className="hover:text-brand-blue transition-colors py-1">
            Data Safety
          </Link>
          <Link href="/sitemap.xml" className="hover:text-brand-blue transition-colors py-1">
            Sitemap
          </Link>
        </div>
      </div>
    </footer>
  );
}
