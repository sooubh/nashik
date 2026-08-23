import React from 'react';
import Link from 'next/link';
import { Compass, ArrowLeft, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="pt-36 pb-24 px-4 sm:px-6 md:px-12 flex-1 flex flex-col items-center justify-center text-center max-w-xl mx-auto">
      <div className="p-4 bg-brand-50 dark:bg-brand-950/60 rounded-3xl border border-brand-200/80 dark:border-brand-800/80 text-brand-blue dark:text-brand-light font-black text-6xl mb-6 shadow-sm">
        404
      </div>
      <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
        Wrong Turn on the Road to Trimbakeshwar
      </h1>
      <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed mb-8">
        It looks like you took an uncharted trail. The page you are looking for does not exist in our Nashik travel directory, or has moved to new coordinates.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl text-white bg-brand-blue hover:bg-brand-secondary transition-all font-bold text-sm shadow-md shadow-brand-blue/20"
        >
          <Home className="w-4 h-4" />
          <span>Return Home</span>
        </Link>
        <Link
          href="/trip-planner"
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-brand-blue font-bold text-sm transition-all"
        >
          <Compass className="w-4 h-4 text-brand-blue dark:text-brand-light" />
          <span>Try AI Planner</span>
        </Link>
      </div>
    </div>
  );
}
