'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'When is the best season to explore Nashik?',
    answer:
      'October through March is the peak travel window. The weather is cool and crisp (12°C to 28°C), ideal for exploring Sahyadri forts like Harihar and Anjaneri, and late January through March is the active grape harvest and wine-crush season at Sula and York. For lush landscapes and cascading waterfalls like Someshwar, the monsoon months of July to September are spectacular.',
  },
  {
    question: 'Does the mobile app work if cell reception drops?',
    answer:
      'Yes. NashikExplore is built with mobile field realities in mind. Your saved wishlist boards and previously viewed spot dossiers are stored directly in your phone’s local cache. If network drops while you are trekking or driving through rural ghat passes, the app uses a deterministic offline trip generator rather than failing with network errors.',
  },
  {
    question: 'Which transit hubs can I use as itinerary starting points?',
    answer:
      'The multi-day itinerary builder lets you select your actual point of arrival: Nashik Road Railway Station (main rail terminus), Ozar Airport (direct flights from regional centers), or Central Bus Stand (CBS / Thakkar Bazaar). Itineraries sequence your morning and afternoon stops to minimize backtracking.',
  },
  {
    question: 'How does navigation between destinations work?',
    answer:
      'The app displays approximate geographic distances to help you plan your day, and provides a direct one-tap button to open the exact coordinates in Google Maps for live road directions, live traffic conditions, and turn-by-turn navigation.',
  },
  {
    question: 'Are temple dress codes and visiting guidelines included?',
    answer:
      'Yes. Significant heritage and pilgrimage sites such as Trimbakeshwar Jyotirlinga and Kalaram Temple Mandir include practical notes regarding expected attire (such as traditional clothing requirements for inner sanctum puja access) and recommended morning hours to minimize queue times.',
  },
  {
    question: 'Is NashikExplore free to download and use?',
    answer:
      'NashikExplore is free to download on Google Play. It provides full access to the destination directory, category filters, and itinerary planner. There are no surprise paywalls for essential travel information.',
  },
];

export function TravelFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="max-w-3xl mb-16 text-left">
        <span className="text-sm font-bold text-blue-600 dark:text-blue-400 block mb-3">
          Practical Travel Advice
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight">
          Questions about visiting Nashik &amp; the app.
        </h2>
        <p className="text-slate-600 dark:text-slate-300 mt-4 text-base sm:text-lg leading-relaxed">
          Clear answers to help you plan your travel schedule with confidence.
        </p>
      </div>

      {/* Accordion List with Clean Filled Surfaces */}
      <div className="space-y-4">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="rounded-2xl bg-slate-100 dark:bg-slate-900/90 overflow-hidden transition-colors"
            >
              <button
                type="button"
                onClick={() => toggleFaq(idx)}
                aria-expanded={isOpen}
                className="w-full p-6 sm:p-7 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
              >
                <span className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-blue-600 dark:text-blue-400' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-6 sm:px-7 pb-6 pt-0 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
