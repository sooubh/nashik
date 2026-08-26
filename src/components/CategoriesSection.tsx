'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Landmark,
  Wine,
  Mountain,
  Droplets,
  Trees,
  UtensilsCrossed,
  Building2,
  Eye,
} from 'lucide-react';
import { categoriesData } from '@/data/categories';
import { cn } from '@/lib/utils';

export function CategoriesSection() {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Landmark':
        return <Landmark className="w-5 h-5" />;
      case 'Wine':
        return <Wine className="w-5 h-5" />;
      case 'Mountain':
        return <Mountain className="w-5 h-5" />;
      case 'Droplets':
        return <Droplets className="w-5 h-5" />;
      case 'Trees':
        return <Trees className="w-5 h-5" />;
      case 'UtensilsCrossed':
        return <UtensilsCrossed className="w-5 h-5" />;
      case 'Building2':
        return <Building2 className="w-5 h-5" />;
      case 'Eye':
        return <Eye className="w-5 h-5" />;
      default:
        return <Landmark className="w-5 h-5" />;
    }
  };

  return (
    <section id="categories" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
        <span className="text-xs uppercase font-bold tracking-widest text-brand-blue dark:text-brand-400 mb-2 block">
          Curated Spot Collections
        </span>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Explore Nashik by Category
        </h2>
        <p className="text-slate-600 dark:text-slate-400 mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed">
          From ancient Jyotirlinga circuits to scenic Sahyadri waterfall trails and vineyard tastings.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {categoriesData.map((cat, idx) => (
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.06, ease: 'easeOut' }}
            className="p-5 sm:p-7 rounded-2xl border border-slate-200/60 dark:border-slate-800/60 bg-white dark:bg-slate-900/80 shadow-card dark:shadow-card-dark hover:shadow-card-hover dark:hover:shadow-card-dark-hover hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div
                  className={cn(
                    'p-3 rounded-xl transition-transform group-hover:scale-105 duration-200 shrink-0 bg-brand-50 dark:bg-brand-900/30 text-brand-blue dark:text-brand-400'
                  )}
                >
                  {getCategoryIcon(cat.iconName)}
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                  {cat.count} spots
                </span>
              </div>

              <h3 className="font-bold text-base sm:text-lg text-slate-900 dark:text-white mb-2">
                {cat.name}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                {cat.description}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-3">
                Highlights
              </span>
              <div className="flex flex-wrap gap-2">
                {cat.sampleSpots.map((spot) => (
                  <span
                    key={spot}
                    className="text-xs font-medium px-2.5 py-1 rounded-lg bg-slate-50 dark:bg-slate-800/70 text-slate-700 dark:text-slate-300 border border-slate-100 dark:border-slate-700/50"
                  >
                    {spot}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
