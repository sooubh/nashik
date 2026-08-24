import { Metadata } from 'next';
import { LegalPageLayout } from '@/components/LegalPageLayout';
import { ShieldCheck, Lock, CheckCircle, Database } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Google Play Data Safety Sheet — Nashik Travel Guide',
  description:
    'Official Google Play Console Data Safety declaration for Nashik Travel Guide. Complete transparency on data collected, encryption in transit, on-device Hive storage, and deletion mechanisms.',
  alternates: {
    canonical: '/data-safety',
  },
  openGraph: {
    title: 'Google Play Data Safety Sheet — Nashik Travel Guide',
    description:
      'Official Google Play Console Data Safety declaration for the Nashik Travel Guide Android application.',
    url: 'https://nashik.sooubh.me/data-safety',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Google Play Data Safety Sheet — Nashik Travel Guide',
    description:
      'Official Google Play Console Data Safety declaration for the Nashik Travel Guide Android application.',
  },
};

export default function DataSafetyPage() {
  const toc = [
    { id: 'google-play-disclosures', title: 'Google Play Data Safety Declarations' },
    { id: 'data-table', title: 'Data Types & Verification Table' },
    { id: 'encryption-security', title: 'Security & Encryption Standards' },
    { id: 'erasure-process', title: 'Account & Data Deletion Mechanisms' },
  ];

  return (
    <LegalPageLayout
      title="Data Safety Sheet"
      lastUpdated="July 14, 2026"
      summary="In full compliance with Google Play Console policies and global privacy regulations, this page provides a comprehensive breakdown of all data handled by the Nashik Travel Guide mobile application."
      toc={toc}
    >
      <section id="google-play-disclosures" className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-2">
          1. Google Play Data Safety Declarations
        </h2>
        <p>
          We declare full compliance with Google Play&apos;s User Data policy. The table below represents our exact disclosures submitted in the Google Play Console:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4 my-4">
          <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200/80 dark:border-emerald-800/80">
            <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400 mb-2" />
            <span className="font-extrabold text-sm text-slate-900 dark:text-white block">Encrypted in Transit</span>
            <span className="text-[11px] text-slate-600 dark:text-slate-400">All network traffic uses TLS 1.3 protocol.</span>
          </div>

          <div className="p-4 rounded-2xl bg-brand-50 dark:bg-brand-950/40 border border-brand-200/80 dark:border-brand-800/80">
            <Lock className="w-5 h-5 text-brand-blue dark:text-brand-light mb-2" />
            <span className="font-extrabold text-sm text-slate-900 dark:text-white block">No Data Sold</span>
            <span className="text-[11px] text-slate-600 dark:text-slate-400">We never sell personal data to data brokers.</span>
          </div>

          <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200/80 dark:border-amber-800/80">
            <CheckCircle className="w-5 h-5 text-amber-600 dark:text-amber-400 mb-2" />
            <span className="font-extrabold text-sm text-slate-900 dark:text-white block">User Deletion Rights</span>
            <span className="text-[11px] text-slate-600 dark:text-slate-400">Instant in-app and web account deletion.</span>
          </div>
        </div>
      </section>

      <section id="data-table" className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-2">
          2. Data Types &amp; Verification Table
        </h2>
        <div className="overflow-x-auto momentum-scroll border border-slate-200 dark:border-slate-800 rounded-xl my-4">
          <table className="w-full text-left text-xs min-w-[520px]">
            <thead className="bg-slate-50 dark:bg-slate-850 border-b border-slate-200 dark:border-slate-800">
              <tr>
                <th className="p-3 font-bold">Data Type</th>
                <th className="p-3 font-bold">Collected / Shared</th>
                <th className="p-3 font-bold">Purpose</th>
                <th className="p-3 font-bold">Optional?</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
              <tr>
                <td className="p-3 font-bold">Approximate &amp; Precise Location</td>
                <td className="p-3">Collected on-device (Not shared)</td>
                <td className="p-3">Calculates proximity distance to temples, forts, waterfalls.</td>
                <td className="p-3 text-emerald-600 font-semibold">Yes (Can be denied)</td>
              </tr>
              <tr>
                <td className="p-3 font-bold">Name &amp; Email Address</td>
                <td className="p-3">Collected (Firebase Auth)</td>
                <td className="p-3">Account sign-in, saving wishlists across devices.</td>
                <td className="p-3 text-emerald-600 font-semibold">Yes (Guest mode supported)</td>
              </tr>
              <tr>
                <td className="p-3 font-bold">Purchase History</td>
                <td className="p-3">Processed via RevenueCat / Google Play</td>
                <td className="p-3">Lifetime Premium upgrade verification &amp; ad removal.</td>
                <td className="p-3 text-slate-500 font-semibold">Only upon purchase</td>
              </tr>
              <tr>
                <td className="p-3 font-bold">Crash Logs &amp; Diagnostics</td>
                <td className="p-3">Collected (Firebase Crashlytics)</td>
                <td className="p-3">App performance monitoring &amp; bug fixing.</td>
                <td className="p-3 text-slate-500 font-semibold">Automatic (Anonymized)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="encryption-security" className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-2">
          3. Security &amp; Encryption Standards
        </h2>
        <p>
          All communications between your device and Google Cloud Firestore servers occur over encrypted HTTPS / TLS 1.3 channels. User preferences and wishlist boards stored on-device are protected by Android Sandbox security.
        </p>
      </section>

      <section id="erasure-process" className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-2">
          4. Account &amp; Data Deletion Mechanisms
        </h2>
        <p>
          In accordance with Google Play&apos;s Account Deletion Requirement, users can delete their entire account and associated data through two methods:
        </p>
        <ol className="list-decimal pl-5 space-y-1.5">
          <li><strong>Inside the App:</strong> Open <em>Profile &gt; Settings &gt; Security &gt; Delete Account</em> to permanently erase all Firestore user records and local Hive caches immediately.</li>
          <li><strong>Via Web Portal:</strong> Submit a deletion request on our dedicated <a href="/delete-account" className="text-brand-blue dark:text-brand-light font-bold hover:underline">Account Deletion Page</a> or email <code className="text-xs bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">support@nashikexplore.com</code> with your account email. Deletion is executed within 48 business hours.</li>
        </ol>
      </section>
    </LegalPageLayout>
  );
}
