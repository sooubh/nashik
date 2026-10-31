'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass, MapPin, Sparkles, Calendar, Layers, ShieldCheck } from 'lucide-react';

const heroScreenshots = [
  {
    id: 'home',
    title: 'Explore Hub',
    subtitle: 'Categorized spots & local highlights',
    src: '/images/home.png',
  },
  {
    id: 'explore',
    title: 'Search & Filters',
    subtitle: 'Filter by heritage, wine, treks & area',
    src: '/images/explore.png',
  },
  {
    id: 'planner',
    title: 'Multi-Day Planner',
    subtitle: 'Station-to-sight daily itineraries',
    src: '/images/ai-planner.png',
  },
  {
    id: 'details',
    title: 'Spot Guide',
    subtitle: 'Visitor timings, tips & Google Maps',
    src: '/images/details.png',
  },
  {
    id: 'saved',
    title: 'Saved Boards',
    subtitle: 'On-device wishlists for spotty reception',
    src: '/images/saved.png',
  },
];

export function Hero() {
  const [activeScreenIndex, setActiveScreenIndex] = useState(0);

  return (
    <section className="relative pt-28 sm:pt-36 lg:pt-40 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden bg-topo-subtle">
      {/* Editorial Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* Left: Purposeful Narrative & Direct Actions */}
        <div className="lg:col-span-7 text-left space-y-6 sm:space-y-8">
          
          {/* Authentic Context Pill */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 shrink-0" />
            <span>Dedicated travel companion for Nashik, Maharashtra</span>
          </div>

          {/* Headline - Clean, Authoritative, Sentence Case, No Gimmick Words */}
          <h1 className="text-3xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-slate-900 dark:text-white headline-editorial">
            Your field guide to Nashik&apos;s vineyards, sacred ghats, and mountain forts.
          </h1>

          {/* Body Copy - Truthful, Grounded, Clear */}
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
            Nashik is India&apos;s wine capital, home to the sacred Godavari cradle at Trimbakeshwar, and the gateway to legendary Sahyadri treks. NashikExplore gives you curated place dossiers, customizable transit-hub itineraries, and reliable on-device wishlists.
          </p>

          {/* Conversion Actions */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
            <a
              href="https://play.google.com/store/apps/details?id=com.nashikexplore.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl text-white bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 transition-colors font-bold text-sm shadow-sm active:scale-[0.98] min-h-[48px]"
            >
              <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.609 1.814L13.793 12 3.61 22.186c-.352-.375-.568-.89-.568-1.46V3.274c0-.57.216-1.085.568-1.46zm11.238 11.24L17.7 15.91l-11.8 6.772 8.947-9.628zm0-2.108L5.9 1.318 17.7 8.09l-2.853 2.856zm1.054 1.054l3.197-1.838c.846-.486.846-1.282 0-1.768l-3.197-1.838-2.115 2.115 2.115 2.329z" />
              </svg>
              <div className="text-left">
                <div className="text-[10px] font-medium opacity-90 leading-none">Download on</div>
                <div className="text-sm font-extrabold leading-none mt-1">Google Play</div>
              </div>
            </a>

            <a
              href="#places-preview"
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 font-semibold text-sm transition-colors active:scale-[0.98] min-h-[48px]"
            >
              <Compass className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
              <span>Explore real places</span>
            </a>
          </div>

          {/* Genuine App Truths - No Invented Counters */}
          <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
              Free Android install
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
              Direct Google Maps handoff
            </span>
            <span className="flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
              Material 3 interface
            </span>
          </div>
        </div>

        {/* Right: Tactile Flagship Device Preview */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center relative select-none w-full">
          
          {/* Physical Phone Frame */}
          <div className="device-frame w-full max-w-[280px] sm:max-w-[310px] lg:max-w-[325px]">
            {/* Phone Screen Container */}
            <div
              id="hero-screen-panel"
              role="tabpanel"
              aria-label={`Preview of ${heroScreenshots[activeScreenIndex].title}`}
              className="device-screen-container"
            >
              {/* Punch hole camera */}
              <div className="device-camera" />

              {/* Glass reflection glare */}
              <div className="device-screen-glare" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={heroScreenshots[activeScreenIndex].id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={heroScreenshots[activeScreenIndex].src}
                    alt={`NashikExplore mobile screen showing ${heroScreenshots[activeScreenIndex].title}`}
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 640px) 280px, (max-width: 1024px) 310px, 325px"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Interactive Screen Selector Tabs */}
          <div className="w-full max-w-md mt-6">
            <div
              role="tablist"
              aria-label="App preview screens"
              className="flex items-center justify-center flex-wrap gap-1.5 p-1 rounded-2xl bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-sm"
            >
              {heroScreenshots.map((screen, idx) => {
                const isActive = activeScreenIndex === idx;
                return (
                  <button
                    key={screen.id}
                    id={`hero-tab-${screen.id}`}
                    role="tab"
                    aria-selected={isActive}
                    aria-controls="hero-screen-panel"
                    onClick={() => setActiveScreenIndex(idx)}
                    type="button"
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all min-h-[40px] flex items-center justify-center cursor-pointer ${
                      isActive
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    {screen.title}
                  </button>
                );
              })}
            </div>
            
            {/* Context Subtitle for Selected Screen */}
            <p className="text-center text-xs text-slate-500 dark:text-slate-400 mt-2.5">
              {heroScreenshots[activeScreenIndex].subtitle}
            </p>
          </div>

        </div>
      </div>

      {/* Regional Orientation Strip */}
      <div className="mt-14 sm:mt-20 pt-8 border-t border-slate-200/80 dark:border-slate-800/80">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
          <div className="p-3.5 rounded-xl bg-white/60 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-800/60">
            <span className="block text-xs font-bold text-slate-900 dark:text-slate-200">Wine Country</span>
            <span className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 block">Gangapur Dam, Sula, York &amp; Soma</span>
          </div>
          <div className="p-3.5 rounded-xl bg-white/60 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-800/60">
            <span className="block text-xs font-bold text-slate-900 dark:text-slate-200">Sacred Heritage</span>
            <span className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 block">Trimbakeshwar, Panchavati &amp; Ramkund</span>
          </div>
          <div className="p-3.5 rounded-xl bg-white/60 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-800/60">
            <span className="block text-xs font-bold text-slate-900 dark:text-slate-200">Sahyadri Treks</span>
            <span className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 block">Harihar, Anjaneri &amp; Brahmagiri</span>
          </div>
          <div className="p-3.5 rounded-xl bg-white/60 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-800/60">
            <span className="block text-xs font-bold text-slate-900 dark:text-slate-200">Rock-Cut History</span>
            <span className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 block">Pandavleni Caves &amp; Trirashmi Hill</span>
          </div>
        </div>
      </div>
    </section>
  );
}
