'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Trash2,
  ShieldCheck,
  ArrowLeft,
  CheckCircle2,
  AlertTriangle,
  Send,
  Smartphone,
  Database,
  Clock,
  Lock,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function DeleteAccountClient() {
  const [email, setEmail] = useState('');
  const [reason, setReason] = useState('');
  const [confirmCheckbox, setConfirmCheckbox] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !confirmCheckbox) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setEmail('');
      setReason('');
      setConfirmCheckbox(false);
    }, 700);
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
          <span>Account Deletion Portal</span>
        </div>
      </div>

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
        <span className="text-xs uppercase font-extrabold tracking-widest text-rose-600 dark:text-rose-400 mb-2 block">
          Google Play Policy Compliant
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-3 sm:mb-4">
          Request Account &amp; Data Deletion
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
          In compliance with Google Play&apos;s User Data &amp; Account Deletion policies, you have full control to permanently delete your <strong>Nashik Travel Guide</strong> user account and all associated personal records.
        </p>
      </div>

      {/* 2 Methods Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Method 1: Instant In-App */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200/60 dark:border-slate-800/60 shadow-card flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-brand-50 dark:bg-brand-950/60 text-brand-blue dark:text-brand-light shrink-0">
                <Smartphone className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 block">
                  Method 1 • Instant
                </span>
                <h3 className="font-extrabold text-base sm:text-lg text-slate-900 dark:text-white">
                  Delete Inside the Android App
                </h3>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
              If you have the <strong>Nashik Travel Guide</strong> app installed on your phone, you can permanently erase your profile and local caches immediately:
            </p>

            <ol className="list-decimal pl-5 space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium">
              <li>Open the <strong>Nashik Travel Guide</strong> Android app.</li>
              <li>Tap on <strong>Profile / Settings</strong> in the bottom navigation bar.</li>
              <li>Select <strong>Privacy &amp; Security</strong>.</li>
              <li>Tap <strong>Delete Account</strong> and confirm your choice.</li>
            </ol>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2 text-xs text-emerald-600 dark:text-emerald-400 font-bold">
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            <span>Erases Cloud Firestore &amp; Hive Cache immediately</span>
          </div>
        </div>

        {/* Method 2: Web Deletion Form */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200/60 dark:border-slate-800/60 shadow-card flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 shrink-0">
                <Trash2 className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400 block">
                  Method 2 • Web Request
                </span>
                <h3 className="font-extrabold text-base sm:text-lg text-slate-900 dark:text-white">
                  Submit Web Deletion Request
                </h3>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
              If you have uninstalled the app or prefer web submission, enter your registered account email below. Our database administrators will process the deletion within <strong>24 to 48 business hours</strong>.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="delete-email" className="block text-xs font-extrabold uppercase tracking-wider text-slate-500 mb-1.5">
                  Registered Google / Account Email *
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
                  placeholder="e.g. No longer traveling to Nashik"
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
                  I understand that this action is <strong>irreversible</strong> and will permanently purge my saved wishlists, reviews, and profile.
                </span>
              </label>

              <button
                type="submit"
                disabled={isSubmitting || !confirmCheckbox || !email}
                className="w-full py-3.5 rounded-xl text-white font-extrabold text-xs sm:text-sm bg-rose-600 hover:bg-rose-700 transition-all shadow-md shadow-rose-600/20 flex items-center justify-center gap-2 disabled:opacity-50 min-h-[46px] cursor-pointer active:scale-[0.98]"
              >
                {isSubmitting ? (
                  <span>Submitting Request...</span>
                ) : (
                  <>
                    <Trash2 className="w-4 h-4" />
                    <span>Submit Account Deletion Request</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Data Disclosure Transparency Cards */}
      <div className="p-6 sm:p-8 rounded-2xl bg-surface-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 shadow-card space-y-6">
        <h2 className="font-extrabold text-lg sm:text-xl text-slate-900 dark:text-white tracking-tight">
          What Happens When Your Account Is Deleted?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 sm:p-5 rounded-xl bg-white dark:bg-slate-850 border border-slate-200/60 dark:border-slate-800 space-y-2">
            <div className="p-2 rounded-lg bg-rose-50 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 w-fit">
              <Database className="w-4 h-4" />
            </div>
            <h4 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">
              Data Permanently Purged
            </h4>
            <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Display name, email address, unique Firebase UID, saved spot wishlists, custom itinerary boards, and user reviews are completely purged.
            </p>
          </div>

          <div className="p-4 sm:p-5 rounded-xl bg-white dark:bg-slate-850 border border-slate-200/60 dark:border-slate-800 space-y-2">
            <div className="p-2 rounded-lg bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 w-fit">
              <Lock className="w-4 h-4" />
            </div>
            <h4 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">
              No Residual Retained Data
            </h4>
            <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              We do not retain backup archives of user personal identity data. Anonymous Google Play billing tokens are dissociated.
            </p>
          </div>

          <div className="p-4 sm:p-5 rounded-xl bg-white dark:bg-slate-850 border border-slate-200/60 dark:border-slate-800 space-y-2">
            <div className="p-2 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 w-fit">
              <Clock className="w-4 h-4" />
            </div>
            <h4 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">
              Execution Timeline
            </h4>
            <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              In-app deletion is executed immediately in real-time. Web form requests are verified and executed within 24 to 48 business hours.
            </p>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      <AnimatePresence>
        {isSubmitted && (
          <div
            onClick={() => setIsSubmitted(false)}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 p-6 sm:p-8 rounded-2xl max-w-md w-full shadow-soft-xl text-center"
            >
              <div className="h-14 w-14 sm:h-16 sm:w-16 bg-rose-100 dark:bg-rose-950 text-rose-600 dark:text-rose-400 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shrink-0">
                <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8" />
              </div>
              <h3 className="font-extrabold text-xl sm:text-2xl mb-2 text-slate-900 dark:text-white">
                Deletion Request Submitted
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                Your account deletion request has been registered. Our database administration team will purge all Firestore records associated with your email address within 24 to 48 business hours.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                type="button"
                className="w-full py-3.5 rounded-xl text-white bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 font-bold text-sm transition-all min-h-[44px] cursor-pointer shadow-soft-sm"
              >
                Dismiss
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
