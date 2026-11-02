import React from 'react';
import Link from 'next/link';
import { Compass, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 flex-1 flex flex-col items-center justify-center text-center max-w-3xl mx-auto min-h-[60vh]">
      <div className="p-6 px-10 bg-slate-100 dark:bg-slate-900 rounded-3xl text-blue-600 dark:text-blue-400 font-extrabold text-6xl sm:text-7xl mb-8 inline-block">
        404
      </div>
      <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6">
        Wrong Turn on the Road to Trimbakeshwar
      </h1>
      <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
        It looks like you took an uncharted trail. The page you are looking for does not exist in our Nashik travel directory, or has moved to new coordinates.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
        <Link
          href="/"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-white bg-blue-600 hover:bg-blue-700 transition-colors font-bold text-sm min-h-[46px]"
        >
          <Home className="w-4 h-4" />
          <span>Return Home</span>
        </Link>
        <Link
          href="/trip-planner"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 font-bold text-sm transition-colors min-h-[46px]"
        >
          <Compass className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          <span>Trip Planning Guide</span>
        </Link>
      </div>
    </div>
  );
}
