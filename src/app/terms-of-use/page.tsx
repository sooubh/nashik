import { Metadata } from 'next';
import { LegalPageLayout } from '@/components/LegalPageLayout';

export const metadata: Metadata = {
  title: 'Terms of Use - Nashik Travel Guide',
  description:
    'Official Terms of Use for the Nashik Travel Guide application. Covers service guidelines, user conduct, intellectual property, in-app purchases, and disclaimer of travel liabilities.',
};

export default function TermsOfUsePage() {
  const toc = [
    { id: 'acceptance', title: 'Acceptance of Terms' },
    { id: 'app-license', title: 'License & Permitted Use' },
    { id: 'purchases-refunds', title: 'Lifetime Tier & Purchases' },
    { id: 'hiking-liabilities', title: 'Trekking & Travel Risk Disclaimers' },
    { id: 'user-reviews', title: 'User Conduct & Reviews' },
    { id: 'intellectual-property', title: 'Intellectual Property' },
    { id: 'modifications', title: 'Governing Law & Amendments' },
  ];

  return (
    <LegalPageLayout
      title="Terms of Use"
      lastUpdated="July 14, 2026"
      summary="These Terms of Use establish the legally binding agreement between you and Nashik Travel Guide. By downloading, accessing, or using our mobile application or website, you agree to these conditions."
      toc={toc}
    >
      <section id="acceptance" className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-2">
          1. Acceptance of Terms
        </h2>
        <p>
          By creating an account, downloading the Android application, or browsing the Nashik Travel Guide website, you acknowledge that you have read, understood, and agree to be bound by these Terms of Use and our Privacy Policy.
        </p>
      </section>

      <section id="app-license" className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-2">
          2. License & Permitted Use
        </h2>
        <p>
          Nashik Travel Guide grants you a limited, non-exclusive, non-transferable, and revocable license to access the guide for personal, non-commercial travel planning purposes. You agree not to scrape, reverse-engineer, or redistribute database records without prior written consent.
        </p>
      </section>

      <section id="purchases-refunds" className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-2">
          3. Lifetime Tier & In-App Purchases
        </h2>
        <p>
          The ₹199 Lifetime Premium upgrade is a one-time purchase managed through the Google Play Store and RevenueCat. It permanently removes banner ads, enables unlimited itinerary saves, and activates full offline map packages on your verified Google account.
        </p>
      </section>

      <section id="hiking-liabilities" className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-2">
          4. Trekking & Travel Risk Disclaimers
        </h2>
        <p>
          Nashik and the surrounding Western Ghats feature intense topography, seasonal heavy monsoons, and steep rock staircases (including Harihar Fort and Anjaneri). All routes, times, and caution warnings are provided for general reference only.
        </p>
        <p className="font-semibold text-slate-800 dark:text-slate-200">
          Travelers assume all inherent risks associated with hiking, weather changes, road conditions, and water hazards. Always check local forest department advisories before undertaking high-altitude Sahyadri treks.
        </p>
      </section>

      <section id="user-reviews" className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-2">
          5. User Conduct & Reviews
        </h2>
        <p>
          Users may submit ratings, tips, and comments. Submissions must not contain abusive, defamatory, discriminatory, or unlawful content. We reserve the right to moderate, edit, or delete any submission that violates community guidelines.
        </p>
      </section>

      <section id="intellectual-property" className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-2">
          6. Intellectual Property
        </h2>
        <p>
          All logos, branding assets, custom artwork, curated itineraries, and software code are the intellectual property of Nashik Travel Guide. Third-party brand names (such as Sula Vineyards or Trimbakeshwar) are referenced solely for identification and descriptive travel purposes.
        </p>
      </section>

      <section id="modifications" className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-2">
          7. Governing Law & Amendments
        </h2>
        <p>
          These Terms are governed by the laws of Maharashtra, India. Any disputes arising out of the application or website shall be subject to the exclusive jurisdiction of the courts located in Nashik, Maharashtra.
        </p>
      </section>
    </LegalPageLayout>
  );
}
