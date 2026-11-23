import React from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQItem, Locale } from '@/types/content';
import { generateFAQSchema } from '@/lib/schema';
import { safeJsonLd } from '@/lib/utils';

interface FAQAccordionProps {
  faqs: FAQItem[];
  locale?: Locale;
}

export function FAQAccordion({ faqs, locale = 'en' }: FAQAccordionProps) {
  if (!faqs || faqs.length === 0) return null;

  const isMr = locale === 'mr';
  const isHi = locale === 'hi';

  const heading = isMr
    ? 'वारंवार विचारले जाणारे प्रश्न'
    : isHi
    ? 'अक्सर पूछे जाने वाले सवाल'
    : 'Frequently Asked Questions';

  return (
    <section className="rounded-2xl border border-brand-100 bg-[#FBFAFD] p-6 sm:p-8" id="faq">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd(generateFAQSchema(faqs)),
        }}
      />
      <div className="flex items-center gap-2 mb-6 text-deep-violet">
        <HelpCircle className="h-5 w-5 shrink-0" />
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-on-surface">
          {heading}
        </h2>
      </div>

      <div className="space-y-3">
        {faqs.map((faq, idx) => (
          <details
            key={idx}
            className="group rounded-xl border border-brand-100 bg-white p-4 sm:p-5 transition-colors duration-150 open:bg-white"
          >
            <summary className="flex items-center justify-between cursor-pointer list-none font-bold text-sm sm:text-base text-on-surface hover:text-deep-violet transition-colors min-h-[44px] [&::-webkit-details-marker]:hidden">
              <span className="pr-4 leading-snug">{faq.question}</span>
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-50 shrink-0 transition-transform duration-200 group-open:rotate-180">
                <ChevronDown className="h-4 w-4 text-deep-violet" />
              </span>
            </summary>
            <div className="mt-3 pt-2 text-xs sm:text-sm text-on-surface-variant leading-relaxed border-t border-brand-50">
              {faq.answer}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
