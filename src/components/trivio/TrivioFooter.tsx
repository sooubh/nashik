import React from 'react';
import Link from 'next/link';

export function TrivioFooter() {
  return (
    <footer className="w-full bg-paper px-6 sm:px-10 lg:px-16 py-8" id="contact">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-on-surface-variant">
        <div className="flex items-center gap-2">
          <Link href="/" className="font-bold text-base tracking-tight text-deep-violet flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-deep-violet" />
            <span>trivio</span>
          </Link>
          <span className="text-[#968fa3]">·</span>
          <span>Places, events and people</span>
        </div>

        <nav aria-label="Footer links" className="flex items-center gap-5 font-medium">
          <Link className="hover:text-deep-violet transition-colors" href="/trip-planner">
            About
          </Link>
          <Link className="hover:text-deep-violet transition-colors" href="/privacy-policy">
            Privacy
          </Link>
          <Link className="hover:text-deep-violet transition-colors" href="/terms-of-use">
            Terms
          </Link>
          <Link className="hover:text-deep-violet transition-colors" href="/contact">
            Contact
          </Link>
        </nav>

        <div className="text-[#7b7582]">
          © 2026 Trivio · Made in Nashik
        </div>
      </div>
    </footer>
  );
}
