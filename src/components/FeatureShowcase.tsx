'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Compass,
  Search,
  Calendar,
  Heart,
  User,
  ShieldCheck,
  CheckCircle2,
  Cpu,
} from 'lucide-react';
import { featuresData } from '@/data/features';
import { cn } from '@/lib/utils';

export function FeatureShowcase() {
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);
  const activeFeature = featuresData[activeFeatureIndex] || featuresData[0];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass':
        return <Compass className="w-4 h-4 sm:w-5 sm:h-5" />;
      case 'Search':
        return <Search className="w-4 h-4 sm:w-5 sm:h-5" />;
      case 'Calendar':
        return <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />;
      case 'Heart':
        return <Heart className="w-4 h-4 sm:w-5 sm:h-5" />;
      case 'User':
        return <User className="w-4 h-4 sm:w-5 sm:h-5" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />;
      default:
        return <Compass className="w-4 h-4 sm:w-5 sm:h-5" />;
    }
  };

  return (
    <section id="features" className="py-16 sm:py-24 px-4 sm:px-6 md:px-8 bg-slate-50/50 dark:bg-slate-900/20 border-y border-slate-200/80 dark:border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs uppercase font-extrabold tracking-widest text-brand-blue dark:text-brand-400 mb-2 block">
            Interactive Tour
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Explore Every App Feature
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed">
            Click through each module below to preview the live Material 3 interface and underlying architecture.
          </p>
        </div>

        {/* 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Feature Buttons */}
          <div className="lg:col-span-6 flex flex-col gap-2.5 sm:gap-3 order-2 lg:order-1">
            {featuresData.map((feature, idx) => {
              const isSelected = activeFeatureIndex === idx;
              return (
                <button
                  key={feature.id}
                  onClick={() => setActiveFeatureIndex(idx)}
                  type="button"
                  className={cn(
                    'w-full text-left p-3.5 sm:p-5 rounded-2xl transition-all duration-200 border relative focus:outline-none flex items-start gap-3 sm:gap-4 cursor-pointer',
                    isSelected
                      ? 'bg-white dark:bg-slate-900 border-brand-blue dark:border-brand-400 shadow-soft-md ring-1 ring-brand-blue/30 scale-[1.01]'
                      : 'bg-white/60 dark:bg-slate-900/40 border-slate-200/80 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-900 hover:border-slate-300 dark:hover:border-slate-700 shadow-soft-sm'
                  )}
                >
                  <div
                    className={cn(
                      'p-2.5 sm:p-3 rounded-xl transition-colors shrink-0',
                      isSelected
                        ? 'bg-brand-blue text-white shadow-glow-sm'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                    )}
                  >
                    {getIcon(feature.icon)}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h3
                        className={cn(
                          'font-bold text-xs sm:text-sm tracking-tight truncate',
                          isSelected
                            ? 'text-brand-blue dark:text-brand-400 font-extrabold'
                            : 'text-slate-900 dark:text-slate-100'
                        )}
                      >
                        {feature.title}
                      </h3>
                      {feature.badge && (
                        <span
                          className={cn(
                            'text-[9px] sm:text-[10px] uppercase font-bold px-2 py-0.5 rounded-full shrink-0',
                            isSelected
                              ? 'bg-brand-50 text-brand-blue dark:bg-brand-950 dark:text-brand-400 border border-brand-200 dark:border-brand-800'
                              : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                          )}
                        >
                          {feature.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-2">
                      {feature.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Phone Mockup & Tech Architecture Card */}
          <div className="lg:col-span-6 flex flex-col items-center order-1 lg:order-2 gap-6 sm:gap-8">
            {/* Phone Shell */}
            <div className="relative w-[240px] sm:w-[280px] md:w-[310px] aspect-[9/19] bg-slate-950 rounded-[42px] sm:rounded-[48px] p-2.5 sm:p-3 shadow-2xl border-4 border-slate-800 ring-4 ring-slate-900/40 overflow-hidden">
              <div className="absolute top-2 left-1/2 -translate-x-1/2 h-4 sm:h-5 w-20 sm:w-24 bg-slate-900 rounded-full z-30 flex items-center justify-center">
                <div className="h-1.5 w-7 sm:w-8 bg-slate-800 rounded-full" />
              </div>

              <div className="w-full h-full bg-slate-900 rounded-[32px] sm:rounded-[38px] overflow-hidden relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeFeature.screenshot}
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.03 }}
                    transition={{ duration: 0.28, ease: 'easeInOut' }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={activeFeature.screenshot}
                      alt={activeFeature.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 240px, 310px"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Architecture Card */}
            <div className="w-full max-w-md p-4 sm:p-6 glass-card rounded-3xl shadow-soft-sm">
              <div className="flex items-center gap-2 mb-2.5 text-brand-blue dark:text-brand-400">
                <Cpu className="w-4 h-4 shrink-0" />
                <h4 className="font-extrabold text-xs sm:text-sm tracking-tight truncate">
                  Architecture: {activeFeature.title}
                </h4>
              </div>
              <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-3.5">
                Powered by <strong>Flutter & Riverpod</strong> with asynchronous Firestore synchronization and offline <strong>Hive DB</strong> storage.
              </p>

              <div className="grid grid-cols-2 gap-2 text-[11px] sm:text-xs font-medium text-slate-700 dark:text-slate-300">
                <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate">Hive DB Local Cache</span>
                </div>
                <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate">Riverpod State Flow</span>
                </div>
                <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate">Google Maps SDK</span>
                </div>
                <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate">Offline Ready Core</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
