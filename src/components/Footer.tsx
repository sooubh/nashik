import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Download, Mail, MapPin, ExternalLink, ShieldCheck, UserCheck, Trash2 } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-surface-50 dark:bg-surface-900 border-t border-slate-200/60 dark:border-slate-800/60 pt-14 sm:pt-18 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-8 transition-colors">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-12 mb-12 sm:mb-16">
        {/* Col 1: Brand & App Download (Span 2) */}
        <div className="sm:col-span-2 space-y-6">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative h-10 w-10 rounded-xl overflow-hidden shadow-soft-sm border border-slate-200/60 dark:border-slate-800/60 bg-white dark:bg-slate-900 flex items-center justify-center p-1.5 shrink-0">
              <Image
                src="/images/logo.png"
                alt="Nashik Travel Guide Logo"
                width={32}
                height={32}
                className="object-contain"
              />
            </div>
            <div>
              <span className="font-extrabold text-lg tracking-tight text-slate-900 dark:text-white">
                Nashik<span className="text-brand-blue dark:text-brand-400">Guide</span>
              </span>
              <span className="block text-[10px] uppercase font-bold tracking-widest text-slate-500 dark:text-slate-400">
                Official Companion App
              </span>
            </div>
          </Link>

          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm">
            The premier Android travel guide for Nashik, Maharashtra. Explore verified attractions, spiritual circuits, vineyard trails, and offline travel maps.
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

          <div className="p-4 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200/60 dark:border-slate-800/60 max-w-sm shadow-soft-sm">
            <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-sm mb-2">
              <UserCheck className="w-4 h-4 text-brand-blue shrink-0" />
              <span>In-App Account & Registration</span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Account creation and Google Sign-In are integrated natively in the Android app. Guest mode is also fully supported with offline Hive storage.
            </p>
          </div>
        </div>

        {/* Col 2: Navigation Links */}
        <div>
          <h4 className="font-bold text-xs uppercase tracking-widest text-slate-900 dark:text-white mb-5">
            Navigation
          </h4>
          <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
            <li>
              <Link href="/#about" className="hover:text-brand-blue transition-colors block">
                Overview
              </Link>
            </li>
            <li>
              <Link href="/#features" className="hover:text-brand-blue transition-colors block">
                App Features
              </Link>
            </li>
            <li>
              <Link href="/trip-planner" className="hover:text-brand-blue transition-colors font-semibold text-brand-blue dark:text-brand-400 block">
                AI Trip Planner
              </Link>
            </li>
            <li>
              <Link href="/#categories" className="hover:text-brand-blue transition-colors block">
                Categories
              </Link>
            </li>
            <li>
              <Link href="/#gallery" className="hover:text-brand-blue transition-colors block">
                Screenshots
              </Link>
            </li>
            <li>
              <Link href="/#reviews" className="hover:text-brand-blue transition-colors block">
                Reviews
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 3: Legal & Trust */}
        <div>
          <h4 className="font-bold text-xs uppercase tracking-widest text-slate-900 dark:text-white mb-5">
            Legal & Trust
          </h4>
          <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
            <li>
              <Link href="/privacy-policy" className="hover:text-brand-blue transition-colors font-semibold text-slate-900 dark:text-white block">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/delete-account" className="hover:text-rose-600 dark:hover:text-rose-400 transition-colors font-semibold text-rose-600 dark:text-rose-400 flex items-center gap-2">
                <Trash2 className="w-4 h-4" />
                <span>Delete Account</span>
              </Link>
            </li>
            <li>
              <Link href="/terms-of-use" className="hover:text-brand-blue transition-colors block">
                Terms of Use
              </Link>
            </li>
            <li>
              <Link href="/data-safety" className="hover:text-brand-blue transition-colors block">
                Data Safety
              </Link>
            </li>
            <li>
              <Link href="/cookies-policy" className="hover:text-brand-blue transition-colors block">
                Cookies Policy
              </Link>
            </li>
            <li>
              <Link href="/disclaimer" className="hover:text-brand-blue transition-colors block">
                Disclaimer
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 4: Support & Contact */}
        <div>
          <h4 className="font-bold text-xs uppercase tracking-widest text-slate-900 dark:text-white mb-5">
            Helpdesk
          </h4>
          <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
            <li>
              <Link href="/contact" className="hover:text-brand-blue transition-colors flex items-center gap-2 font-semibold">
                <Mail className="w-4 h-4 text-brand-blue shrink-0" />
                <span>Contact Support</span>
              </Link>
            </li>
            <li>
              <Link href="/#faq" className="hover:text-brand-blue transition-colors block">
                FAQ Center
              </Link>
            </li>
            <li>
              <a
                href="https://play.google.com/store/apps/details?id=com.nashikexplore.app"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-blue transition-colors flex items-center gap-1.5"
              >
                <span>Google Play Store</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              </a>
            </li>
            <li className="pt-3">
              <span className="font-bold block text-slate-900 dark:text-white mb-1">Office Location</span>
              <span className="text-xs leading-relaxed">College Road, Nashik, Maharashtra 422005</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto pt-8 sm:pt-10 border-t border-slate-200/60 dark:border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <span className="text-sm text-slate-500 dark:text-slate-400">
          &copy; {new Date().getFullYear()} Nashik Travel Guide. All rights reserved.
        </span>

        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm text-slate-500 dark:text-slate-400">
          <Link href="/privacy-policy" className="hover:text-brand-blue transition-colors">
            Privacy Policy
          </Link>
          <span>•</span>
          <Link href="/delete-account" className="hover:text-rose-600 dark:hover:text-rose-400 transition-colors">
            Delete Account
          </Link>
          <span>•</span>
          <Link href="/terms-of-use" className="hover:text-brand-blue transition-colors">
            Terms of Use
          </Link>
          <span>•</span>
          <Link href="/data-safety" className="hover:text-brand-blue transition-colors">
            Data Safety
          </Link>
          <span>•</span>
          <Link href="/sitemap.xml" className="hover:text-brand-blue transition-colors">
            Sitemap
          </Link>
        </div>
      </div>
    </footer>
  );
}
