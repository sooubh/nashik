'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Navigation, Calendar, Bookmark, ShieldCheck, Wine, Mountain } from 'lucide-react';

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
    <section className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      
      {/* Hero Header & Value Proposition */}
      <div className="max-w-4xl mx-auto text-center space-y-6 mb-12 sm:mb-16">
        
        {/* Context Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-bold">
          <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 shrink-0" />
          <span>Field Companion for Nashik, Maharashtra</span>
        </div>

        {/* Command Headline - Under 2 lines at all widths */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white leading-[1.12] tracking-tight">
          Nashik&apos;s vineyards, sacred ghats, and mountain forts in your pocket.
        </h1>

        {/* Subtitle - Plain, truthful, what it is and what it does */}
        <p className="text-slate-600 dark:text-slate-300 text-base sm:text-xl leading-relaxed max-w-2xl mx-auto">
          Free Android guide for exploring Maharashtra&apos;s wine country and Western Ghats. Verified spot dossiers, station-based itineraries, and offline wishlists.
        </p>

        {/* Primary Call to Action */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <a
            href="https://play.google.com/store/apps/details?id=com.nashikexplore.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-white bg-blue-600 hover:bg-blue-700 transition-colors font-bold text-sm min-h-[52px] active:scale-[0.98]"
          >
            <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3.609 1.814L13.793 12 3.61 22.186c-.352-.375-.568-.89-.568-1.46V3.274c0-.57.216-1.085.568-1.46zm11.238 11.24L17.7 15.91l-11.8 6.772 8.947-9.628zm0-2.108L5.9 1.318 17.7 8.09l-2.853 2.856zm1.054 1.054l3.197-1.838c.846-.486.846-1.282 0-1.768l-3.197-1.838-2.115 2.115 2.115 2.329z" />
            </svg>
            <div className="text-left">
              <div className="text-[10px] font-medium opacity-90 leading-none">Free Download on</div>
              <div className="text-sm font-extrabold leading-none mt-1">Google Play Store</div>
            </div>
          </a>

          <a
            href="#trip-planner-demo"
            className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 font-bold text-sm transition-colors min-h-[52px]"
          >
            <Calendar className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
            <span>Try Trip Planner Demo</span>
          </a>
        </div>

        {/* Key Product Facts */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-500 dark:text-slate-400 pt-2">
          <span className="flex items-center gap-1.5 font-medium">
            <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
            Android 8.0 or newer
          </span>
          <span className="flex items-center gap-1.5 font-medium">
            <Bookmark className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
            Offline saved places
          </span>
          <span className="flex items-center gap-1.5 font-medium">
            <Navigation className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
            Direct Google Maps navigation
          </span>
        </div>

      </div>

      {/* Hero Showcase Stage */}
      <div data-ui="true" className="relative max-w-4xl mx-auto flex flex-col items-center justify-center mt-6">
        
        {/* Floating Context Callout 1 (Top Left) */}
        <div className="hidden lg:flex absolute -left-12 top-16 p-4 rounded-2xl bg-white dark:bg-slate-800 max-w-xs text-left z-20">
          <div className="p-2 rounded-xl bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 mr-3 shrink-0">
            <MapPin className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-bold text-slate-900 dark:text-white block">Trimbakeshwar Shiva Temple</span>
            <span className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 block">36 km west • Sacred Jyotirlinga</span>
          </div>
        </div>

        {/* Floating Context Callout 2 (Top Right) */}
        <div className="hidden lg:flex absolute -right-12 top-24 p-4 rounded-2xl bg-white dark:bg-slate-800 max-w-xs text-left z-20">
          <div className="p-2 rounded-xl bg-amber-50 dark:bg-amber-950 text-amber-700 dark:text-amber-400 mr-3 shrink-0">
            <Wine className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-bold text-slate-900 dark:text-white block">Sula &amp; York Vineyards</span>
            <span className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 block">Gangapur Dam Basin • Cellar Tours</span>
          </div>
        </div>

        {/* Floating Context Callout 3 (Bottom Left) */}
        <div className="hidden lg:flex absolute -left-10 bottom-24 p-4 rounded-2xl bg-white dark:bg-slate-800 max-w-xs text-left z-20">
          <div className="p-2 rounded-xl bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 mr-3 shrink-0">
            <Mountain className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-bold text-slate-900 dark:text-white block">Harihar Fort (Harishgad)</span>
            <span className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 block">80° Rock-Cut Steps • 42 km</span>
          </div>
        </div>

        {/* Central Physical Phone Chassis */}
        <div className="relative w-full max-w-[280px] sm:max-w-[320px] rounded-[44px] bg-slate-950 p-3.5 z-10">
          
          {/* Inner Phone Screen Container */}
          <div
            id="hero-screen-panel"
            role="tabpanel"
            aria-label={`Preview of ${heroScreenshots[activeScreenIndex].title}`}
            className="relative rounded-[32px] overflow-hidden bg-black aspect-[9/19.5]"
          >
            {/* Punch Hole Camera */}
            <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-black z-30" />

            {/* Screen Content Transition */}
            <AnimatePresence mode="wait">
              <motion.div
                key={heroScreenshots[activeScreenIndex].id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="relative w-full h-full"
              >
                <Image
                  src={heroScreenshots[activeScreenIndex].src}
                  alt={`NashikExplore mobile screen showing ${heroScreenshots[activeScreenIndex].title}`}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 640px) 280px, 320px"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* High-End Screen Switcher Dock */}
        <div className="w-full max-w-lg mt-8 z-20">
          <div
            role="tablist"
            aria-label="App preview screens"
            className="flex items-center justify-center flex-wrap gap-2 p-2 rounded-2xl bg-white dark:bg-slate-900 mx-auto"
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
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-colors min-h-[40px] cursor-pointer ${
                    isActive
                      ? 'bg-blue-600 text-white'
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  {screen.title}
                </button>
              );
            })}
          </div>

          <p className="text-center text-xs text-slate-500 dark:text-slate-400 mt-3 font-medium">
            {heroScreenshots[activeScreenIndex].subtitle}
          </p>
        </div>

      </div>

    </section>
  );
}
