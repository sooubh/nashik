import { Metadata } from 'next';
import { LegalPageLayout } from '@/components/LegalPageLayout';

export const metadata: Metadata = {
  title: 'Privacy Policy — Nashik Travel Guide',
  description:
    'Official Privacy Policy for the Nashik Travel Guide Android application and website. Complete transparency regarding data collection, GPS location usage, Firebase Google Sign-In, on-device Hive storage, and account deletion procedures.',
  alternates: {
    canonical: '/privacy-policy',
  },
  openGraph: {
    title: 'Privacy Policy — Nashik Travel Guide',
    description:
      'Official Privacy Policy for the Nashik Travel Guide Android app. Transparent disclosures on data processing, Hive offline database, and user data rights.',
    url: 'https://nashik.sooubh.me/privacy-policy',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy — Nashik Travel Guide',
    description:
      'Official Privacy Policy for the Nashik Travel Guide Android app. Transparent disclosures on data processing and privacy rights.',
  },
};

export default function PrivacyPolicyPage() {
  const toc = [
    { id: 'data-collection', title: 'Data We Collect' },
    { id: 'uncollected-data', title: 'Data We Do Not Collect' },
    { id: 'permissions', title: 'Device Permissions Disclosures' },
    { id: 'storage-security', title: 'Data Storage & Hive Caching' },
    { id: 'third-parties', title: 'Third-Party Networks (AdMob, RevenueCat)' },
    { id: 'deletion-process', title: 'Account Deletion & Data Rights' },
    { id: 'children-privacy', title: "Children's Privacy" },
    { id: 'contact-dpo', title: 'Contact & Policy Updates' },
  ];

  return (
    <LegalPageLayout
      title="Privacy Policy"
      lastUpdated="July 14, 2026"
      summary="This Privacy Policy explains how Nashik Travel Guide processes, stores, and protects your information across the mobile application and website. We prioritize on-device storage with minimal network transmission."
      toc={toc}
    >
      <section id="data-collection" className="space-y-3">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white border-b border-slate-200/60 dark:border-slate-800/60 pb-4 mb-4">
          1. Data We Collect
        </h2>
        <p>
          We only collect data necessary to provide and enhance your travel exploration experience in Nashik. When you interact with our application, the following information may be processed:
        </p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li><strong>Approximate and Precise Location (GPS):</strong> Used exclusively on-device when navigating to calculate travel distances, driving duration estimates, and sort tourist spots by proximity.</li>
          <li><strong>User Authentication Data:</strong> If you choose to sign in via Google Sign-In, Firebase Auth stores your display name, email address, and unique user ID to persist your saved boards and reviews.</li>
          <li><strong>Wishlist & Custom Itineraries:</strong> Stored locally using Hive NoSQL storage on your mobile device for offline accessibility.</li>
          <li><strong>Diagnostic & Crash Data:</strong> Anonymous crash reports and error logs via Firebase Crashlytics to diagnose performance bottlenecks and crashes.</li>
        </ul>
      </section>

      <section id="uncollected-data" className="space-y-3">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white border-b border-slate-200/60 dark:border-slate-800/60 pb-4 mb-4">
          2. Data We Do Not Collect
        </h2>
        <p>
          We uphold strong privacy boundaries. We never collect or harvest:
        </p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>Your contacts, phone logs, or SMS messages.</li>
          <li>Biometric identifiers or camera recordings (unless you deliberately upload an attraction review photo).</li>
          <li>Continuous background tracking when the application is closed or not in active foreground use.</li>
          <li>Financial banking numbers or credit card details (all transactions are securely handled by Google Play Billing via RevenueCat).</li>
        </ul>
      </section>

      <section id="permissions" className="space-y-3">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white border-b border-slate-200/60 dark:border-slate-800/60 pb-4 mb-4">
          3. Device Permissions Disclosures
        </h2>
        <p>
          Under Google Play Console developer guidelines, here are the permissions requested in our manifest:
        </p>
        <div className="overflow-x-auto momentum-scroll border border-slate-200 dark:border-slate-800 rounded-2xl my-4">
          <table className="w-full text-left text-sm min-w-[500px]">
            <thead className="bg-slate-50 dark:bg-slate-850 border-b border-slate-200 dark:border-slate-800">
              <tr>
                <th className="p-3 font-bold">Android Permission</th>
                <th className="p-3 font-bold">Functional Purpose</th>
                <th className="p-3 font-bold">Mandatory?</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
              <tr>
                <td className="p-3 font-mono text-xs">ACCESS_FINE_LOCATION</td>
                <td className="p-3">Calculates accurate Haversine distances to temples, forts, and wineries.</td>
                <td className="p-3 text-amber-600 font-semibold">Optional (Runtime)</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-xs">INTERNET</td>
                <td className="p-3">Fetches cached weather records and latest verified spot directories.</td>
                <td className="p-3 text-emerald-600 font-semibold">Required</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-xs">ACCESS_NETWORK_STATE</td>
                <td className="p-3">Detects connectivity to switch automatically to offline Hive storage mode.</td>
                <td className="p-3 text-emerald-600 font-semibold">Required</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="storage-security" className="space-y-3">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white border-b border-slate-200/60 dark:border-slate-800/60 pb-4 mb-4">
          4. Data Storage &amp; Hive Caching
        </h2>
        <p>
          Our application operates with an offline-first architecture. All destination listings, curated trails, and user custom wishlists are serialized and cached in encrypted on-device Hive databases. Remote requests to Cloud Firestore are encrypted via Transport Layer Security (TLS 1.3).
        </p>
      </section>

      <section id="third-parties" className="space-y-3">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white border-b border-slate-200/60 dark:border-slate-800/60 pb-4 mb-4">
          5. Third-Party Networks
        </h2>
        <p>
          We partner with established infrastructure providers:
        </p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li><strong>Google AdMob:</strong> Serves non-intrusive banner ads to free tier users (completely disabled upon upgrading to the ₹199 lifetime premium tier).</li>
          <li><strong>RevenueCat:</strong> Manages subscription status, receipt verification, and entitlement tokens for lifetime premium purchases.</li>
          <li><strong>Google Maps Platform:</strong> Powers map redirection and location visualizers.</li>
        </ul>
      </section>

      <section id="deletion-process" className="space-y-3">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white border-b border-slate-200/60 dark:border-slate-800/60 pb-4 mb-4">
          6. Account Deletion &amp; Data Rights
        </h2>
        <p>
          You have full authority over your data. You may request complete erasure of your user profile, saved wishlists, and reviews at any time through our <a href="/delete-account" className="text-brand-blue dark:text-brand-light font-bold hover:underline">Dedicated Account Deletion Portal</a>, navigating to <em>Settings &gt; Privacy &gt; Delete Account</em> inside the app, or contacting our support team.
        </p>
      </section>

      <section id="children-privacy" className="space-y-3">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white border-b border-slate-200/60 dark:border-slate-800/60 pb-4 mb-4">
          7. Children&apos;s Privacy
        </h2>
        <p>
          The application does not knowingly collect personal information from children under the age of 13. Specific sections relating to wine tastings include explicit warning advisories indicating Maharashtra&apos;s legal drinking age requirement (25+).
        </p>
      </section>

      <section id="contact-dpo" className="space-y-3">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white border-b border-slate-200/60 dark:border-slate-800/60 pb-4 mb-4">
          8. Contact &amp; Policy Updates
        </h2>
        <p>
          We may update this policy periodically to reflect new features or regulatory requirements. For questions regarding our privacy practices, contact us at:
        </p>
        <p className="font-bold text-slate-900 dark:text-white">
          support@nashikexplore.com
        </p>
      </section>
    </LegalPageLayout>
  );
}
