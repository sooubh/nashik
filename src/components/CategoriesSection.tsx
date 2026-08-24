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
    <section id="categories" className="py-16 sm:py-24 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <span className="text-xs uppercase font-extrabold tracking-widest text-brand-blue dark:text-brand-400 mb-2 block">
          Curated Spot Collections
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: idx * 0.05 }}
            className="p-5 sm:p-6 rounded-3xl glass-card shadow-soft-sm hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div
                  className={cn(
                    'p-2.5 sm:p-3 rounded-2xl transition-transform group-hover:scale-110 duration-200 shrink-0',
                    cat.colorClass.bg,
                    cat.colorClass.text,
                    cat.colorClass.darkBg,
                    cat.colorClass.darkText
                  )}
                >
                  {getCategoryIcon(cat.iconName)}
                </div>
                <span className="text-[11px] sm:text-xs font-bold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                  {cat.count} spots
                </span>
              </div>

              <h3 className="font-extrabold text-base text-slate-900 dark:text-slate-100 mb-1.5">
                {cat.name}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                {cat.description}
              </p>
            </div>

            <div className="pt-3.5 border-t border-slate-100 dark:border-slate-800/80">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                Highlights
              </span>
              <div className="flex flex-wrap gap-1.5">
                {cat.sampleSpots.map((spot) => (
                  <span
                    key={spot}
                    className="text-[10px] sm:text-[11px] font-medium px-2 py-0.5 rounded-lg bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/50 dark:border-slate-700/50"
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
