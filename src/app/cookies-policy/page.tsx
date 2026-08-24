import { Metadata } from 'next';
import { LegalPageLayout } from '@/components/LegalPageLayout';

export const metadata: Metadata = {
  title: 'Cookies & Storage Policy — Nashik Travel Guide',
  description:
    'Official Cookies & Local Storage Policy for Nashik Travel Guide. Details regarding localStorage, Hive NoSQL caching, Google Analytics, and AdMob advertising tokens.',
  alternates: {
    canonical: '/cookies-policy',
  },
  openGraph: {
    title: 'Cookies & Storage Policy — Nashik Travel Guide',
    description:
      'Official Cookies & Local Storage Policy for Nashik Travel Guide. Details on localStorage and Hive storage.',
    url: 'https://nashik.sooubh.me/cookies-policy',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cookies & Storage Policy — Nashik Travel Guide',
    description:
      'Official Cookies & Local Storage Policy for Nashik Travel Guide.',
  },
};

export default function CookiesPolicyPage() {
  const toc = [
    { id: 'what-are-cookies', title: 'What Are Cookies & Storage?' },
    { id: 'how-we-use', title: 'How We Use Local Storage' },
    { id: 'third-party-cookies', title: 'Third-Party Ad & Analytics Tokens' },
    { id: 'managing-preferences', title: 'Managing Storage Preferences' },
  ];

  return (
    <LegalPageLayout
      title="Cookies & Local Storage Policy"
      lastUpdated="July 14, 2026"
      summary="This policy explains how Nashik Travel Guide uses browser cookies, device tokens, and on-device storage (Hive & localStorage) to remember your theme and cached travel boards."
      toc={toc}
    >
      <section id="what-are-cookies" className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-2">
          1. What Are Cookies &amp; Local Storage?
        </h2>
        <p>
          Cookies and local storage tokens are small text files or key-value pairs stored on your device when you visit a website or use a mobile application. They help apps remember user preferences, maintain session state, and operate seamlessly offline.
        </p>
      </section>

      <section id="how-we-use" className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-2">
          2. How We Use Local Storage
        </h2>
        <p>
          We rely primarily on local storage rather than tracking cookies:
        </p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li><strong>Theme Preferences (color-theme):</strong> Stored in <code>localStorage</code> to remember whether you selected Light or Dark Mode.</li>
          <li><strong>Hive Database Boxes:</strong> Stored on your Android phone to cache offline tourist spots, ratings, and custom itineraries.</li>
          <li><strong>Session Tokens:</strong> Maintained via Firebase Auth to keep you signed in securely across app launches.</li>
        </ul>
      </section>

      <section id="third-party-cookies" className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-2">
          3. Third-Party Ad &amp; Analytics Tokens
        </h2>
        <p>
          On the free version of our Android app, Google AdMob may use device advertising identifiers (such as the Google Advertising ID / GAID) to deliver relevant travel ads. Upgrading to the Lifetime Premium tier immediately disables all AdMob integrations.
        </p>
      </section>

      <section id="managing-preferences" className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-2">
          4. Managing Storage Preferences
        </h2>
        <p>
          You can clear your browser storage at any time via your browser settings. In the mobile app, you can reset all offline cached data by selecting <em>Settings &gt; Clear Local Cache</em>.
        </p>
      </section>
    </LegalPageLayout>
  );
}
