'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { testimonialsData } from '@/data/testimonials';

export function TestimonialsSection() {
  return (
    <section id="reviews" className="py-24 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs uppercase font-extrabold tracking-widest text-brand-blue dark:text-brand-400 mb-2 block">
          Verified Reviews
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Loved by Travelers & Locals
        </h2>
        <p className="text-slate-600 dark:text-slate-400 mt-4 text-base leading-relaxed">
          See what explorers visiting the vineyards and historic Sahyadri forts say about the Android app.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonialsData.map((t, idx) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="p-8 rounded-3xl glass-card shadow-soft-sm hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <Quote className="w-5 h-5 text-slate-300 dark:text-slate-700" />
              </div>

              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed italic mb-6">
                &ldquo;{t.comment}&rdquo;
              </p>
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
              <div className="h-10 w-10 rounded-full bg-brand-50 dark:bg-brand-950 text-brand-blue dark:text-brand-400 font-extrabold text-sm flex items-center justify-center border border-brand-200 dark:border-brand-800 shrink-0">
                {t.avatar}
              </div>
              <div>
                <span className="font-extrabold text-sm text-slate-900 dark:text-white block">
                  {t.name}
                </span>
                <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium block">
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
