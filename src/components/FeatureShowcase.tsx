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
    <section id="features" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 section-bg-alt section-border-t transition-colors">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs uppercase font-bold tracking-widest text-brand-blue dark:text-brand-400 mb-2 block">
              Interactive Tour
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Explore Every App Feature
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed">
              Click through each module below to preview the live Material 3 interface and underlying architecture.
            </p>
          </motion.div>
        </div>

        {/* 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Feature Buttons */}
          <div className="lg:col-span-6 flex flex-col gap-3 sm:gap-4 order-2 lg:order-1">
            {featuresData.map((feature, idx) => {
              const isSelected = activeFeatureIndex === idx;
              return (
                <motion.button
                  key={feature.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.06 }}
                  onClick={() => setActiveFeatureIndex(idx)}
                  type="button"
                  className={cn(
                    'w-full text-left p-4 sm:p-5 rounded-2xl transition-all duration-300 relative focus:outline-none flex items-start gap-3 sm:gap-4 cursor-pointer min-h-[44px]',
                    isSelected
                      ? 'bg-white dark:bg-slate-900 border border-brand-blue/60 dark:border-brand-400/60 shadow-soft-md'
                      : 'bg-white/60 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800/60 hover:bg-white dark:hover:bg-slate-900 shadow-soft-xs'
                  )}
                >
                  <div
                    className={cn(
                      'p-2.5 sm:p-3 rounded-xl transition-colors shrink-0',
                      isSelected
                        ? 'bg-brand-blue text-white shadow-glow-sm'
                        : 'bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400'
                    )}
                  >
                    {getIcon(feature.icon)}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h3
                        className={cn(
                          'font-bold text-base sm:text-lg tracking-tight truncate',
                          isSelected
                            ? 'text-brand-blue dark:text-brand-400'
                            : 'text-slate-900 dark:text-white'
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
                              : 'bg-slate-100 dark:bg-slate-800/80 text-slate-500 dark:text-slate-400'
                          )}
                        >
                          {feature.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-2">
                      {feature.description}
                    </p>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Right Column: Flat Screenshot & Tech Architecture Card */}
          <div className="lg:col-span-6 flex flex-col items-center order-1 lg:order-2 gap-6 sm:gap-8">
            {/* Flat Screenshot */}
            <motion.div 
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative w-[240px] sm:w-[280px] md:w-[310px] aspect-[9/19] rounded-2xl screenshot-card overflow-hidden bg-slate-900 shadow-soft-xl"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFeature.screenshot}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
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
            </motion.div>

            {/* Architecture Card */}
            <motion.div 
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-full max-w-md p-5 sm:p-7 glass-card rounded-2xl shadow-soft-sm border border-slate-200/60 dark:border-slate-800/60 bg-white/70 dark:bg-slate-900/70"
            >
              <div className="flex items-center gap-2 mb-3 text-brand-blue dark:text-brand-400">
                <Cpu className="w-5 h-5 shrink-0" />
                <h4 className="font-bold text-base sm:text-lg tracking-tight truncate text-slate-900 dark:text-white">
                  Architecture: {activeFeature.title}
                </h4>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                Powered by <strong>Flutter & Riverpod</strong> with asynchronous Firestore synchronization and offline <strong>Hive DB</strong> storage.
              </p>

              <div className="grid grid-cols-2 gap-3 text-sm font-medium text-slate-700 dark:text-slate-300">
                <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span className="truncate">Hive DB Local Cache</span>
                </div>
                <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span className="truncate">Riverpod State Flow</span>
                </div>
                <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span className="truncate">Google Maps SDK</span>
                </div>
                <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span className="truncate">Offline Ready Core</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
