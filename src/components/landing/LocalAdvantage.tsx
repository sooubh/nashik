'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Compass, Route, Bookmark } from 'lucide-react';

const REASONS = [
  {
    icon: Compass,
    title: 'Made for Nashik',
    description:
      'Explore temples, vineyards, forts and nature spots with local context, practical tips and useful visiting details.',
  },
  {
    icon: Route,
    title: 'Plan better days',
    description:
      'Bring nearby places together and shape a trip around your arrival point, available time and interests.',
  },
  {
    icon: Bookmark,
    title: 'Keep your shortlist close',
    description:
      'Save places to wishlist boards in the app and revisit the destinations you want to explore.',
  },
];

export function LocalAdvantage() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="why-trivio"
      aria-labelledby="why-trivio-title"
      className="w-full scroll-mt-24 bg-white px-4 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5 }}
          className="mb-10 max-w-2xl sm:mb-12"
        >
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-deep-violet">
            Why Trivio
          </p>
          <h2
            id="why-trivio-title"
            className="text-3xl font-bold leading-tight tracking-tight text-on-surface sm:text-4xl lg:text-5xl"
          >
            A more local way to explore.
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-on-surface-variant sm:text-base">
            Less guesswork. More time for the places that make a journey memorable.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5">
          {REASONS.map((reason, index) => {
            const Icon = reason.icon;
            const isLastOnTablet = index === 2;

            return (
              <motion.article
                key={reason.title}
                initial={reduceMotion ? false : { opacity: 0, y: 34, rotateX: 6 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ duration: 0.68, delay: index * 0.09, ease: [0.22, 1, 0.36, 1] }}
                whileHover={reduceMotion ? undefined : { y: -8, rotateX: 2, scale: 1.012 }}
                style={{ transformPerspective: 1000, transformStyle: 'preserve-3d' }}
                className={`rounded-[24px] border border-brand-100 bg-[#FBFAFD] p-6 sm:p-7 lg:p-8 shadow-[0_12px_34px_rgba(48,31,78,0.05)] transition-shadow duration-300 hover:shadow-[0_22px_50px_rgba(48,31,78,0.12)] ${
                  isLastOnTablet ? 'sm:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <span className="mb-6 sm:mb-8 flex h-12 w-12 items-center justify-center rounded-full bg-brand-50 text-deep-violet">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="text-lg font-bold tracking-tight text-on-surface sm:text-xl">
                  {reason.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-on-surface-variant">
                  {reason.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
