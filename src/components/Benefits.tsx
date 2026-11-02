import React from 'react';
import Link from 'next/link';
import { Compass, Calendar, Bookmark, ArrowRight, Navigation } from 'lucide-react';

const benefits = [
  {
    icon: Compass,
    title: 'Curated destination dossiers',
    summary:
      'Essential visiting intelligence for every spot: optimal morning hours to beat temple queues, grape crush seasons, sanctum dress codes, and one-tap handoff to Google Maps for turn-by-turn road navigation.',
    tag: 'Verified Guidance',
    highlight: 'No crowd-sourced inaccuracies or missing guidelines.',
  },
  {
    icon: Calendar,
    title: 'Station-based itinerary builder',
    summary:
      'Select your arrival hub—Nashik Road Railway Station, Ozar Airport, or Central Bus Stand (CBS). Itineraries group morning, midday, and sunset destinations by geographic proximity so you never backtrack across town.',
    tag: 'Route Efficiency',
    highlight: 'Built around your actual arrival station.',
  },
  {
    icon: Bookmark,
    title: 'On-device offline wishlists',
    summary:
      'Cellular reception frequently drops when trekking through rural Sahyadri passes or traversing remote vineyard roads. Your saved boards and cached spot details remain accessible on your device.',
    tag: 'Field Reliability',
    highlight: 'Works reliably when cell towers fade.',
  },
];

export function Benefits() {
  return (
    <section id="features" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      {/* Section Header */}
      <div className="max-w-3xl mb-16 text-left">
        <span className="text-sm font-bold text-blue-600 dark:text-blue-400 block mb-3">
          Practical Travel Benefits
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight">
          Built for real road and trail conditions.
        </h2>
        <p className="text-slate-600 dark:text-slate-300 mt-4 text-base sm:text-lg leading-relaxed">
          Visiting ancient black-basalt shrines, rolling vineyard valleys, and Sahyadri cliff forts shouldn&apos;t require wrestling with slow feeds or unreliable mobile signals.
        </p>
      </div>

      {/* 3-Benefit Editorial Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {benefits.map((benefit, idx) => {
          const Icon = benefit.icon;
          return (
            <div
              key={idx}
              className="p-8 sm:p-10 rounded-3xl bg-slate-100 dark:bg-slate-900/90 flex flex-col justify-between"
            >
              <div>
                <div className="inline-flex p-3 rounded-2xl bg-blue-600 text-white mb-6">
                  <Icon className="w-5 h-5" />
                </div>

                <span className="text-xs font-bold text-slate-500 dark:text-slate-400 block mb-2">
                  {benefit.tag}
                </span>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4 leading-snug">
                  {benefit.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  {benefit.summary}
                </p>
              </div>

              <div className="pt-4 p-4 rounded-2xl bg-white dark:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300">
                {benefit.highlight}
              </div>
            </div>
          );
        })}
      </div>

      {/* Direct Play Store Link */}
      <div className="mt-14 p-8 rounded-3xl bg-slate-900 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <h4 className="text-lg font-bold text-white mb-1">
            Experience the full itinerary planner in the Android app
          </h4>
          <p className="text-xs sm:text-sm text-slate-400">
            Generate customized 1-day to 3-day travel itineraries based on your pace and arrival hub.
          </p>
        </div>
        <a
          href="https://play.google.com/store/apps/details?id=com.nashikexplore.app"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition-colors shrink-0 min-h-[46px]"
        >
          <span>Get Free App</span>
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
