import React from 'react';
import Link from 'next/link';

export function TrivioNav() {
  return (
    <header className="w-full bg-paper px-4 sm:px-8 py-4 sticky top-0 z-40">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-deep-violet flex items-center gap-2"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-signal-lime border border-deep-violet" />
          <span>trivio</span>
        </Link>

        <nav aria-label="Secondary Navigation" className="hidden sm:flex items-center gap-6 text-sm font-medium text-on-surface-variant">
          <Link href="/" className="hover:text-deep-violet transition-colors">
            Home
          </Link>
          <Link href="/#journey" className="hover:text-deep-violet transition-colors">
            Journey
          </Link>
          <Link href="/#places" className="hover:text-deep-violet transition-colors">
            Spots
          </Link>
          <Link href="/trip-planner" className="hover:text-deep-violet transition-colors">
            Trip Guide
          </Link>
          <Link href="/contact" className="hover:text-deep-violet transition-colors">
            Contact
          </Link>
        </nav>

        <a
          href="https://play.google.com/store/apps/details?id=com.nashikexplore.app"
          target="_blank"
          rel="noopener noreferrer"
          className="h-9 px-4 sm:px-5 rounded-full bg-deep-violet text-signal-lime text-xs sm:text-sm font-bold flex items-center justify-center transition-transform hover:scale-[1.02] active:scale-95"
        >
          Get the app
        </a>
      </div>
    </header>
  );
}
