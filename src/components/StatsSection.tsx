'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, DownloadCloud, MapPin, CheckCircle2 } from 'lucide-react';
import { statsData } from '@/data/stats';

export function StatsSection() {
  const getStatIcon = (iconName: string) => {
    switch (iconName) {
      case 'Star':
        return <Star className="w-5 h-5 text-brand-blue dark:text-brand-400" />;
      case 'DownloadCloud':
        return <DownloadCloud className="w-5 h-5 text-brand-blue dark:text-brand-400" />;
      case 'MapPin':
        return <MapPin className="w-5 h-5 text-brand-blue dark:text-brand-400" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-5 h-5 text-brand-blue dark:text-brand-400" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-brand-blue dark:text-brand-400" />;
    }
  };

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {statsData.map((stat, idx) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.06, ease: 'easeOut' }}
            className="p-5 sm:p-7 rounded-2xl border border-slate-200/60 dark:border-slate-800/60 bg-white dark:bg-slate-900/80 shadow-card dark:shadow-card-dark text-center flex flex-col items-center justify-center hover:-translate-y-1 hover:shadow-card-hover dark:hover:shadow-card-dark-hover transition-all duration-300"
          >
            <div className="p-3 rounded-xl bg-brand-50 dark:bg-brand-900/30 mb-4 flex items-center justify-center">
              {getStatIcon(stat.icon)}
            </div>
            <span className="block text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-2">
              {stat.value}
            </span>
            <span className="font-bold text-xs text-brand-blue dark:text-brand-400 uppercase tracking-widest block mb-1">
              {stat.label}
            </span>
            <span className="text-sm text-slate-500 dark:text-slate-400 block">
              {stat.sublabel}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
