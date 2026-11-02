import React from 'react';
import { ChevronDown } from 'lucide-react';

const FAQS = [
  {
    q: 'Is Trivio free to download and use on Android?',
    a: 'Yes. Trivio is 100% free to download on Android via Google Play. You get full access to all destination guides, category filters, offline caching, and itinerary planning with zero surprise paywalls for essential travel information.',
  },
  {
    q: 'How does Trivio differ from generic chatbots or standard map apps?',
    a: 'Generic AI tools and standard map apps frequently hallucinate places that are closed or pair spots on opposite ends of the city. Trivio uses a deterministic local clustering engine that verifies opening hours, checks aarti closures, factors in real road transit times, and sequences stops with zero backtracking.',
  },
  {
    q: 'Does Trivio work if cellular reception drops in Sahyadri valleys?',
    a: 'Yes. Trivio is built local-first for the realities of the Western Ghats. Your saved wishlist boards and destination guides are cached on-device. When cellular signal drops at fort summits or in rural valleys, all core data and coordinates remain accessible without network errors.',
  },
  {
    q: 'Which transit arrival hubs can I select for multi-day itineraries?',
    a: 'You can choose your exact point of arrival: Nashik Road Railway Station (main rail terminus), Ozar Airport (regional flight hub), or Central Bus Stand (CBS / Thakkar Bazaar). The itinerary sequences your stops geographically from that starting hub.',
  },
  {
    q: 'How does turn-by-turn road navigation work?',
    a: 'Trivio displays point-to-point geographic distances for planning, and provides a direct one-tap button to push exact GPS coordinates into your favorite map app (such as Google Maps) for live directions, road traffic, and navigation.',
  },
  {
    q: 'Are temple dress codes and visiting guidelines included?',
    a: 'Yes. Heritage and pilgrimage sites like Trimbakeshwar Jyotirlinga and Kalaram Mandir provide specific guidance on expected attire (such as traditional dhoti/sari guidelines for inner sanctum puja access) and optimal morning hours to avoid long queues.',
  },
];

export function TrivioFaq() {
  return (
    <section className="w-full px-6 sm:px-10 lg:px-16 py-16 lg:py-24 bg-[#F4F1F8]" id="faq">
      <div className="max-w-4xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-deep-violet mb-2">
            <span className="w-2 h-2 rounded-full bg-signal-lime border border-deep-violet" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-on-surface mb-3">
            Frequently answered questions.
          </h2>
          <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
            Everything you need to know about navigating Nashik with Trivio.
          </p>
        </div>

        <div className="space-y-3.5">
          {FAQS.map((faq) => (
            <details
              key={faq.q}
              className="group bg-white rounded-xl p-5 border border-[#ded9e8] transition-[border-color] hover:border-deep-violet/40"
            >
              <summary className="flex items-center justify-between font-bold text-sm sm:text-base text-on-surface cursor-pointer list-none min-h-[36px]">
                <span>{faq.q}</span>
                <ChevronDown className="w-4 h-4 text-deep-violet shrink-0 transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-3.5 pt-2 text-xs sm:text-sm text-on-surface-variant leading-relaxed font-normal">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
