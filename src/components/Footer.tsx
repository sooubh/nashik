import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Download, Mail, Trash2, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-100 dark:bg-slate-950 pt-20 pb-16 px-4 sm:px-6 lg:px-8 transition-colors">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-14 mb-16">
        
        {/* Col 1: Brand & App Download */}
        <div className="space-y-5 text-left">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative h-10 w-10 rounded-2xl overflow-hidden bg-white dark:bg-slate-900 flex items-center justify-center p-1.5 shrink-0">
              <Image
                src="/images/logo.png"
                alt="NashikExplore Logo"
                width={32}
                height={32}
                className="object-contain"
              />
            </div>
            <div>
              <span className="font-extrabold text-lg tracking-tight text-slate-900 dark:text-white block">
                Nashik<span className="text-blue-600 dark:text-blue-400">Explore</span>
              </span>
              <span className="block text-[11px] font-bold text-slate-500 dark:text-slate-400">
                Android Travel Guide
              </span>
            </div>
          </Link>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Curated field guide for discovering wine estates, historic temples, Sahyadri forts, and seasonal waterfalls across Nashik, Maharashtra.
          </p>

          <div>
            <a
              href="https://play.google.com/store/apps/details?id=com.nashikexplore.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 text-white font-bold text-xs transition-colors"
            >
              <Download className="w-4 h-4 text-blue-400" />
              <span>Get on Google Play</span>
            </a>
          </div>
        </div>

        {/* Col 2: Navigation Links */}
        <div className="text-left">
          <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-4">
            Navigation
          </h4>
          <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium">
            <li>
              <Link href="/#trip-planner-demo" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-0.5 block">
                Planner Simulator
              </Link>
            </li>
            <li>
              <Link href="/#features" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-0.5 block">
                App Capabilities
              </Link>
            </li>
            <li>
              <Link href="/#places-preview" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-0.5 block">
                Nashik Landmarks
              </Link>
            </li>
            <li>
              <Link href="/#screenshots" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-0.5 block">
                Screen Interface
              </Link>
            </li>
            <li>
              <Link href="/#faq" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-0.5 block">
                Traveler FAQ
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-0.5 block">
                Support &amp; Feedback
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 3: Legal & Policy */}
        <div className="text-left">
          <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-4">
            Legal &amp; Compliance
          </h4>
          <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium">
            <li>
              <Link href="/privacy-policy" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-0.5 block font-semibold text-slate-900 dark:text-white">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/delete-account" className="hover:text-rose-600 dark:hover:text-rose-400 transition-colors font-semibold text-rose-600 dark:text-rose-400 flex items-center gap-1.5 py-0.5">
                <Trash2 className="w-3.5 h-3.5 shrink-0" />
                <span>Delete Account Request</span>
              </Link>
            </li>
            <li>
              <Link href="/terms-of-use" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-0.5 block">
                Terms of Use
              </Link>
            </li>
            <li>
              <Link href="/data-safety" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-0.5 block">
                Data Safety Disclosures
              </Link>
            </li>
            <li>
              <Link href="/cookies-policy" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-0.5 block">
                Cookies Policy
              </Link>
            </li>
            <li>
              <Link href="/disclaimer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-0.5 block">
                Travel &amp; Trekking Disclaimer
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 4: Support Channel */}
        <div className="text-left space-y-4">
          <h4 className="font-bold text-sm text-slate-900 dark:text-white">
            Support Channel
          </h4>
          
          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
              <Mail className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>Official Inbox</span>
            </div>
            <a
              href="mailto:support@nashikexplore.com"
              className="text-xs text-blue-600 dark:text-blue-400 hover:underline block truncate font-bold"
            >
              support@nashikexplore.com
            </a>
            <p className="text-xs text-slate-500 leading-relaxed">
              Monitored inbox for spot inaccuracies, developer feedback, and account requests.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
            <MapPin className="w-4 h-4 shrink-0 text-slate-400" />
            <span>Nashik, Maharashtra, India</span>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400 font-medium">
        <p>© {new Date().getFullYear()} NashikExplore. All rights reserved.</p>
        <p className="text-center sm:text-right">
          Authentic Android Travel Companion • Zero placeholder metrics or randomized data
        </p>
      </div>
    </footer>
  );
}
