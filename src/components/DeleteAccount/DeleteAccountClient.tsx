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
  Copy,
  Check,
} from 'lucide-react';

export function DeleteAccountClient() {
  const [copied, setCopied] = useState(false);
  const [email, setEmail] = useState('');
  const [reason, setReason] = useState('');
  const [confirmCheckbox, setConfirmCheckbox] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('support@nashikexplore.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleOpenEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !confirmCheckbox) return;

    const subjectLine = `Account Deletion Request: ${email}`;
    const bodyContent = `Hello Support Team,\n\nI would like to request the deletion of my NashikExplore user account.\n\nRegistered Email: ${email}\nReason (optional): ${reason || 'Not specified'}\n\nI confirm that I understand this request will delete my account profile and authentication records.\n\nThank you.`;
    const mailtoUrl = `mailto:support@nashikexplore.com?subject=${encodeURIComponent(subjectLine)}&body=${encodeURIComponent(bodyContent)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <div className="py-24 sm:py-32 px-4 sm:px-6 md:px-8 max-w-5xl mx-auto space-y-12">
      {/* Top Back Nav */}
      <div className="flex items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-1.5 min-h-[44px]"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Homepage</span>
        </Link>

        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-rose-50 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 text-xs font-bold">
          <Trash2 className="w-3.5 h-3.5" />
          <span>Account Deletion</span>
        </div>
      </div>

      {/* Header */}
      <div className="text-left max-w-3xl space-y-3">
        <span className="text-sm font-bold text-rose-600 dark:text-rose-400 block">
          User Data Rights
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
          Request account and data deletion.
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
          You can delete your <strong>NashikExplore</strong> account and associated profile records at any time using the app or via email.
        </p>
      </div>

      {/* 2 Methods Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Method 1: In-App */}
        <div className="p-8 rounded-3xl bg-slate-100 dark:bg-slate-900 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-2xl bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 shrink-0">
                <Smartphone className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 block">
                  Method 1: In-App (Recommended)
                </span>
                <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                  Delete Inside the App
                </h3>
              </div>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
              If you have the <strong>NashikExplore</strong> app installed, you can delete your account directly:
            </p>

            <ol className="list-decimal pl-5 space-y-2 text-sm text-slate-700 dark:text-slate-300 font-medium">
              <li>Open the <strong>NashikExplore</strong> app.</li>
              <li>Go to <strong>Profile / Settings</strong>.</li>
              <li>Select <strong>Privacy &amp; Security</strong>.</li>
              <li>Tap <strong>Delete Account</strong> and follow the confirmation prompts.</li>
            </ol>
          </div>

          <div className="mt-6 pt-4 flex items-center gap-2 text-xs text-emerald-600 dark:text-emerald-400 font-bold">
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            <span>Deletes authentication and user profile document</span>
          </div>
        </div>

        {/* Method 2: Email Request */}
        <div className="p-8 rounded-3xl bg-slate-100 dark:bg-slate-900 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-2xl bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-500 block">
                  Method 2: Support Email
                </span>
                <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                  Email Request
                </h3>
              </div>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
              If you have uninstalled the app or cannot log in, use the form below to prepare an email deletion request to <strong>support@nashikexplore.com</strong>.
            </p>

            <button
              onClick={handleCopyEmail}
              type="button"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-200 dark:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-500" />
                  <span className="text-emerald-600 dark:text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-400" />
                  <span>Copy Support Email</span>
                </>
              )}
            </button>
          </div>

          <div className="mt-6 pt-4 flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-medium">
            <Mail className="w-4 h-4 shrink-0 text-slate-400" />
            <span>Requires verification from your registered account email</span>
          </div>
        </div>
      </div>

      {/* Email Deletion Form */}
      <div className="p-8 sm:p-10 rounded-3xl bg-slate-100 dark:bg-slate-900 space-y-6">
        <h2 className="font-bold text-2xl text-slate-900 dark:text-white tracking-tight">
          Prepare Deletion Request Email
        </h2>
        <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
          Provide your registered account email address. Clicking the button below will open your email client with the subject and body pre-filled.
        </p>

        <form onSubmit={handleOpenEmail} className="space-y-6">
          <div>
            <label htmlFor="delete-email" className="block text-xs font-bold text-slate-500 mb-2">
              Registered Account Email *
            </label>
            <input
              id="delete-email"
              type="email"
              required
              placeholder="user@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-sm focus:outline-none min-h-[46px]"
            />
          </div>

          <div>
            <label htmlFor="delete-reason" className="block text-xs font-bold text-slate-500 mb-2">
              Reason for Deletion (Optional)
            </label>
            <textarea
              id="delete-reason"
              rows={3}
              placeholder="Let us know how we could improve..."
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-sm focus:outline-none"
            />
          </div>

          <div className="flex items-start gap-3">
            <input
              id="confirm-deletion"
              type="checkbox"
              required
              checked={confirmCheckbox}
              onChange={(e) => setConfirmCheckbox(e.target.checked)}
              className="mt-1 w-4 h-4 rounded text-rose-600 focus:ring-rose-500"
            />
            <label htmlFor="confirm-deletion" className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              I understand that submitting this request will permanently delete my NashikExplore profile and authentication records.
            </label>
          </div>

          <button
            type="submit"
            disabled={!email || !confirmCheckbox}
            className="w-full py-4 rounded-xl text-white font-bold text-sm bg-rose-600 hover:bg-rose-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 min-h-[48px] cursor-pointer"
          >
            <Trash2 className="w-4 h-4" />
            <span>Open Email to Request Deletion</span>
          </button>
        </form>
      </div>
    </div>
  );
}
