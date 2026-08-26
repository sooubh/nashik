'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Smartphone, Zap, Sparkles, ShieldCheck, Database } from 'lucide-react';

export function WhyChooseUs() {
  const cards = [
    {
      title: 'Material 3 Expressive UI',
      description: 'Engineered with Flutter & Riverpod. Dynamic color harmonization, smooth 60fps animations, and an adaptive dark theme tailored for outdoor reading.',
      icon: Smartphone,
      accentColor: 'text-brand-blue dark:text-brand-400 bg-brand-50 dark:bg-brand-950/60',
      badge: 'Modern UI',
    },
    {
      title: 'Low Battery & Data Footprint',
      description: 'Weather and spot coordinates are cached locally to eliminate unnecessary network queries, conserving battery on remote Sahyadri treks.',
      icon: Zap,
      accentColor: 'text-amber-500 bg-amber-50 dark:bg-amber-950/60',
      badge: 'Optimized',
    },
    {
      title: '100% Offline Hive DB',
      description: 'Browse attraction guides, historical backstories, entry fees, and saved wishlists even in valley zones with zero mobile reception.',
      icon: Database,
      accentColor: 'text-brand-sky bg-sky-50 dark:bg-sky-950/60',
      badge: 'Offline First',
    },
    {
      title: '₹199 Lifetime Upgrade',
      description: 'One-time ₹199 lifetime upgrade removes all advertisements, unlocks unlimited saved boards, and supports continuous local updates.',
      icon: Sparkles,
      accentColor: 'text-emerald-500 bg-emerald-50 dark:bg-emerald-950/60',
      badge: 'Best Value',
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Top Part: Overview & Mockup */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-16 sm:mb-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-7 space-y-5 sm:space-y-6 text-center lg:text-left"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-950/60 text-brand-blue dark:text-brand-400 text-xs font-bold uppercase tracking-wider">
            <span>Engineering & Design</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            Crafted Specifically for Seamless Nashik Travel
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Nashik is an extraordinary blend of spirituality, sprawling vineyards, and majestic Sahyadri peaks. <strong>Nashik Travel Guide</strong> brings all verified local spot guides, trekking tips, and transit times into a single, beautifully crafted Android companion app.
          </p>

          <div className="grid grid-cols-3 gap-2.5 sm:gap-4 pt-2">
            <div className="p-5 sm:p-7 rounded-2xl border border-slate-200/60 dark:border-slate-800/60 bg-white dark:bg-slate-900/80 shadow-card dark:shadow-card-dark text-center">
              <span className="block text-2xl sm:text-3xl font-black text-brand-blue dark:text-brand-400">100+</span>
              <span className="text-[10px] sm:text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-0.5 block">Spots</span>
            </div>
            <div className="p-5 sm:p-7 rounded-2xl border border-slate-200/60 dark:border-slate-800/60 bg-white dark:bg-slate-900/80 shadow-card dark:shadow-card-dark text-center">
              <span className="block text-2xl sm:text-3xl font-black text-brand-blue dark:text-brand-400">₹199</span>
              <span className="text-[10px] sm:text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-0.5 block">Lifetime</span>
            </div>
            <div className="p-5 sm:p-7 rounded-2xl border border-slate-200/60 dark:border-slate-800/60 bg-white dark:bg-slate-900/80 shadow-card dark:shadow-card-dark text-center">
              <span className="block text-2xl sm:text-3xl font-black text-brand-blue dark:text-brand-400">100%</span>
              <span className="text-[10px] sm:text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-0.5 block">Offline</span>
            </div>
          </div>
        </motion.div>

        {/* Right Splash View */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-5 flex justify-center"
        >
          <div className="relative w-[240px] sm:w-[280px] md:w-[300px] aspect-[9/19] rounded-2xl screenshot-card shadow-soft-xl overflow-hidden bg-slate-900">
            <Image
              src="/images/app-splashscreen-icon.png"
              alt="Nashik Travel Guide App Splash View"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 240px, 300px"
            />
          </div>
        </motion.div>
      </div>

      {/* Bottom Part: 4 Bento Cards */}
      <div>
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <span className="text-xs uppercase font-bold tracking-widest text-brand-blue dark:text-brand-400 mb-2 block">
            Core Architecture
          </span>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Engineered for Modern Travelers
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: idx * 0.06 }}
                className="p-5 sm:p-7 rounded-2xl border border-slate-200/60 dark:border-slate-800/60 bg-white dark:bg-slate-900/80 shadow-card dark:shadow-card-dark hover:shadow-card-hover dark:hover:shadow-card-dark-hover hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <div className={`p-2.5 sm:p-3 rounded-2xl ${card.accentColor} transition-colors duration-200`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] uppercase font-bold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300">
                      {card.badge}
                    </span>
                  </div>

                  <h4 className="font-bold text-base sm:text-lg text-slate-900 dark:text-white mb-3">
                    {card.title}
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
