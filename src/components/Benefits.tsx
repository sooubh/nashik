import React from 'react';
import Link from 'next/link';
import { Compass, Calendar, Bookmark, Check, ArrowRight } from 'lucide-react';

export function Benefits() {
  return (
    <section id="features" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="max-w-3xl mb-16 text-left">
        <span className="text-sm font-bold text-blue-600 dark:text-blue-400 block mb-3">
          Field-Tested Architecture
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight">
          Built for real road and trail conditions.
        </h2>
        <p className="text-slate-600 dark:text-slate-300 mt-4 text-base sm:text-lg leading-relaxed">
          Visiting ancient black-stone temples, rolling vineyard valleys, and Sahyadri cliff forts shouldn&apos;t require wrestling with slow feeds or unreliable mobile signals.
        </p>
      </div>

      {/* Asymmetric 3-Feature Editorial Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Benefit 1: Curated Spot Dossiers (7 cols) */}
        <div className="lg:col-span-7 p-8 sm:p-12 rounded-3xl bg-slate-100 dark:bg-slate-900/90 flex flex-col justify-between">
          <div>
            <div className="inline-flex p-3 rounded-2xl bg-blue-600 text-white mb-6">
              <Compass className="w-6 h-6" />
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Curated landmark dossiers with verified visiting guidance
            </h3>
            
            <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed mb-8">
              Every landmark includes essential field guidance: optimal visiting hours to beat queues, seasonal timing such as winter vineyard harvesting or monsoon waterfall surges, dress codes for sacred sanctums, and one-tap handoff to Google Maps for road navigation.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-white dark:bg-slate-800 text-xs font-semibold text-slate-800 dark:text-slate-200 flex items-start gap-2.5">
                <Check className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                <span>Categories for Vineyards, Forts, Temples and Nature</span>
              </div>
              <div className="p-4 rounded-2xl bg-white dark:bg-slate-800 text-xs font-semibold text-slate-800 dark:text-slate-200 flex items-start gap-2.5">
                <Check className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                <span>Verified entry fees, dress norms and parking notes</span>
              </div>
              <div className="p-4 rounded-2xl bg-white dark:bg-slate-800 text-xs font-semibold text-slate-800 dark:text-slate-200 flex items-start gap-2.5">
                <Check className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                <span>Direct coordinates link into Google Maps</span>
              </div>
              <div className="p-4 rounded-2xl bg-white dark:bg-slate-800 text-xs font-semibold text-slate-800 dark:text-slate-200 flex items-start gap-2.5">
                <Check className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                <span>Local Marathi landmarks and heritage context</span>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <a
              href="#places-preview"
              className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 dark:text-blue-400 transition-colors"
            >
              <span>Inspect real destinations</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Benefit 2: Multi-Day Trip Planner (5 cols) */}
        <div className="lg:col-span-5 p-8 sm:p-12 rounded-3xl bg-slate-100 dark:bg-slate-900/90 flex flex-col justify-between">
          <div>
            <div className="inline-flex p-3 rounded-2xl bg-amber-600 text-white mb-6">
              <Calendar className="w-6 h-6" />
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Itineraries tailored to your arrival station
            </h3>

            <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed mb-6">
              Whether you arrive at Nashik Road Railway Station, Ozar Airport, or Central Bus Stand, generate balanced schedules matched to your pace. Powered by Cloudflare Worker AI with a reliable deterministic offline heuristic fallback.
            </p>

            <div className="space-y-3">
              <div className="p-4 rounded-2xl bg-white dark:bg-slate-800 text-xs font-semibold text-slate-800 dark:text-slate-200 flex items-start gap-2">
                <Check className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                <span>Select Nashik Road Station, Airport, or CBS as departure hub</span>
              </div>
              <div className="p-4 rounded-2xl bg-white dark:bg-slate-800 text-xs font-semibold text-slate-800 dark:text-slate-200 flex items-start gap-2">
                <Check className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                <span>Morning, midday, and sunset grouped by proximity</span>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <a
              href="#trip-planner-demo"
              className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 dark:text-blue-400 transition-colors"
            >
              <span>Try interactive generator above</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Benefit 3: On-Device Saved Wishlist Boards (12 cols) */}
        <div className="lg:col-span-12 p-8 sm:p-12 rounded-3xl bg-slate-100 dark:bg-slate-900/90">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8">
              <div className="inline-flex p-3 rounded-2xl bg-emerald-600 text-white mb-4">
                <Bookmark className="w-6 h-6" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-3">
                Wishlist boards stored directly on your phone
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
                Cell reception in the rugged Sahyadri ranges or rural Gangapur backwaters can be unpredictable. NashikExplore saves your favorite spots and custom boards directly into your phone&apos;s local storage, ensuring your itinerary remains immediately accessible even when climbing Harihar Fort.
              </p>
            </div>

            <div className="md:col-span-4 p-6 rounded-2xl bg-white dark:bg-slate-800">
              <span className="text-xs font-bold text-slate-500 dark:text-slate-400 block mb-2">
                Zero Cloud Dependency
              </span>
              <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                No account is required to start browsing or saving spots. Your saved boards persist across app restarts without cloud latency.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
