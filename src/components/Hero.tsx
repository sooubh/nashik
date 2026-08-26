'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, MapPin, Sparkles, QrCode, ShieldCheck, Download, Sun, Compass } from 'lucide-react';
import { QrCodeModal } from './QrCodeModal';

const heroScreenshots = [
  { id: 'home', title: 'Dashboard', src: '/images/home.png' },
  { id: 'explore', title: 'Search & Filters', src: '/images/explore.png' },
  { id: 'details', title: 'Spot Guide', src: '/images/details.png' },
  { id: 'saved', title: 'Wishlists', src: '/images/saved.png' },
  { id: 'profile', title: 'Profile & Mode', src: '/images/profile.png' },
];

export function Hero() {
  const [activeScreenIndex, setActiveScreenIndex] = useState(0);
  const [isQrModalOpen, setIsQrModalOpen] = useState(false);

  // Auto cycle screens
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveScreenIndex((prev) => (prev + 1) % heroScreenshots.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden bg-grid-pattern">
        {/* Background ambient orbs */}
        <div className="glow-orb-blue top-10 right-10" />
        <div className="glow-orb-blue bottom-10 left-10 opacity-75" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 sm:gap-18 items-center relative z-10">
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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl glass-card text-brand-blue dark:text-brand-400 text-xs font-bold uppercase tracking-widest mb-6 sm:mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse shrink-0" />
              <span>Official Travel Companion for Nashik</span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15] mb-6 sm:mb-8">
              Discover Nashik <br className="hidden sm:inline" />
              <span className="text-gradient-blue">Like a Verified Local</span>
            </h1>

            {/* Description */}
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8 sm:mb-10">
              Navigate ancient temples in Trimbakeshwar, world-renowned Sula vineyards, Sahyadri waterfalls, and iconic forts. Get verified coordinates, offline local guides, and dynamic weather alerts in one high-performance Android app.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-4 mb-10 sm:mb-12 max-w-md mx-auto lg:mx-0">
              <a
                href="https://play.google.com/store/apps/details?id=com.nashikexplore.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl text-white bg-brand-blue hover:bg-brand-700 transition-all font-bold text-sm shadow-glow-sm hover:-translate-y-1 active:scale-[0.97] min-h-[48px]"
              >
                <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.793 12 3.61 22.186c-.352-.375-.568-.89-.568-1.46V3.274c0-.57.216-1.085.568-1.46zm11.238 11.24L17.7 15.91l-11.8 6.772 8.947-9.628zm0-2.108L5.9 1.318 17.7 8.09l-2.853 2.856zm1.054 1.054l3.197-1.838c.846-.486.846-1.282 0-1.768l-3.197-1.838-2.115 2.115 2.115 2.329z" />
                </svg>
                <div className="text-left">
                  <div className="text-[10px] uppercase font-bold tracking-wider opacity-80 leading-none">Get it on</div>
                  <div className="text-sm font-extrabold leading-none mt-1">Google Play</div>
                </div>
              </a>

              <Link
                href="/trip-planner"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-brand-300 dark:hover:border-brand-700 hover:text-brand-blue dark:hover:text-brand-400 font-bold text-sm transition-all shadow-soft-sm hover:-translate-y-1 active:scale-[0.97] min-h-[48px]"
              >
                <Compass className="w-5 h-5 text-brand-blue shrink-0" />
                <span>Try AI Planner</span>
              </Link>

              <button
                type="button"
                onClick={() => setIsQrModalOpen(true)}
                className="hidden sm:inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl text-slate-700 dark:text-slate-300 glass-card hover:border-brand-300 dark:hover:border-brand-700 font-bold text-sm transition-all min-h-[48px] hover:-translate-y-1 active:scale-[0.97]"
                title="Scan QR code"
              >
                <QrCode className="w-5 h-5 text-slate-500" />
                <span>QR Code</span>
              </button>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-4 border-t border-slate-200/60 dark:border-slate-800/60 pt-8 max-w-lg mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-1 text-amber-500 font-extrabold text-2xl sm:text-3xl">
                  <span>4.8</span>
                  <Star className="w-5 h-5 fill-amber-400 text-amber-400 shrink-0" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 block mt-1">
                  Play Rating
                </span>
              </div>

              <div className="border-l border-slate-200/60 dark:border-slate-800/60 pl-4 text-center lg:text-left">
                <span className="block text-2xl sm:text-3xl font-extrabold text-brand-blue dark:text-brand-400">
                  50k+
                </span>
                <span className="text-[11px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 block mt-1">
                  Downloads
                </span>
              </div>

              <div className="border-l border-slate-200/60 dark:border-slate-800/60 pl-4 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-1 text-emerald-600 dark:text-emerald-400 font-extrabold text-2xl sm:text-3xl">
                  <span>100%</span>
                  <ShieldCheck className="w-5 h-5 shrink-0" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 block mt-1">
                  Offline
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Interactive Flat Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="lg:col-span-5 flex flex-col items-center justify-center relative select-none w-full"
          >
            {/* Floating Glass Widget 1 */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="hidden md:flex absolute -left-8 lg:-left-12 top-12 z-20 items-center gap-4 p-4 glass-card rounded-2xl"
            >
              <div className="h-12 w-12 rounded-xl bg-rose-50 dark:bg-rose-950/60 text-rose-500 flex items-center justify-center font-bold text-xl shrink-0">
                🍇
              </div>
              <div>
                <span className="font-extrabold text-sm block text-slate-900 dark:text-white">Sula Vineyards</span>
                <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                  <span>★ 4.7 • Tasting Tours</span>
                </span>
              </div>
            </motion.div>

            {/* Floating Glass Widget 2 */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
              className="hidden md:flex absolute -right-6 lg:-right-10 bottom-24 z-20 items-center gap-4 p-4 glass-card rounded-2xl"
            >
              <div className="h-12 w-12 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-500 flex items-center justify-center font-bold text-xl shrink-0">
                🛕
              </div>
              <div>
                <span className="font-extrabold text-sm block text-slate-900 dark:text-white">Trimbakeshwar</span>
                <span className="text-[11px] text-slate-500 dark:text-slate-400 font-semibold flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-brand-blue shrink-0" />
                  <span>28 km • 45 min</span>
                </span>
              </div>
            </motion.div>

            {/* Floating Glass Widget 3 */}
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
              className="hidden md:flex absolute right-0 lg:-right-4 top-4 z-20 items-center gap-3 px-4 py-2.5 glass-card rounded-xl text-sm"
            >
              <Sun className="w-5 h-5 text-amber-500 animate-spin-slow" />
              <span className="font-bold text-slate-800 dark:text-slate-200">26°C Sunny</span>
            </motion.div>

            {/* Flat Screenshot Display */}
            <div className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-[9/19] rounded-2xl overflow-hidden screenshot-card border border-slate-200/60 dark:border-slate-800/60 bg-white dark:bg-slate-900 z-10 shadow-card dark:shadow-card-dark">
              <AnimatePresence mode="wait">
                <motion.div
                  key={heroScreenshots[activeScreenIndex].id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={heroScreenshots[activeScreenIndex].src}
                    alt={`Nashik Travel Guide - ${heroScreenshots[activeScreenIndex].title}`}
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 640px) 280px, 320px"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Screen Selector Pills with horizontal mobile scroll */}
            <div className="w-full max-w-[280px] sm:max-w-sm mt-8 overflow-x-auto no-scrollbar py-2">
              <div className="flex items-center justify-start sm:justify-center gap-2 p-1.5 rounded-2xl glass-card min-w-max mx-auto shadow-soft-sm">
                {heroScreenshots.map((screen, idx) => (
                  <button
                    key={screen.id}
                    onClick={() => setActiveScreenIndex(idx)}
                    type="button"
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap min-h-[44px] flex items-center justify-center cursor-pointer ${
                      activeScreenIndex === idx
                        ? 'bg-brand-blue text-white shadow-glow-sm'
                        : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    {screen.title}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* QR Code Scanner Modal */}
      <QrCodeModal isOpen={isQrModalOpen} onClose={() => setIsQrModalOpen(false)} />
    </>
  );
}
