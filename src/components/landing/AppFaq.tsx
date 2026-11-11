'use client';

import React from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQ_ITEMS } from '@/data/faqData';

export function AppFaq() {
  return (
    <section className="w-full bg-[#FBFAFD] px-4 sm:px-8 lg:px-16 py-16 sm:py-20 lg:py-28" id="faq">
      <div className="max-w-4xl mx-auto">
        <div className="max-w-2xl mb-10 sm:mb-14">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-deep-violet">
            Common Inquiries
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-on-surface">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-on-surface-variant mt-3 leading-relaxed">
            Learn what Trivio covers, how its trip planner works, and what to check before visiting a destination.
          </p>
        </div>

        <div className="space-y-3.5">
          {FAQ_ITEMS.map((item, index) => (
            <details
              key={index}
              data-ui
              className="group bg-white rounded-2xl border border-brand-100 p-5 sm:p-6 transition-colors duration-150 open:bg-white"
            >
              <summary className="flex items-center justify-between cursor-pointer list-none font-bold text-base sm:text-lg text-on-surface hover:text-deep-violet transition-colors min-h-[44px] [&::-webkit-details-marker]:hidden">
                <span className="pr-4 leading-snug">{item.question}</span>
                <span className="w-8 h-8 rounded-full bg-brand-50 flex items-center justify-center shrink-0 group-open:rotate-180 transition-transform duration-200">
                  <ChevronDown className="w-4 h-4 text-deep-violet" />
                </span>
              </summary>
              <div className="mt-3 pt-2 text-sm sm:text-base text-on-surface-variant leading-relaxed">
                {item.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
