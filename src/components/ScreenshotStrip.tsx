import React from 'react';
import Image from 'next/image';

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
    <section id="screenshots" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="max-w-3xl mb-16 text-left">
        <span className="text-sm font-bold text-blue-600 dark:text-blue-400 block mb-3">
          Material 3 Architecture
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight">
          Authentic Android application screens.
        </h2>
        <p className="text-slate-600 dark:text-slate-300 mt-4 text-base sm:text-lg leading-relaxed">
          Clean, native Android architecture built for rapid navigation under bright outdoor sunlight on the trekking trail or relaxed evening dining in wine country.
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
                alt={`NashikExplore interface preview: ${screen.title}`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
            </div>

            {/* Caption & Metadata */}
            <div className="mt-5 p-2 text-left space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-blue-400">
                  {screen.tag}
                </span>
                <span className="text-xs text-slate-400 font-semibold">
                  Android 8.0+
                </span>
              </div>
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

      {/* Technical Performance Notes */}
      <div className="mt-12 p-8 rounded-3xl bg-slate-100 dark:bg-slate-900/80 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
        <div className="space-y-2">
          <span className="text-sm font-bold text-slate-900 dark:text-white block">
            Lightweight Download
          </span>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Fast installation footprint with fluid Flutter rendering and zero background telemetry drain while navigating.
          </p>
        </div>
        <div className="space-y-2">
          <span className="text-sm font-bold text-slate-900 dark:text-white block">
            Solar Contrast Modes
          </span>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            High-contrast outdoor visibility for glaring midday fortress treks, and OLED-optimized dark theme for evening temple walks.
          </p>
        </div>
        <div className="space-y-2">
          <span className="text-sm font-bold text-slate-900 dark:text-white block">
            Direct Road Navigation
          </span>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Destination coordinates hand off into Google Maps for real-time traffic updates and voice-guided turns.
          </p>
        </div>
      </div>
    </section>
  );
}
