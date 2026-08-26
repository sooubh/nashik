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

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <section id="faq" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="text-center mb-14 sm:mb-18">
        <span className="text-xs uppercase font-bold tracking-widest text-brand-blue dark:text-brand-400 mb-2 block">
          Help & Support
        </span>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Frequently Asked Questions
        </h2>
        <p className="text-slate-600 dark:text-slate-400 mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed">
          Quick answers regarding offline capability, permissions, account creation, updates, and premium pricing.
        </p>
      </div>

      <div className="space-y-4">
        {faqData.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <motion.div
              key={item.question}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              className={cn(
                'transition-all duration-300 overflow-hidden',
                isOpen
                  ? 'rounded-2xl border border-brand-blue/40 dark:border-brand-400/40 bg-white dark:bg-slate-900/80 shadow-soft-md'
                  : 'rounded-2xl border border-slate-200/60 dark:border-slate-800/60 bg-white dark:bg-slate-900/80 shadow-soft-xs hover:border-slate-300 dark:hover:border-slate-700'
              )}
            >
              <button
                onClick={() => toggleAccordion(idx)}
                type="button"
                className="w-full px-5 sm:px-7 py-4 flex items-center justify-between text-left focus:outline-none gap-3 sm:gap-4 cursor-pointer min-h-[44px]"
                aria-expanded={isOpen}
              >
                <span className="font-bold text-sm sm:text-base text-slate-900 dark:text-white pr-4">
                  {item.question}
                </span>
                <div
                  className={cn(
                    'p-1.5 sm:p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 transition-transform duration-300 shrink-0 min-h-[32px] min-w-[32px] flex items-center justify-center',
                    isOpen && 'rotate-180 bg-brand-50 text-brand-blue dark:bg-brand-900/50 dark:text-brand-400'
                  )}
                >
                  <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                  >
                    <div className="px-5 sm:px-7 pb-5 sm:pb-6 text-sm text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800/60 pt-4">
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
