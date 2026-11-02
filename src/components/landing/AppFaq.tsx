'use client';

import React from 'react';
import { ChevronDown } from 'lucide-react';
import { SITE_CONFIG } from '@/config/site';

const FAQ_ITEMS = [
  {
    question: `Is ${SITE_CONFIG.name} free to download and use on Android?`,
    answer:
      `Yes. ${SITE_CONFIG.name} is completely free on Android via Google Play. You get access to all destination dossiers, category filters, offline caching, and itinerary planning with zero ads or surprise subscriptions.`,
  },
  {
    question: 'How does Trivio differ from generic chatbots or standard map apps?',
    answer:
      'Standard map apps frequently fail to account for afternoon Garbhagriha closures or pair distant spots that cause hours of cross-city traffic. Trivio uses verified local entries that verify opening hours, check aarti timings, factor in mountain road transit, and sequence stops without backtracking.',
  },
  {
    question: 'Does the app work if cellular reception drops in Sahyadri valleys?',
    answer:
      'Yes. The application is built local-first for the realities of the Western Ghats. Saved wishlist boards and destination guides are stored on-device in local storage. When cellular signal drops at fort summits or in rural valleys, core data and coordinates remain accessible.',
  },
  {
    question: 'Which transit arrival hubs can I select for multi-day itineraries?',
    answer:
      'You can choose your exact point of arrival: Nashik Road Railway Station (main rail terminus), Ozar Airport (regional flight hub), or Central Bus Stand (CBS / Thakkar Bazaar). The itinerary sequences your stops geographically from that starting hub.',
  },
  {
    question: 'How does turn-by-turn road navigation work?',
    answer:
      'The app displays point-to-point geographic distances for planning and provides a direct one-tap button to push exact GPS coordinates into your favorite map app (such as Google Maps) for live driving directions.',
  },
  {
    question: 'Are temple dress codes and visiting guidelines included?',
    answer:
      'Yes. Heritage and pilgrimage sites like Trimbakeshwar Jyotirlinga and Kalaram Mandir provide specific guidance on expected attire (such as dhoti/kurta rules for Gabhara puja) and optimal morning hours to avoid long queues.',
  },
];

export function AppFaq() {
  return (
    <section className="w-full bg-[#FBFAFD] px-6 sm:px-10 lg:px-16 py-20 lg:py-28" id="faq">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-on-surface">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-on-surface-variant mt-3 leading-relaxed">
            Practical details regarding offline operation, arrival transit hubs, and local temple customs.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {FAQ_ITEMS.map((item, index) => (
            <details
              key={index}
              data-ui
              className="group bg-white rounded-2xl border border-brand-100 p-5 sm:p-6 transition-colors duration-150 open:bg-white"
            >
              <summary className="flex items-center justify-between cursor-pointer list-none font-bold text-base sm:text-lg text-on-surface hover:text-deep-violet transition-colors">
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
