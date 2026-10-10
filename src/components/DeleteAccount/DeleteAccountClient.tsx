'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Trash2,
  ArrowLeft,
  Smartphone,
  Mail,
  Lock,
  Database,
  CheckCircle2,
} from 'lucide-react';

export function DeleteAccountClient() {
  const [email, setEmail] = useState('');
  const [reason, setReason] = useState('');
  const [confirmCheckbox, setConfirmCheckbox] = useState(false);

  const handleOpenEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !confirmCheckbox) return;

    const subjectLine = `Account Deletion Request - ${email}`;
    const bodyContent = `Hello Support Team,\n\nI would like to request the deletion of my NashikExplore user account.\n\nRegistered Email: ${email}\nReason (optional): ${reason || 'Not specified'}\n\nI confirm that I understand this request will delete my account profile and authentication records.\n\nThank you.`;
    const mailtoUrl = `mailto:support@nashikexplore.com?subject=${encodeURIComponent(subjectLine)}&body=${encodeURIComponent(bodyContent)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <div className="py-20 sm:py-28 px-4 sm:px-6 md:px-8 max-w-5xl mx-auto space-y-8 sm:space-y-10">
      {/* Top Back Nav */}
      <div className="flex items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-brand-blue dark:hover:text-brand-light transition-colors py-1.5 min-h-[44px]"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Homepage</span>
        </Link>

        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-rose-50 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 text-xs font-bold border border-rose-200/60 dark:border-rose-800/60">
          <Trash2 className="w-3.5 h-3.5" />
          <span>Account Deletion</span>
        </div>
      </div>

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
        <span className="text-xs uppercase font-extrabold tracking-widest text-rose-600 dark:text-rose-400 mb-2 block">
          User Data Rights
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-3 sm:mb-4">
          Request Account &amp; Data Deletion
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
          You can delete your <strong>NashikExplore</strong> account and associated profile records at any time using the app or via email.
        </p>
      </div>

      {/* 2 Methods Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Method 1: In-App */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200/60 dark:border-slate-800/60 shadow-card flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-brand-50 dark:bg-brand-950/60 text-brand-blue dark:text-brand-light shrink-0">
                <Smartphone className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 block">
                  Method 1 • In-App (Recommended)
                </span>
                <h3 className="font-extrabold text-base sm:text-lg text-slate-900 dark:text-white">
                  Delete Inside the App
                </h3>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
              If you have the <strong>NashikExplore</strong> app installed, you can delete your account directly:
            </p>

            <ol className="list-decimal pl-5 space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium">
              <li>Open the <strong>NashikExplore</strong> app.</li>
              <li>Go to <strong>Profile / Settings</strong>.</li>
              <li>Select <strong>Privacy &amp; Security</strong>.</li>
              <li>Tap <strong>Delete Account</strong> and follow the confirmation prompts.</li>
            </ol>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2 text-xs text-emerald-600 dark:text-emerald-400 font-bold">
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            <span>Deletes authentication and user profile document</span>
          </div>
        </div>

        {/* Method 2: Email Request */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200/60 dark:border-slate-800/60 shadow-card flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400 block">
                  Method 2 • Email Request
                </span>
                <h3 className="font-extrabold text-base sm:text-lg text-slate-900 dark:text-white">
                  Request Deletion via Email
                </h3>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
              If you have uninstalled the app, fill in your registered email below to compose a deletion request to <strong>support@nashikexplore.com</strong>:
            </p>

            <form onSubmit={handleOpenEmail} className="space-y-4">
              <div>
                <label htmlFor="delete-email" className="block text-xs font-extrabold uppercase tracking-wider text-slate-500 mb-1.5">
                  Registered Account Email *
                </label>
                <input
                  id="delete-email"
                  type="email"
                  required
                  placeholder="your-account@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-surface-50 dark:bg-slate-850 text-slate-800 dark:text-slate-200 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-rose-500 min-h-[46px]"
                />
              </div>

              <div>
                <label htmlFor="delete-reason" className="block text-xs font-extrabold uppercase tracking-wider text-slate-500 mb-1.5">
                  Reason for Deletion (Optional)
                </label>
                <input
                  id="delete-reason"
                  type="text"
                  placeholder="e.g. No longer visiting Nashik"
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-surface-50 dark:bg-slate-850 text-slate-800 dark:text-slate-200 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-rose-500 min-h-[44px]"
                />
              </div>

              <label className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-400 cursor-pointer select-none pt-1">
                <input
                  type="checkbox"
                  required
                  checked={confirmCheckbox}
                  onChange={(e) => setConfirmCheckbox(e.target.checked)}
                  className="mt-0.5 h-4 w-4 rounded border-slate-300 text-rose-600 focus:ring-rose-500 shrink-0"
                />
                <span>
                  I confirm that I am requesting the deletion of my user account and associated personal data.
                </span>
              </label>

              <button
                type="submit"
                disabled={!confirmCheckbox || !email}
                className="w-full py-3.5 rounded-xl text-white font-extrabold text-xs sm:text-sm bg-rose-600 hover:bg-rose-700 transition-all shadow-md shadow-rose-600/20 flex items-center justify-center gap-2 disabled:opacity-50 min-h-[46px] cursor-pointer active:scale-[0.98]"
              >
                <Mail className="w-4 h-4" />
                <span>Compose Deletion Request in Email</span>
              </button>

              <p className="text-[11px] text-center text-slate-500 dark:text-slate-400">
                Clicking opens your email app. Requests sent to <a href="mailto:support@nashikexplore.com" className="text-brand-blue underline">support@nashikexplore.com</a> are verified from the registered address.
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Data Disclosure Transparency Cards */}
      <div className="p-6 sm:p-8 rounded-2xl bg-surface-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 shadow-card space-y-6">
        <h2 className="font-extrabold text-lg sm:text-xl text-slate-900 dark:text-white tracking-tight">
          What Data Is Deleted?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 sm:p-5 rounded-xl bg-white dark:bg-slate-850 border border-slate-200/60 dark:border-slate-800 space-y-2">
            <div className="p-2 rounded-lg bg-rose-50 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 w-fit">
              <Database className="w-4 h-4" />
            </div>
            <h4 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">
              Account Authentication &amp; Profile
            </h4>
            <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Your login record in Firebase Auth and your main user profile document in Firestore are deleted.
            </p>
          </div>

          <div className="p-4 sm:p-5 rounded-xl bg-white dark:bg-slate-850 border border-slate-200/60 dark:border-slate-800 space-y-2">
            <div className="p-2 rounded-lg bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 w-fit">
              <Lock className="w-4 h-4" />
            </div>
            <h4 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">
              Local Device Storage
            </h4>
            <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              In-app deletion clears the cached profile on your phone. You can also clear app storage from Android settings.
            </p>
          </div>

          <div className="p-4 sm:p-5 rounded-xl bg-white dark:bg-slate-850 border border-slate-200/60 dark:border-slate-800 space-y-2">
            <div className="p-2 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 w-fit">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <h4 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">
              Request Verification
            </h4>
            <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              In-app requests execute immediately. For email requests, we confirm ownership from the registered address before deleting records.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
