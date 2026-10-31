import React from 'react';
import Image from 'next/image';
import { Smartphone, Check, MapPin, Calendar, Compass, Search } from 'lucide-react';

const screens = [
  {
    id: 'screen-discover',
    title: 'Explore & Category Directory',
    caption: 'Browse spots categorized by vineyards, hill forts, historic temples, and waterfalls with verified location pins.',
    src: '/images/home.png',
    tag: 'Home Feed',
  },
  {
    id: 'screen-search',
    title: 'Instant Search & Filter Bar',
    caption: 'Quickly find destinations by keyword, region, or travel category with instant zero-lag query responses.',
    src: '/images/explore.png',
    tag: 'Browse',
  },
  {
    id: 'screen-planner',
    title: 'Multi-Day Itinerary Planner',
    caption: 'Assemble customizable 1-day to 3-day travel plans from railway stations or airports with deterministic offline fallbacks.',
    src: '/images/ai-planner.png',
    tag: 'Trip Planner',
  },
  {
    id: 'screen-details',
    title: 'Detailed Place Dossier',
    caption: 'Inspect optimal visiting hours, historical background, traveler tips, and trigger one-tap Google Maps road navigation.',
    src: '/images/details.png',
    tag: 'Spot Guide',
  },
];

export function ScreenshotStrip() {
  return (
    <section id="screenshots" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-slate-200/80 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-20 text-left">
          <span className="text-xs font-bold text-blue-600 dark:text-blue-400 block mb-2">
            Material 3 interface
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white headline-editorial">
            Authentic screens from the Android application.
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mt-3 text-base sm:text-lg leading-relaxed">
            Clean, native Android architecture built for seamless navigation under bright outdoor sunlight on the trekking trail or relaxed evening dining in wine country.
          </p>
        </div>

        {/* 4-Screenshot Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {screens.map((screen) => (
            <div
              key={screen.id}
              className="editorial-card rounded-3xl p-4 flex flex-col justify-between group"
            >
              {/* Phone Aspect Container */}
              <div className="relative w-full aspect-[9/19] rounded-2xl overflow-hidden bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-inner">
                <Image
                  src={screen.src}
                  alt={`NashikExplore interface preview: ${screen.title}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>

              {/* Caption & Metadata */}
              <div className="mt-4 pt-2 text-left space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                    {screen.tag}
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">
                    Android 8.0+
                  </span>
                </div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-snug">
                  {screen.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {screen.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Architecture Notes */}
        <div className="mt-12 p-6 rounded-2xl bg-white dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="space-y-1">
            <span className="text-xs font-bold text-slate-900 dark:text-slate-200 block">
              Lightweight Installation
            </span>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Fast download size with responsive, native 60fps Flutter rendering and minimal battery drain during outdoor GPS usage.
            </p>
          </div>
          <div className="space-y-1">
            <span className="text-xs font-bold text-slate-900 dark:text-slate-200 block">
              Adaptive Day &amp; Night Modes
            </span>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              High-contrast solar readability for glaring mid-day fortress treks, and OLED-friendly dark palette for evening temple visits.
            </p>
          </div>
          <div className="space-y-1">
            <span className="text-xs font-bold text-slate-900 dark:text-slate-200 block">
              Direct Road Navigation
            </span>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Every spot coordinates pass directly into Google Maps for real-time traffic, voice-guided turns, and accurate ETA estimates.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
