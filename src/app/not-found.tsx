import React from 'react';
import Link from 'next/link';
import { Compass, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 flex-1 flex flex-col items-center justify-center text-center max-w-3xl mx-auto min-h-[60vh]">
      <div className="p-6 px-10 bg-brand-50 dark:bg-slate-900/80 rounded-2xl border border-brand-100 dark:border-slate-800/60 text-brand-blue dark:text-brand-400 font-extrabold text-6xl sm:text-7xl mb-8 shadow-card dark:shadow-card-dark inline-block">
        404
      </div>
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6">
        Wrong Turn on the Road to Trimbakeshwar
      </h1>
      <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
        It looks like you took an uncharted trail. The page you are looking for does not exist in our Nashik travel directory, or has moved to new coordinates.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
        <Link
          href="/"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-white bg-brand-blue hover:bg-brand-700 transition-all font-bold text-sm shadow-glow-sm active:scale-[0.97] min-h-[44px]"
        >
          <Home className="w-4 h-4" />
          <span>Return Home</span>
        </Link>
        <Link
          href="/trip-planner"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-brand-300 dark:hover:border-brand-700 font-bold text-sm transition-all shadow-soft-sm min-h-[44px]"
        >
          <Compass className="w-4 h-4 text-brand-blue dark:text-brand-400" />
          <span>Try AI Planner</span>
        </Link>
      </div>
    </div>
  );
}
