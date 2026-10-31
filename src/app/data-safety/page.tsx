import { Metadata } from 'next';
import { LegalPageLayout } from '@/components/LegalPageLayout';
import { ShieldCheck, Lock, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Data Safety Sheet: NashikExplore',
  description:
    'Google Play Data Safety Disclosures for NashikExplore. Complete inventory of collected data, transit encryption, and deletion mechanisms.',
  alternates: {
    canonical: '/data-safety',
  },
  openGraph: {
    title: 'Data Safety Sheet: NashikExplore',
    description:
      'Data safety disclosures for NashikExplore matching Google Play console specifications.',
    url: 'https://nashik.sooubh.me/data-safety',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Data Safety Sheet: NashikExplore',
    description:
      'Data safety disclosures for NashikExplore matching Google Play console specifications.',
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
      summary="This page provides a breakdown of data types handled by the NashikExplore mobile application and website, aligned with Google Play Data Safety guidelines."
      toc={toc}
    >
      <section id="google-play-disclosures" className="space-y-3">
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
          1. Google Play Data Safety Declarations
        </h2>
        <p>
          This section outlines our data handling practices aligned with Google Play&apos;s User Data guidelines:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-4">
          <div className="p-5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40">
            <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400 mb-2" />
            <span className="font-bold text-sm text-slate-900 dark:text-white block">Encrypted in Transit</span>
            <span className="text-xs text-slate-600 dark:text-slate-400">All network traffic uses TLS 1.3 protocol.</span>
          </div>

          <div className="p-5 rounded-2xl bg-blue-50 dark:bg-blue-950/40">
            <Lock className="w-5 h-5 text-blue-600 dark:text-blue-400 mb-2" />
            <span className="font-bold text-sm text-slate-900 dark:text-white block">No Data Sold</span>
            <span className="text-xs text-slate-600 dark:text-slate-400">We never sell personal data to data brokers.</span>
          </div>

          <div className="p-5 rounded-2xl bg-amber-50 dark:bg-amber-950/40">
            <CheckCircle className="w-5 h-5 text-amber-600 dark:text-amber-400 mb-2" />
            <span className="font-bold text-sm text-slate-900 dark:text-white block">User Deletion Rights</span>
            <span className="text-xs text-slate-600 dark:text-slate-400">In-app account deletion and email request support.</span>
          </div>
        </div>
      </section>

      <section id="data-table" className="space-y-3">
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
          2. Data Types &amp; Verification Table
        </h2>
        <div data-ui="true" className="overflow-x-auto momentum-scroll bg-white dark:bg-slate-800 rounded-2xl my-4">
          <table className="w-full text-left text-sm min-w-[520px]">
            <thead className="bg-slate-50 dark:bg-slate-900">
              <tr>
                <th className="p-4 font-bold">Data Type</th>
                <th className="p-4 font-bold">Collected / Shared</th>
                <th className="p-4 font-bold">Purpose</th>
                <th className="p-4 font-bold">Optional?</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-4 font-bold">Approximate &amp; Precise Location</td>
                <td className="p-4">Collected on-device (Not shared)</td>
                <td className="p-4">Calculates proximity distance to temples, forts, waterfalls.</td>
                <td className="p-4 text-emerald-600 font-semibold">Yes (Can be denied)</td>
              </tr>
              <tr>
                <td className="p-4 font-bold">Name &amp; Email Address</td>
                <td className="p-4">Collected (Firebase Auth)</td>
                <td className="p-4">Account sign-in, saving wishlists across devices.</td>
                <td className="p-4 text-emerald-600 font-semibold">Yes (Guest mode supported)</td>
              </tr>
              <tr>
                <td className="p-4 font-bold">Purchase History</td>
                <td className="p-4">Processed via RevenueCat / Google Play</td>
                <td className="p-4">Lifetime Premium upgrade verification &amp; ad removal.</td>
                <td className="p-4 text-slate-500 font-semibold">Only upon purchase</td>
              </tr>
              <tr>
                <td className="p-4 font-bold">Crash Logs &amp; Diagnostics</td>
                <td className="p-4">Collected (Firebase Crashlytics)</td>
                <td className="p-4">App performance monitoring &amp; bug fixing.</td>
                <td className="p-4 text-slate-500 font-semibold">Automatic (Anonymized)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="encryption-security" className="space-y-3">
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
          3. Security &amp; Encryption Standards
        </h2>
        <p>
          All communications between your device and Google Cloud Firestore servers occur over encrypted HTTPS / TLS 1.3 channels. User preferences and wishlist boards stored on-device are protected by Android Sandbox security.
        </p>
      </section>

      <section id="erasure-process" className="space-y-3">
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
          4. Account &amp; Data Deletion Mechanisms
        </h2>
        <p>
          In accordance with Google Play&apos;s Account Deletion Requirement, users can delete their entire account and associated data through two methods:
        </p>
        <ol className="list-decimal pl-5 space-y-1.5">
          <li><strong>Inside the App:</strong> Open <em>Profile &gt; Settings &gt; Privacy &amp; Security &gt; Delete Account</em> to delete your Firebase authentication user and Firestore profile records.</li>
          <li><strong>Via Email Request:</strong> Submit an email request via our dedicated <a href="/delete-account" className="text-blue-600 dark:text-blue-400 font-bold hover:underline">Account Deletion Page</a> or email <code className="text-sm bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">support@nashikexplore.com</code> from your registered email address. Requests are verified and processed upon confirmation.</li>
        </ol>
      </section>
    </LegalPageLayout>
  );
}
