'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
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

  // Mouse tilt 3D effect on phone (Desktop only)
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 120, damping: 18 });
  const mouseYSpring = useSpring(y, { stiffness: 120, damping: 18 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['6deg', '-6deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-6deg', '6deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (typeof window !== 'undefined' && window.innerWidth < 1024) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / rect.width - 0.5;
    const yPct = mouseY / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // Auto cycle screens
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveScreenIndex((prev) => (prev + 1) % heroScreenshots.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 md:pb-28 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto overflow-hidden bg-grid-pattern">
        {/* Background ambient orbs */}
        <div className="glow-orb-blue top-10 right-10" />
        <div className="glow-orb-blue bottom-10 left-10 opacity-75" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center relative z-10">
          {/* Left Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7 text-center lg:text-left"
          >
            {/* Pill Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-brand-200/80 dark:border-brand-800/80 shadow-soft-sm text-brand-blue dark:text-brand-300 text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-5 sm:mb-6 max-w-full"
            >
              <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse shrink-0" />
              <span className="truncate">Official Travel Companion for Nashik</span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15] mb-5 sm:mb-6">
              Discover Nashik <br className="hidden sm:inline" />
              <span className="text-gradient-blue">Like a Verified Local</span>
            </h1>

            {/* Description */}
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base lg:text-lg font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-6 sm:mb-8">
              Navigate ancient temples in Trimbakeshwar, world-renowned Sula vineyards, Sahyadri waterfalls, and iconic forts. Get verified coordinates, offline local guides, and dynamic weather alerts in one high-performance Android app.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-8 sm:mb-10 max-w-md mx-auto lg:mx-0">
              <a
                href="https://play.google.com/store/apps/details?id=com.nashikexplore.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-6 sm:px-7 py-3.5 rounded-2xl text-white bg-brand-blue hover:bg-brand-700 transition-all font-bold text-sm shadow-glow-sm hover:scale-105 active:scale-95 group min-h-[48px]"
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
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-slate-800 dark:text-slate-100 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-brand-300 dark:hover:border-brand-700 hover:text-brand-blue dark:hover:text-brand-400 font-bold text-sm transition-all shadow-soft-sm hover:scale-105 active:scale-95 min-h-[48px]"
              >
                <Compass className="w-4 h-4 text-brand-blue shrink-0" />
                <span>Try AI Planner</span>
              </Link>

              <button
                type="button"
                onClick={() => setIsQrModalOpen(true)}
                className="hidden sm:inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-2xl text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-850 hover:bg-slate-100 dark:hover:bg-slate-800 font-bold text-sm transition-all border border-slate-200/80 dark:border-slate-800 min-h-[48px]"
                title="Scan QR code"
              >
                <QrCode className="w-4 h-4 text-slate-500" />
                <span>QR Code</span>
              </button>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 border-t border-slate-200/80 dark:border-slate-800/80 pt-5 sm:pt-6 max-w-lg mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-1 text-amber-500 font-black text-xl sm:text-2xl md:text-3xl">
                  <span>4.8</span>
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-amber-400 text-amber-400 shrink-0" />
                </div>
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mt-0.5">
                  Play Rating
                </span>
              </div>

              <div className="border-l border-slate-200/80 dark:border-slate-800/80 pl-2 sm:pl-4 text-center lg:text-left">
                <span className="block text-xl sm:text-2xl md:text-3xl font-black text-brand-blue dark:text-brand-400">
                  50k+
                </span>
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mt-0.5">
                  Downloads
                </span>
              </div>

              <div className="border-l border-slate-200/80 dark:border-slate-800/80 pl-2 sm:pl-4 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-1 text-emerald-600 dark:text-emerald-400 font-black text-xl sm:text-2xl md:text-3xl">
                  <span>100%</span>
                  <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                </div>
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mt-0.5">
                  Offline
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Interactive Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col items-center justify-center relative select-none w-full"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ perspective: 1000 }}
          >
            {/* Floating Glass Widget 1 */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="hidden md:flex absolute -left-6 lg:-left-8 top-12 z-20 items-center gap-3 p-3.5 glass-card rounded-2xl shadow-soft-lg"
            >
              <div className="h-10 w-10 rounded-xl bg-rose-50 dark:bg-rose-950/60 text-rose-500 flex items-center justify-center font-bold text-lg shrink-0">
                🍇
              </div>
              <div>
                <span className="font-extrabold text-xs block text-slate-900 dark:text-white">Sula Vineyards</span>
                <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                  <span>★ 4.7 • Tasting Tours</span>
                </span>
              </div>
            </motion.div>

            {/* Floating Glass Widget 2 */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
              className="hidden md:flex absolute -right-4 lg:-right-6 bottom-20 z-20 items-center gap-3 p-3.5 glass-card rounded-2xl shadow-soft-lg"
            >
              <div className="h-10 w-10 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-500 flex items-center justify-center font-bold text-lg shrink-0">
                🛕
              </div>
              <div>
                <span className="font-extrabold text-xs block text-slate-900 dark:text-white">Trimbakeshwar</span>
                <span className="text-[10px] text-slate-500 dark:text-slate-400 font-semibold flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-brand-blue shrink-0" />
                  <span>28 km • 45 min</span>
                </span>
              </div>
            </motion.div>

            {/* Floating Glass Widget 3 */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
              className="hidden md:flex absolute right-4 top-2 z-20 items-center gap-2 px-3.5 py-2 glass-card rounded-full shadow-soft-md text-xs"
            >
              <Sun className="w-4 h-4 text-amber-500 animate-spin-slow" />
              <span className="font-bold text-slate-800 dark:text-slate-200">26°C Sunny in Nashik</span>
            </motion.div>

            {/* 3D Phone Shell */}
            <motion.div
              style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
              className="transition-transform duration-200 ease-out flex justify-center w-full max-w-[270px] sm:max-w-[300px] md:max-w-[315px]"
            >
              <div className="relative w-full aspect-[9/19] bg-slate-950 rounded-[42px] sm:rounded-[48px] p-2.5 sm:p-3 shadow-2xl border-4 border-slate-800 ring-4 sm:ring-8 ring-slate-900/40 ring-offset-2 sm:ring-offset-4 ring-offset-slate-100 dark:ring-offset-slate-950 overflow-hidden">
                {/* Notch */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 h-4 sm:h-5 w-20 sm:w-24 bg-slate-900 rounded-full z-30 flex items-center justify-center">
                  <div className="h-1.5 w-7 sm:w-8 bg-slate-800 rounded-full" />
                </div>

                {/* Screen Preview */}
                <div className="w-full h-full bg-slate-900 rounded-[32px] sm:rounded-[38px] overflow-hidden relative">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={heroScreenshots[activeScreenIndex].id}
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.02 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="relative w-full h-full"
                    >
                      <Image
                        src={heroScreenshots[activeScreenIndex].src}
                        alt={`Nashik Travel Guide - ${heroScreenshots[activeScreenIndex].title}`}
                        fill
                        priority
                        className="object-cover"
                        sizes="(max-width: 640px) 270px, 315px"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>

            {/* Screen Selector Pills with horizontal mobile scroll */}
            <div className="w-full max-w-sm mt-5 sm:mt-6 overflow-x-auto no-scrollbar py-1">
              <div className="flex items-center justify-start sm:justify-center gap-1.5 p-1 rounded-full glass-card shadow-soft-sm min-w-max mx-auto">
                {heroScreenshots.map((screen, idx) => (
                  <button
                    key={screen.id}
                    onClick={() => setActiveScreenIndex(idx)}
                    type="button"
                    className={`px-3 py-1 rounded-full text-[11px] sm:text-xs font-bold transition-all whitespace-nowrap min-h-[30px] flex items-center justify-center cursor-pointer ${
                      activeScreenIndex === idx
                        ? 'bg-brand-blue text-white shadow-glow-sm'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
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
