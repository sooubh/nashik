import React from 'react';
import Image from 'next/image';
import { Navigation, BookmarkCheck, Smartphone } from 'lucide-react';

const screens = [
  {
    id: 'screen-discover',
    title: 'Explore & Category Directory',
    caption: 'Browse curated destinations categorized by vineyards, Sahyadri forts, historic temples, and waterfalls.',
    src: '/images/home.png',
    tag: 'Home Feed',
  },
  {
    id: 'screen-search',
    title: 'Instant Search & Region Filters',
    caption: 'Quickly locate landmarks by area, travel style, or distance from your arrival transit station.',
    src: '/images/explore.png',
    tag: 'Browse',
  },
  {
    id: 'screen-planner',
    title: 'Station-Based Trip Planner',
    caption: 'Assemble customized multi-day travel plans from Nashik Road Railway Station, Ozar Airport, or CBS.',
    src: '/images/ai-planner.png',
    tag: 'Trip Planner',
  },
  {
    id: 'screen-details',
    title: 'Place Dossier & Visitor Intel',
    caption: 'Check visiting hours, temple dress codes, parking notes, and launch Google Maps road navigation.',
    src: '/images/details.png',
    tag: 'Spot Guide',
  },
];

export function ScreenshotStrip() {
  return (
    <section id="screenshots" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      {/* Section Header */}
      <div className="max-w-3xl mb-16 text-left">
        <span className="text-sm font-bold text-blue-600 dark:text-blue-400 block mb-3">
          Native Android Interface
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight">
          Authentic application screens.
        </h2>
        <p className="text-slate-600 dark:text-slate-300 mt-4 text-base sm:text-lg leading-relaxed">
          Clean, legible interface built for quick navigation under bright Sahyadri sunlight on the trail or relaxed evening dining at vineyard tasting decks.
        </p>
      </div>

      {/* 4-Screenshot Grid */}
      <div data-ui="true" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {screens.map((screen) => (
          <div
            key={screen.id}
            className="rounded-3xl bg-slate-900 text-white p-4 flex flex-col justify-between"
          >
            {/* Phone Screen Container */}
            <div className="relative w-full aspect-[9/19.5] rounded-2xl overflow-hidden bg-black">
              <Image
                src={screen.src}
                alt={`NashikExplore mobile screen preview: ${screen.title}`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
            </div>

            {/* Caption & Metadata */}
            <div className="mt-5 p-2 text-left space-y-2">
              <span className="text-xs font-bold text-blue-400 block">
                {screen.tag}
              </span>
              <h3 className="text-base font-bold text-white leading-snug">
                {screen.title}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {screen.caption}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Practical Traveler Assurances */}
      <div className="mt-12 p-8 rounded-3xl bg-slate-100 dark:bg-slate-900/80 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
            <Navigation className="w-4 h-4 shrink-0" />
            <span className="text-sm font-bold text-slate-900 dark:text-white">
              Direct Road Directions
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            One-tap handoff to Google Maps for turn-by-turn road navigation and live transit conditions.
          </p>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
            <BookmarkCheck className="w-4 h-4 shrink-0" />
            <span className="text-sm font-bold text-slate-900 dark:text-white">
              Offline Wishlists
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Saved destinations and cached dossier details remain accessible when phone reception is limited.
          </p>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
            <Smartphone className="w-4 h-4 shrink-0" />
            <span className="text-sm font-bold text-slate-900 dark:text-white">
              Free to Download
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Available on Google Play Store for Android 8.0+ devices with no mandatory signup.
          </p>
        </div>
      </div>
    </section>
  );
}
