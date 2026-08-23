'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Smartphone, Zap, Sparkles, ShieldCheck, Database, Navigation, CheckCircle2 } from 'lucide-react';

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
    <section id="about" className="py-24 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
      {/* Top Part: Overview & Mockup */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-950/60 text-brand-blue dark:text-brand-400 text-xs font-bold uppercase tracking-wider">
            <span>Engineering & Design</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            Crafted Specifically for Seamless Nashik Travel
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
            Nashik is an extraordinary blend of spirituality, sprawling vineyards, and majestic Sahyadri peaks. <strong>Nashik Travel Guide</strong> brings all verified local spot guides, trekking tips, and transit times into a single, beautifully crafted Android companion app.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
            <div className="p-4 rounded-2xl glass-card shadow-soft-sm">
              <span className="block text-3xl font-black text-brand-blue dark:text-brand-400">100+</span>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Curated Spots</span>
            </div>
            <div className="p-4 rounded-2xl glass-card shadow-soft-sm">
              <span className="block text-3xl font-black text-brand-blue dark:text-brand-400">₹199</span>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Lifetime Tier</span>
            </div>
            <div className="p-4 rounded-2xl glass-card shadow-soft-sm col-span-2 sm:col-span-1">
              <span className="block text-3xl font-black text-brand-blue dark:text-brand-400">100%</span>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Offline Ready</span>
            </div>
          </div>
        </motion.div>

        {/* Right Splash View */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-5 flex justify-center"
        >
          <div className="relative w-[280px] sm:w-[300px] aspect-[9/19] bg-slate-950 rounded-[46px] p-3 shadow-2xl border-4 border-slate-800 ring-4 ring-slate-900/30 overflow-hidden">
            <div className="relative w-full h-full rounded-[34px] overflow-hidden bg-slate-900">
              <Image
                src="/images/app-splashscreen-icon.png"
                alt="Nashik Travel Guide Splash View"
                fill
                className="object-cover"
                sizes="300px"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Part: 4 Bento Cards */}
      <div>
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase font-extrabold tracking-widest text-brand-blue dark:text-brand-400 mb-2 block">
            Core Architecture
          </span>
          <h3 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Engineered for Modern Travelers
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-7 rounded-3xl glass-card shadow-soft-sm hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-3 rounded-2xl ${card.accentColor} transition-transform group-hover:scale-110 duration-200`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] uppercase font-bold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                      {card.badge}
                    </span>
                  </div>

                  <h4 className="font-extrabold text-base text-slate-900 dark:text-slate-100 mb-2">
                    {card.title}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
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
