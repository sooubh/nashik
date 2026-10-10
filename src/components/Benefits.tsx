'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Calendar, Bookmark, CheckCircle2 } from 'lucide-react';

const benefits = [
  {
    id: 'discover',
    title: 'Discover Places',
    badge: 'Curated Guide',
    icon: Compass,
    iconBg: 'text-brand-blue dark:text-brand-400 bg-brand-50 dark:bg-brand-950/60',
    description:
      'Browse curated attractions across wine country, historic temples, hill forts, and scenic waterfalls with visiting tips and one-tap Google Maps directions.',
    points: [
      'Categorized guides for heritage, nature & vineyards',
      'Visitor timings and practical tips',
      'Direct navigation via Google Maps',
    ],
  },
  {
    id: 'plan',
    title: 'Plan Your Visit',
    badge: 'Trip Planner',
    icon: Calendar,
    iconBg: 'text-brand-sky bg-sky-50 dark:bg-sky-950/60',
    description:
      'Build structured 1 to 3-day itineraries tailored to your starting transit hub, travel pace, and interests with balanced daily stops.',
    points: [
      '1 to 3-day customizable itineraries',
      'Transit hub starting points (Station, Airport, Bus)',
      'Practical morning, afternoon & evening stops',
    ],
  },
  {
    id: 'save',
    title: 'Save Places',
    badge: 'Wishlist Boards',
    icon: Bookmark,
    iconBg: 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60',
    description:
      'Organize your favorite destinations into custom wishlist boards on your phone so your travel ideas stay readily accessible on the go.',
    points: [
      'Custom boards for weekend or themed trips',
      'Kept directly on your device',
      'Organize places to revisit anytime',
    ],
  },
];

export function Benefits() {
  return (
    <section id="features" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 dark:bg-brand-950/60 text-brand-blue dark:text-brand-400 text-xs font-bold uppercase tracking-wider mb-4">
          <span>Three Practical Benefits</span>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Everything You Need to Explore Nashik
        </h2>
        <p className="text-slate-600 dark:text-slate-400 mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed">
          From ancient temples and wine country to hill forts and scenic waterfalls, NashikExplore makes your journey simple, organized, and reliable.
        </p>
      </div>

      {/* 3 Benefit Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {benefits.map((benefit, idx) => {
          const Icon = benefit.icon;
          return (
            <motion.div
              key={benefit.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08, ease: 'easeOut' }}
              className="p-6 sm:p-8 rounded-2xl border border-slate-200/60 dark:border-slate-800/60 bg-white dark:bg-slate-900/80 shadow-card dark:shadow-card-dark hover:shadow-card-hover dark:hover:shadow-card-dark-hover transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className={`p-3 rounded-2xl ${benefit.iconBg}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] uppercase font-bold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300">
                    {benefit.badge}
                  </span>
                </div>

                <h3 className="font-bold text-lg sm:text-xl text-slate-900 dark:text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  {benefit.description}
                </p>
              </div>

              <div className="pt-5 border-t border-slate-100 dark:border-slate-800/80 space-y-2.5">
                {benefit.points.map((pt) => (
                  <div key={pt} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
