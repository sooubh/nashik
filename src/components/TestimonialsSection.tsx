'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { testimonialsData } from '@/data/testimonials';

export function TestimonialsSection() {
  return (
    <section id="reviews" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
        <span className="text-xs uppercase font-bold tracking-widest text-brand-blue dark:text-brand-400 mb-2 block">
          Verified Reviews
        </span>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Loved by Travelers & Locals
        </h2>
        <p className="text-slate-600 dark:text-slate-400 mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed">
          See what explorers visiting the vineyards and historic Sahyadri forts say about the Android app.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        {testimonialsData.map((t, idx) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.06 }}
            className="p-6 sm:p-8 rounded-2xl border border-slate-200/60 dark:border-slate-800/60 bg-white dark:bg-slate-900/80 shadow-card dark:shadow-card-dark hover:shadow-card-hover dark:hover:shadow-card-dark-hover hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4 sm:mb-5">
                <div className="flex items-center gap-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-4 sm:h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <div className="w-8 h-8 rounded-full bg-brand-50 dark:bg-slate-800 flex items-center justify-center">
                  <Quote className="w-4 h-4 text-brand-blue dark:text-brand-400" />
                </div>
              </div>

              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6 sm:mb-8">
                &ldquo;{t.comment}&rdquo;
              </p>
            </div>

            <div className="flex items-center gap-3 pt-4 sm:pt-5 border-t border-slate-100 dark:border-slate-800/60">
              <div className="h-10 w-10 sm:h-11 sm:w-11 rounded-full bg-brand-100 dark:bg-brand-900/50 text-brand-700 dark:text-brand-300 font-bold text-sm flex items-center justify-center shrink-0">
                {t.avatar}
              </div>
              <div className="min-w-0 flex flex-col">
                <span className="font-bold text-sm sm:text-base text-slate-900 dark:text-white block truncate">
                  {t.name}
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400 block truncate mt-0.5">
                  {t.role} • {t.location}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
