'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass } from 'lucide-react';

const heroScreenshots = [
  { id: 'home', title: 'Explore', src: '/images/home.png' },
  { id: 'explore', title: 'Search', src: '/images/explore.png' },
  { id: 'planner', title: 'Trip Planner', src: '/images/ai-planner.png' },
  { id: 'saved', title: 'Saved Places', src: '/images/saved.png' },
  { id: 'details', title: 'Spot Guide', src: '/images/details.png' },
];

export function Hero() {
  const [activeScreenIndex, setActiveScreenIndex] = useState(0);

  return (
    <section className="relative pt-24 sm:pt-36 lg:pt-40 pb-16 sm:pb-24 lg:pb-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden bg-grid-pattern">
      {/* Background ambient orbs */}
      <div className="glow-orb-blue top-10 right-10" />
      <div className="glow-orb-blue bottom-10 left-10 opacity-75" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-center relative z-10">
        {/* Left Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="lg:col-span-7 text-center lg:text-left"
        >
          {/* Pill Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-xl glass-card text-brand-blue dark:text-brand-400 text-[11px] sm:text-xs font-bold uppercase tracking-wider sm:tracking-widest mb-6 sm:mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-brand-blue shrink-0" />
            <span>Travel Companion for Nashik</span>
          </motion.div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15] mb-6 sm:mb-8">
            Explore Nashik beyond <br className="hidden sm:inline" />
            <span className="text-gradient-blue">the usual spots.</span>
          </h1>

          {/* Description */}
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8 sm:mb-10">
            Discover places, explore local attractions, and plan your Nashik trip with NashikExplore.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-4 mb-6 sm:mb-8 max-w-md mx-auto lg:mx-0">
            <a
              href="https://play.google.com/store/apps/details?id=com.nashikexplore.app"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Get NashikExplore on Google Play (opens in a new tab)"
              className="inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl text-white bg-brand-blue hover:bg-brand-700 transition-all font-bold text-sm shadow-glow-sm hover:-translate-y-0.5 active:scale-[0.97] min-h-[48px]"
            >
              <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.609 1.814L13.793 12 3.61 22.186c-.352-.375-.568-.89-.568-1.46V3.274c0-.57.216-1.085.568-1.46zm11.238 11.24L17.7 15.91l-11.8 6.772 8.947-9.628zm0-2.108L5.9 1.318 17.7 8.09l-2.853 2.856zm1.054 1.054l3.197-1.838c.846-.486.846-1.282 0-1.768l-3.197-1.838-2.115 2.115 2.115 2.329z" />
              </svg>
              <div className="text-left">
                <div className="text-[10px] uppercase font-bold tracking-wider opacity-80 leading-none">Get it on</div>
                <div className="text-sm font-extrabold leading-none mt-1">Google Play</div>
              </div>
            </a>

            <a
              href="#features"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-brand-300 dark:hover:border-brand-700 hover:text-brand-blue dark:hover:text-brand-400 font-bold text-sm transition-all shadow-soft-sm hover:-translate-y-0.5 active:scale-[0.97] min-h-[48px]"
            >
              <Compass className="w-5 h-5 text-brand-blue shrink-0" />
              <span>See the app</span>
            </a>
          </div>

          <p className="text-xs text-slate-500 dark:text-slate-400">Available for Android devices.</p>
        </motion.div>

        {/* Right Flat Phone Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className="lg:col-span-5 flex flex-col items-center justify-center relative select-none w-full"
        >
          {/* Flat Screenshot Display */}
          <div
            id="hero-screen-panel"
            role="tabpanel"
            aria-label={`Preview of ${heroScreenshots[activeScreenIndex].title}`}
            className="relative w-full max-w-[260px] sm:max-w-[300px] lg:max-w-[320px] aspect-[9/19] rounded-2xl overflow-hidden screenshot-card border border-slate-200/60 dark:border-slate-800/60 bg-white dark:bg-slate-900 z-10 shadow-card dark:shadow-card-dark"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={heroScreenshots[activeScreenIndex].id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="relative w-full h-full"
              >
                <Image
                  src={heroScreenshots[activeScreenIndex].src}
                  alt={`NashikExplore App - ${heroScreenshots[activeScreenIndex].title}`}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 640px) 260px, (max-width: 1024px) 300px, 320px"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Screen Selector Tabs */}
          <div className="w-full max-w-sm mt-6 overflow-x-auto no-scrollbar py-2">
            <div
              role="tablist"
              aria-label="App preview screens"
              className="flex items-center justify-start sm:justify-center gap-1.5 p-1.5 rounded-2xl glass-card shadow-soft-sm mx-auto w-fit"
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
                    className={`px-3 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap min-h-[44px] flex items-center justify-center cursor-pointer ${
                      isActive
                        ? 'bg-brand-blue text-white shadow-glow-sm'
                        : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    {screen.title}
                  </button>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
