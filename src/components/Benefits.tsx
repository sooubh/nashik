import React from 'react';
import Link from 'next/link';
import { Compass, Calendar, Bookmark, MapPin, Check, ArrowRight, ShieldCheck } from 'lucide-react';

export function Benefits() {
  return (
    <section id="features" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header - Editorial, clear, no screaming labels */}
      <div className="max-w-3xl mb-14 sm:mb-20 text-left">
        <span className="text-xs font-bold text-blue-600 dark:text-blue-400 block mb-2">
          Purpose-built features
        </span>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white headline-editorial">
          Everything you need for a smooth trip across Nashik.
        </h2>
        <p className="text-slate-600 dark:text-slate-300 mt-3 text-base sm:text-lg leading-relaxed">
          Designed to take the friction out of exploring Maharashtra&apos;s heritage center, wine estates, and mountain valleys without bloated feeds or algorithmic distractions.
        </p>
      </div>

      {/* Asymmetric 3-Feature Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Benefit 1: Curated Spot Dossiers (Large Feature Card - 7 cols) */}
        <div className="lg:col-span-7 editorial-card p-6 sm:p-10 rounded-3xl flex flex-col justify-between">
          <div>
            <div className="inline-flex p-3 rounded-2xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 mb-6">
              <Compass className="w-6 h-6" />
            </div>
            
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3">
              Curated spot dossiers with practical visitor intelligence
            </h3>
            
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
              Every landmark includes essential field guidance: optimal visiting hours to beat crowds, seasonal timing (such as winter vineyard harvesting or monsoon waterfall surges), dress codes for sacred sanctums, and one-tap handoff to Google Maps for turn-by-turn road navigation.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
              <div className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300 font-medium">
                <Check className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                <span>Categories for Vineyards, Forts, Temples &amp; Nature</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300 font-medium">
                <Check className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                <span>Verified entry fees, dress norms &amp; parking tips</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300 font-medium">
                <Check className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                <span>Direct coordinates link into Google Maps</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300 font-medium">
                <Check className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                <span>Local Marathi landmarks and heritage context</span>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-4">
            <a
              href="#places-preview"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 dark:text-blue-400 transition-colors"
            >
              <span>Preview real destinations below</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Benefit 2: Multi-Day Trip Planner (5 cols) */}
        <div className="lg:col-span-5 editorial-card p-6 sm:p-10 rounded-3xl flex flex-col justify-between">
          <div>
            <div className="inline-flex p-3 rounded-2xl bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 mb-6">
              <Calendar className="w-6 h-6" />
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3">
              Multi-day itineraries customized to your transit hub
            </h3>

            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
              Whether you arrive at Nashik Road Railway Station, Ozar Airport, or the Central Bus Stand, generate balanced 1 to 3-day schedules matched to your pace (relaxed vs active). Powered by Cloudflare Worker AI with a reliable deterministic offline heuristic fallback.
            </p>

            <ul className="space-y-3 pt-4 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                <span>Select Nashik Road Station, Airport, or CBS as departure point</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                <span>Morning, midday, and sunset grouped by proximity</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                <span>Deterministic offline generator when cell reception drops</span>
              </li>
            </ul>
          </div>

          <div className="mt-8 pt-4">
            <Link
              href="/trip-planner"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 dark:text-blue-400 transition-colors"
            >
              <span>Read how the planner works</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Benefit 3: On-Device Saved Wishlist Boards (Full Width Span - 12 cols) */}
        <div className="lg:col-span-12 editorial-card p-6 sm:p-10 rounded-3xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-8">
              <div className="inline-flex p-3 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 mb-4">
                <Bookmark className="w-6 h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2">
                Wishlist boards stored directly on your phone
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                Cell reception in the rugged Sahyadri ranges or rural Gangapur backwaters can be unpredictable. NashikExplore saves your favorite spots and custom boards directly into your phone&apos;s local storage, ensuring your itinerary remains immediately accessible even when climbing Harihar Fort.
              </p>
            </div>

            <div className="md:col-span-4 p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
              <span className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Built For Field Conditions
              </span>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                No account is required to start browsing or saving spots. Your saved boards persist across app restarts without cloud latency.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
