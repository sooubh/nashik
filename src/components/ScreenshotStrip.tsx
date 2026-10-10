'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const screens = [
  {
    id: 'screen-discover',
    title: 'Discover Places',
    caption: 'Browse attractions by category with local highlights',
    src: '/images/home.png',
  },
  {
    id: 'screen-search',
    title: 'Search & Filters',
    caption: 'Find spots by name or area with entry fee details',
    src: '/images/explore.png',
  },
  {
    id: 'screen-planner',
    title: 'Plan Your Visit',
    caption: 'Structured daily itineraries from your transit hub',
    src: '/images/ai-planner.png',
  },
  {
    id: 'screen-details',
    title: 'Place Details',
    caption: 'Visiting hours, tips, and Google Maps directions',
    src: '/images/details.png',
  },
];

export function ScreenshotStrip() {
  return (
    <section id="screenshots" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 section-bg-alt section-border-t">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 dark:bg-brand-950/60 text-brand-blue dark:text-brand-400 text-xs font-bold uppercase tracking-wider mb-4">
            <span>App Interface</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Real Screens from the Android App
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed">
            Clean, modern interface designed for effortless navigation in bright daylight or evening exploring.
          </p>
        </div>

        {/* 4-Screenshot Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {screens.map((screen, idx) => (
            <motion.div
              key={screen.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08, ease: 'easeOut' }}
              className="flex flex-col"
            >
              <div className="relative w-full aspect-[9/19] rounded-2xl screenshot-card overflow-hidden border border-slate-200/60 dark:border-slate-800/60 bg-white dark:bg-slate-900 shadow-card dark:shadow-card-dark">
                <Image
                  src={screen.src}
                  alt={`NashikExplore screenshot: ${screen.title}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>

              <div className="mt-3 sm:mt-4 text-center">
                <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white block truncate">
                  {screen.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 leading-snug">
                  {screen.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
