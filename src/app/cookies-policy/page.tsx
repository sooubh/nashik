import { Metadata } from 'next';
import { LegalPageLayout } from '@/components/LegalPageLayout';

export const metadata: Metadata = {
  title: 'Cookies & Storage Policy — NashikExplore',
  description:
    'Cookies & Local Storage Policy for NashikExplore. Details regarding localStorage and on-device storage.',
  alternates: {
    canonical: '/cookies-policy',
  },
  openGraph: {
    title: 'Cookies & Storage Policy — NashikExplore',
    description:
      'Cookies & Local Storage Policy for NashikExplore.',
    url: 'https://nashik.sooubh.me/cookies-policy',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cookies & Storage Policy — NashikExplore',
    description:
      'Cookies & Local Storage Policy for NashikExplore.',
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
      summary="This policy explains how NashikExplore uses browser local storage and on-device app storage to remember theme preferences and saved travel boards."
      toc={toc}
    >
      <section id="what-are-cookies" className="space-y-3">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white border-b border-slate-200/60 dark:border-slate-800/60 pb-4 mb-4">
          1. What Are Cookies &amp; Local Storage?
        </h2>
        <p>
          Cookies and local storage tokens are small text files or key-value pairs stored on your device when you visit a website or use a mobile application. They help apps remember user preferences, maintain session state, and operate seamlessly offline.
        </p>
      </section>

      <section id="how-we-use" className="space-y-3">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white border-b border-slate-200/60 dark:border-slate-800/60 pb-4 mb-4">
          2. How We Use Local Storage
        </h2>
        <p>
          We rely primarily on local storage rather than tracking cookies:
        </p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li><strong>Theme Preferences (color-theme):</strong> Stored in <code>localStorage</code> to remember whether you selected Light or Dark Mode.</li>
          <li><strong>Local App Storage (Hive):</strong> Stored on your Android phone to save user preferences, search history, and wishlist boards locally.</li>
          <li><strong>Session Tokens:</strong> Maintained via Firebase Auth to keep you signed in securely across app launches.</li>
        </ul>
      </section>

      <section id="third-party-cookies" className="space-y-3">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white border-b border-slate-200/60 dark:border-slate-800/60 pb-4 mb-4">
          3. Third-Party Ad &amp; Analytics Tokens
        </h2>
        <p>
          On the free version of our Android app, Google AdMob may use device advertising identifiers (such as the Google Advertising ID / GAID) to deliver relevant travel ads. Upgrading to the Lifetime Premium tier immediately disables all AdMob integrations.
        </p>
      </section>

      <section id="managing-preferences" className="space-y-3">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white border-b border-slate-200/60 dark:border-slate-800/60 pb-4 mb-4">
          4. Managing Storage Preferences
        </h2>
        <p>
          You can clear your browser storage at any time via your browser settings. In the mobile app, you can reset all offline cached data by selecting <em>Settings &gt; Clear Local Cache</em>.
        </p>
      </section>
    </LegalPageLayout>
  );
}
