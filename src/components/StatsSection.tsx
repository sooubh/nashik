'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, DownloadCloud, MapPin, CheckCircle2 } from 'lucide-react';
import { statsData } from '@/data/stats';

export function StatsSection() {
  const getStatIcon = (iconName: string) => {
    switch (iconName) {
      case 'Star':
        return <Star className="w-5 h-5 text-amber-500" />;
      case 'DownloadCloud':
        return <DownloadCloud className="w-5 h-5 text-brand-blue dark:text-brand-400" />;
      case 'MapPin':
        return <MapPin className="w-5 h-5 text-rose-500" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-5 h-5 text-emerald-500" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-brand-blue" />;
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {statsData.map((stat, idx) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            className="p-6 rounded-3xl glass-card shadow-soft-sm text-center flex flex-col items-center justify-center hover:-translate-y-1 hover:shadow-card-hover transition-all"
          >
            <div className="p-3 rounded-2xl bg-brand-50 dark:bg-slate-800 mb-4">
              {getStatIcon(stat.icon)}
            </div>
            <span className="block text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight mb-1">
              {stat.value}
            </span>
            <span className="font-extrabold text-xs text-brand-blue dark:text-brand-400 uppercase tracking-wider block">
              {stat.label}
            </span>
            <span className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 block">
              {stat.sublabel}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
