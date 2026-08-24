import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Download, Mail, MapPin, ExternalLink, ShieldCheck, UserCheck, Trash2 } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white dark:bg-[#060A12] border-t border-slate-200/80 dark:border-slate-800/80 pt-12 sm:pt-16 pb-8 sm:pb-12 px-4 sm:px-6 md:px-8 transition-colors">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 mb-10 sm:mb-12">
        {/* Col 1: Brand & App Download (Span 2) */}
        <div className="sm:col-span-2 space-y-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative h-9 w-9 rounded-xl overflow-hidden shadow-soft-sm border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-center p-1 shrink-0">
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

          <div className="pt-1 flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <a
              href="https://play.google.com/store/apps/details?id=com.nashikexplore.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 transition-all shadow-soft-sm hover:scale-[1.02] active:scale-[0.98] min-h-[40px]"
            >
              <Download className="w-3.5 h-3.5 text-brand-sky" />
              <span>Get on Google Play</span>
            </a>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200/60 dark:border-slate-800/60 max-w-sm">
            <div className="flex items-center gap-2 text-slate-800 dark:text-slate-200 font-bold text-xs mb-1">
              <UserCheck className="w-3.5 h-3.5 text-brand-blue shrink-0" />
              <span>In-App Account &amp; Registration</span>
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
              Account creation and Google Sign-In are integrated natively in the Android app. Guest mode is also fully supported with offline Hive storage.
            </p>
          </div>
        </div>

        {/* Col 2: Navigation Links */}
        <div>
          <h4 className="font-bold text-xs uppercase tracking-wider text-slate-900 dark:text-slate-100 mb-3.5 sm:mb-4">
            Navigation
          </h4>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium">
            <li>
              <Link href="/#about" className="hover:text-brand-blue dark:hover:text-brand-400 transition-colors py-1 block">
                Overview
              </Link>
            </li>
            <li>
              <Link href="/#features" className="hover:text-brand-blue dark:hover:text-brand-400 transition-colors py-1 block">
                App Features
              </Link>
            </li>
            <li>
              <Link href="/trip-planner" className="hover:text-brand-blue dark:hover:text-brand-400 transition-colors font-semibold text-brand-blue dark:text-brand-300 py-1 block">
                AI Trip Planner
              </Link>
            </li>
            <li>
              <Link href="/#categories" className="hover:text-brand-blue dark:hover:text-brand-400 transition-colors py-1 block">
                Categories
              </Link>
            </li>
            <li>
              <Link href="/#gallery" className="hover:text-brand-blue dark:hover:text-brand-400 transition-colors py-1 block">
                Screenshots
              </Link>
            </li>
            <li>
              <Link href="/#reviews" className="hover:text-brand-blue dark:hover:text-brand-400 transition-colors py-1 block">
                Reviews
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 3: Legal & Trust */}
        <div>
          <h4 className="font-bold text-xs uppercase tracking-wider text-slate-900 dark:text-slate-100 mb-3.5 sm:mb-4">
            Legal &amp; Trust
          </h4>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium">
            <li>
              <Link href="/privacy-policy" className="hover:text-brand-blue dark:hover:text-brand-400 transition-colors font-semibold text-slate-900 dark:text-white py-1 block">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/delete-account" className="hover:text-rose-600 dark:hover:text-rose-400 transition-colors font-semibold text-rose-600 dark:text-rose-400 py-1 flex items-center gap-1.5">
                <Trash2 className="w-3 h-3" />
                <span>Delete Account</span>
              </Link>
            </li>
            <li>
              <Link href="/terms-of-use" className="hover:text-brand-blue dark:hover:text-brand-400 transition-colors py-1 block">
                Terms of Use
              </Link>
            </li>
            <li>
              <Link href="/data-safety" className="hover:text-brand-blue dark:hover:text-brand-400 transition-colors py-1 block">
                Data Safety
              </Link>
            </li>
            <li>
              <Link href="/cookies-policy" className="hover:text-brand-blue dark:hover:text-brand-400 transition-colors py-1 block">
                Cookies Policy
              </Link>
            </li>
            <li>
              <Link href="/disclaimer" className="hover:text-brand-blue dark:hover:text-brand-400 transition-colors py-1 block">
                Disclaimer
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 4: Support & Contact */}
        <div>
          <h4 className="font-bold text-xs uppercase tracking-wider text-slate-900 dark:text-slate-100 mb-3.5 sm:mb-4">
            Helpdesk
          </h4>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium">
            <li>
              <Link href="/contact" className="hover:text-brand-blue dark:hover:text-brand-400 transition-colors flex items-center gap-1.5 font-semibold py-1">
                <Mail className="w-3.5 h-3.5 text-brand-blue shrink-0" />
                <span>Contact Support</span>
              </Link>
            </li>
            <li>
              <Link href="/#faq" className="hover:text-brand-blue dark:hover:text-brand-400 transition-colors py-1 block">
                FAQ Center
              </Link>
            </li>
            <li>
              <a
                href="https://play.google.com/store/apps/details?id=com.nashikexplore.app"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-blue dark:hover:text-brand-400 transition-colors flex items-center gap-1 py-1"
              >
                <span>Google Play Store</span>
                <ExternalLink className="w-3 h-3 text-slate-400 shrink-0" />
              </a>
            </li>
            <li className="pt-2 text-xs text-slate-500">
              <span className="font-semibold block text-slate-700 dark:text-slate-300">Office Location</span>
              <span>College Road, Nashik, Maharashtra 422005</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto pt-6 sm:pt-8 border-t border-slate-200/80 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-center sm:text-left">
        <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
          &copy; {new Date().getFullYear()} Nashik Travel Guide. All rights reserved.
        </span>

        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-slate-500 dark:text-slate-400 font-medium">
          <Link href="/privacy-policy" className="hover:underline py-1">
            Privacy Policy
          </Link>
          <span>•</span>
          <Link href="/delete-account" className="hover:underline py-1 text-rose-600 dark:text-rose-400">
            Delete Account
          </Link>
          <span>•</span>
          <Link href="/terms-of-use" className="hover:underline py-1">
            Terms of Use
          </Link>
          <span>•</span>
          <Link href="/data-safety" className="hover:underline py-1">
            Data Safety
          </Link>
          <span>•</span>
          <Link href="/sitemap.xml" className="hover:underline py-1">
            Sitemap
          </Link>
        </div>
      </div>
    </footer>
  );
}
