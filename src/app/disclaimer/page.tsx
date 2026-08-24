import { Metadata } from 'next';
import { LegalPageLayout } from '@/components/LegalPageLayout';

export const metadata: Metadata = {
  title: 'Disclaimer & Safety Statement — Nashik Travel Guide',
  description:
    'Official Disclaimer Statement for Nashik Travel Guide. Essential disclosures on Western Ghats trekking difficulty (Harihar Fort, Anjaneri), monsoon hazards, temple dress codes, and Maharashtra alcohol laws.',
  alternates: {
    canonical: '/disclaimer',
  },
  openGraph: {
    title: 'Disclaimer & Safety Statement — Nashik Travel Guide',
    description:
      'Crucial travel and safety disclosures for exploring Nashik temples, forts, waterfalls, and wineries.',
    url: 'https://nashikexplore.com/disclaimer',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Disclaimer & Safety Statement — Nashik Travel Guide',
    description:
      'Crucial travel and safety disclosures for exploring Nashik.',
  },
};

export default function DisclaimerPage() {
  const toc = [
    { id: 'general-information', title: 'General Information Purpose' },
    { id: 'hiking-safety', title: 'Trekking & Mountain Safety Warnings' },
    { id: 'temple-timing-rules', title: 'Temple Dress Codes & Timings' },
    { id: 'alcohol-regulations', title: 'Wine Tasting & Maharashtra Drinking Laws' },
    { id: 'maps-gps-accuracy', title: 'GPS Coordinates & Route Precision' },
  ];

  return (
    <LegalPageLayout
      title="Disclaimer Statement"
      lastUpdated="July 14, 2026"
      summary="Please read these crucial travel safety disclosures. Information provided in the app and website is compiled for educational and navigational assistance, but conditions on the ground in Nashik may change."
      toc={toc}
    >
      <section id="general-information" className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-2">
          1. General Information Purpose
        </h2>
        <p>
          All listings, ratings, distance calculations, and routes published by Nashik Travel Guide are provided in good faith for informational and planning purposes only. While our local editorial team verifies details regularly, entry fees, operational hours, and road accessibility are subject to change by local municipal and temple authorities without prior notice.
        </p>
      </section>

      <section id="hiking-safety" className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-2">
          2. Trekking &amp; Mountain Safety Warnings
        </h2>
        <div className="p-4 bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800 rounded-2xl text-amber-900 dark:text-amber-200 text-xs leading-relaxed space-y-2">
          <p className="font-bold">⚠️ CRITICAL TREK SAFETY NOTICE:</p>
          <p>
            Treks like Harihar Fort (80-degree vertical stone steps), Anjaneri, and Brahmagiri involve steep precipices and high physical exertion. During the monsoon season (June to September), heavy fog, mossy rock steps, and flash floods at Dugarwadi Waterfall pose severe risks.
          </p>
          <p>
            Do not attempt technical treks without proper footwear, sufficient drinking water, and local guide advice. Avoid venturing near slippery waterfall edges.
          </p>
        </div>
      </section>

      <section id="temple-timing-rules" className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-2">
          3. Temple Dress Codes &amp; Timings
        </h2>
        <p>
          Spiritual centers including the Trimbakeshwar Shiva Temple and Kalaram Temple enforce traditional dress codes for Garbhagriha / inner sanctum entry (dhoti/kurta for men, saree/salwar for women). VIP darshan passes and special pooja bookings are governed strictly by the Trimbakeshwar Sansthan Trust.
        </p>
      </section>

      <section id="alcohol-regulations" className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-2">
          4. Wine Tasting &amp; Maharashtra Drinking Laws
        </h2>
        <p>
          Under Maharashtra state excise regulations, the legal age for purchasing and consuming wine and alcoholic beverages is <strong>25 years and older</strong>. Wineries including Sula Vineyards and York Winery enforce photo ID verification before admitting guests to tasting rooms.
        </p>
      </section>

      <section id="maps-gps-accuracy" className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-2">
          5. GPS Coordinates &amp; Route Precision
        </h2>
        <p>
          Estimated distances and driving times use the mathematical Haversine algorithm and standard Google Maps API routes. Real-time conditions including ghat road closures, festival processions (e.g. Kumbh Mela or Ram Navami), and monsoon landslides may alter transit times.
        </p>
      </section>
    </LegalPageLayout>
  );
}
