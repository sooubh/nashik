import { Metadata } from 'next';
import { LegalPageLayout } from '@/components/LegalPageLayout';

export const metadata: Metadata = {
  title: 'Terms of Use — NashikExplore',
  description:
    'Terms of Use for the NashikExplore application and services. Covers usage guidelines, in-app purchases, travel advisories, and user conduct.',
  alternates: {
    canonical: '/terms-of-use',
  },
  openGraph: {
    title: 'Terms of Use — NashikExplore',
    description:
      'Terms of Use for the NashikExplore application and website.',
    url: 'https://nashik.sooubh.me/terms-of-use',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms of Use — NashikExplore',
    description:
      'Terms of Use for the NashikExplore application and website.',
  },
};

export default function TermsOfUsePage() {
  const toc = [
    { id: 'acceptance', title: 'Acceptance of Terms' },
    { id: 'app-license', title: 'License & Permitted Use' },
    { id: 'purchases-refunds', title: 'In-App Purchases & Upgrades' },
    { id: 'hiking-liabilities', title: 'Trekking & Travel Risk Disclaimers' },
    { id: 'user-reviews', title: 'User Conduct & Reviews' },
    { id: 'intellectual-property', title: 'Intellectual Property' },
    { id: 'modifications', title: 'Governing Law & Amendments' },
  ];

  return (
    <LegalPageLayout
      title="Terms of Use"
      lastUpdated="July 14, 2026"
      summary="These Terms of Use establish the agreement between you and NashikExplore. By downloading, accessing, or using our mobile application or website, you agree to these conditions."
      toc={toc}
    >
      <section id="acceptance" className="space-y-3">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white border-b border-slate-200/60 dark:border-slate-800/60 pb-4 mb-4">
          1. Acceptance of Terms
        </h2>
        <p>
          By creating an account, downloading the Android application, or browsing the NashikExplore website, you acknowledge that you have read, understood, and agree to be bound by these Terms of Use and our Privacy Policy.
        </p>
      </section>

      <section id="app-license" className="space-y-3">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white border-b border-slate-200/60 dark:border-slate-800/60 pb-4 mb-4">
          2. License &amp; Permitted Use
        </h2>
        <p>
          NashikExplore grants you a limited, non-exclusive, non-transferable, and revocable license to access the guide for personal, non-commercial travel planning purposes. You agree not to scrape, reverse-engineer, or redistribute database records without prior written consent.
        </p>
      </section>

      <section id="purchases-refunds" className="space-y-3">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white border-b border-slate-200/60 dark:border-slate-800/60 pb-4 mb-4">
          3. In-App Purchases &amp; Upgrades
        </h2>
        <p>
          Optional premium upgrades are managed through Google Play and RevenueCat. The upgrade removes advertisements and unlocks additional features within the app. Billing, cancellations, and refunds are handled according to Google Play Store terms and policies.
        </p>
      </section>

      <section id="hiking-liabilities" className="space-y-3">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white border-b border-slate-200/60 dark:border-slate-800/60 pb-4 mb-4">
          4. Trekking &amp; Travel Risk Disclaimers
        </h2>
        <p>
          Nashik and the surrounding Western Ghats feature intense topography, seasonal heavy monsoons, and steep rock staircases (including Harihar Fort and Anjaneri). All routes, times, and caution warnings are provided for general reference only.
        </p>
        <p className="font-semibold text-slate-800 dark:text-slate-200">
          Travelers assume all inherent risks associated with hiking, weather changes, road conditions, and water hazards. Always check local forest department advisories before undertaking high-altitude Sahyadri treks.
        </p>
      </section>

      <section id="user-reviews" className="space-y-3">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white border-b border-slate-200/60 dark:border-slate-800/60 pb-4 mb-4">
          5. User Conduct &amp; Reviews
        </h2>
        <p>
          Users may submit ratings, tips, and comments. Submissions must not contain abusive, defamatory, discriminatory, or unlawful content. We reserve the right to moderate, edit, or delete any submission that violates community guidelines.
        </p>
      </section>

      <section id="intellectual-property" className="space-y-3">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white border-b border-slate-200/60 dark:border-slate-800/60 pb-4 mb-4">
          6. Intellectual Property
        </h2>
        <p>
          All logos, branding assets, custom artwork, curated itineraries, and software code are the intellectual property of Nashik Travel Guide. Third-party brand names (such as Sula Vineyards or Trimbakeshwar) are referenced solely for identification and descriptive travel purposes.
        </p>
      </section>

      <section id="modifications" className="space-y-3">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white border-b border-slate-200/60 dark:border-slate-800/60 pb-4 mb-4">
          7. Governing Law &amp; Amendments
        </h2>
        <p>
          These Terms are governed by the laws of Maharashtra, India. Any disputes arising out of the application or website shall be subject to the exclusive jurisdiction of the courts located in Nashik, Maharashtra.
        </p>
      </section>
    </LegalPageLayout>
  );
}
