'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { faqData } from '@/data/faq';
import { cn } from '@/lib/utils';

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 md:px-8 max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <span className="text-xs uppercase font-extrabold tracking-widest text-brand-blue dark:text-brand-400 mb-2 block">
          Help & Support
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Frequently Asked Questions
        </h2>
        <p className="text-slate-600 dark:text-slate-400 mt-4 text-base leading-relaxed">
          Quick answers regarding offline capability, permissions, updates, and premium pricing.
        </p>
      </div>

      <div className="space-y-3.5">
        {faqData.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <motion.div
              key={item.question}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className={cn(
                'rounded-2xl transition-all duration-200 overflow-hidden',
                isOpen
                  ? 'glass-card border-brand-blue dark:border-brand-400 shadow-soft-md ring-1 ring-brand-blue/20'
                  : 'glass-card border-slate-200/80 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-soft-sm'
              )}
            >
              <button
                onClick={() => toggleAccordion(idx)}
                type="button"
                className="w-full px-6 py-4.5 flex items-center justify-between text-left focus:outline-none gap-4"
                aria-expanded={isOpen}
              >
                <span className="font-bold text-sm sm:text-base text-slate-900 dark:text-slate-100">
                  {item.question}
                </span>
                <div
                  className={cn(
                    'p-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 transition-transform duration-300 shrink-0',
                    isOpen && 'rotate-180 bg-brand-50 text-brand-blue dark:bg-brand-950 dark:text-brand-400'
                  )}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                  >
                    <div className="px-6 pb-5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/80 pt-3.5">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
