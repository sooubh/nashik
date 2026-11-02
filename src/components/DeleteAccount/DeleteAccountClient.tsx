'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Trash2,
  ArrowLeft,
  Smartphone,
  Mail,
  CheckCircle2,
  Copy,
  Check,
} from 'lucide-react';
import { SiteNav } from '@/components/SiteNav';
import { SiteFooter } from '@/components/SiteFooter';
import { SITE_CONFIG } from '@/config/site';

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

    const subjectLine = `[${SITE_CONFIG.name}] Account Deletion Request: ${email}`;
    const bodyContent = `Hello Support Team,\n\nI would like to request the deletion of my ${SITE_CONFIG.name} user account.\n\nRegistered Email: ${email}\nReason (optional): ${reason || 'Not specified'}\n\nI confirm that I understand this request will delete my account profile and authentication records.\n\nThank you.`;
    const mailtoUrl = `mailto:${SITE_CONFIG.supportEmail}?subject=${encodeURIComponent(subjectLine)}&body=${encodeURIComponent(bodyContent)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <div className="min-h-[100dvh] bg-paper flex flex-col justify-between">
      <SiteNav />

      <main className="flex-1 pt-24 sm:pt-28 pb-12 sm:pb-16 px-4 sm:px-8 lg:px-12 max-w-5xl mx-auto w-full space-y-12">
        {/* Top Back Nav & Badge */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-deep-violet hover:underline py-1.5"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Trivio Home</span>
          </Link>

          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-deep-violet/10 text-deep-violet text-xs font-semibold">
            <Trash2 className="w-3.5 h-3.5" />
            <span>Account Deletion</span>
          </div>
        </div>

        {/* Header */}
        <div className="text-left max-w-2xl space-y-3">
          <span className="font-editorial italic text-base text-deep-violet block">
            User Data Rights
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-on-surface leading-tight">
            Request account and data deletion.
          </h1>
          <p className="text-on-surface-variant text-base sm:text-lg leading-relaxed">
            You can delete your <strong>Trivio</strong> account and associated profile records at any time using the app or via email.
          </p>
        </div>

        {/* 2 Methods Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Method 1: In-App */}
          <div className="p-6 sm:p-8 rounded-card bg-[#F4F1F8] border border-[#ded9e8] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-2xl bg-deep-violet/10 text-deep-violet shrink-0">
                  <Smartphone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-deep-violet block">
                    Method 1: In-App (Recommended)
                  </span>
                  <h3 className="font-bold text-lg text-on-surface">
                    Delete Inside the App
                  </h3>
                </div>
              </div>

              <p className="text-sm text-on-surface-variant leading-relaxed mb-4">
                If you have the <strong>Trivio</strong> app installed, you can delete your account directly:
              </p>

              <ol className="list-decimal pl-5 space-y-2 text-sm text-on-surface font-medium">
                <li>Open the <strong>Trivio</strong> app.</li>
                <li>Go to <strong>Profile / Settings</strong>.</li>
                <li>Select <strong>Privacy &amp; Security</strong>.</li>
                <li>Tap <strong>Delete Account</strong> and follow the confirmation prompts.</li>
              </ol>
            </div>

            <div className="mt-6 pt-1 flex items-center gap-2 text-xs text-deep-violet font-semibold">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>Deletes authentication and user profile document</span>
            </div>
          </div>

          {/* Method 2: Email Request */}
          <div className="p-6 sm:p-8 rounded-card bg-[#F4F1F8] border border-[#ded9e8] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-2xl bg-deep-violet/10 text-deep-violet shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-on-surface-variant block">
                    Method 2: Support Email
                  </span>
                  <h3 className="font-bold text-lg text-on-surface">
                    Email Request
                  </h3>
                </div>
              </div>

              <p className="text-sm text-on-surface-variant leading-relaxed mb-4">
                If you have uninstalled the app or cannot log in, use the form below to prepare an email deletion request to <strong>support@nashikexplore.com</strong>.
              </p>

              <button
                onClick={handleCopyEmail}
                type="button"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#ded9e8] text-xs font-semibold text-deep-violet hover:bg-[#ded9e8] transition-colors cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-deep-violet" />
                    <span>Copy Support Email</span>
                  </>
                )}
              </button>
            </div>

            <div className="mt-6 pt-1 flex items-center gap-2 text-xs text-on-surface-variant font-medium">
              <Mail className="w-4 h-4 shrink-0 text-deep-violet" />
              <span>Requires verification from your registered account email</span>
            </div>
          </div>
        </div>

        {/* Email Deletion Form */}
        <div className="p-6 sm:p-8 rounded-card bg-[#F4F1F8] border border-[#ded9e8] space-y-5">
          <h2 className="font-bold text-2xl text-on-surface tracking-tight mb-1">
            Prepare Deletion Request Email
          </h2>
          <p className="text-xs text-on-surface-variant leading-relaxed">
            Provide your registered account email address. Clicking the button below will open your email client with the subject and body pre-filled.
          </p>

          <form onSubmit={handleOpenEmail} className="space-y-5">
            <div>
              <label htmlFor="delete-email" className="block text-xs font-semibold text-on-surface mb-1.5">
                Registered Account Email *
              </label>
              <input
                id="delete-email"
                type="email"
                required
                placeholder="user@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#ded9e8] text-on-surface text-sm focus:outline-none focus:border-deep-violet"
              />
            </div>

            <div>
              <label htmlFor="delete-reason" className="block text-xs font-semibold text-on-surface mb-1.5">
                Reason for Deletion (Optional)
              </label>
              <textarea
                id="delete-reason"
                rows={3}
                placeholder="Let us know how we could improve..."
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#ded9e8] text-on-surface text-sm focus:outline-none focus:border-deep-violet"
              />
            </div>

            <div className="flex items-start gap-3">
              <input
                id="confirm-deletion"
                type="checkbox"
                required
                checked={confirmCheckbox}
                onChange={(e) => setConfirmCheckbox(e.target.checked)}
                className="mt-1 w-4 h-4 rounded text-deep-violet focus:ring-deep-violet accent-deep-violet"
              />
              <label htmlFor="confirm-deletion" className="text-xs text-on-surface-variant leading-relaxed">
                I understand that submitting this request will permanently delete my user account and authentication records.
              </label>
            </div>

            <button
              type="submit"
              disabled={!email || !confirmCheckbox}
              className="w-full py-3.5 rounded-full text-white font-bold text-sm bg-deep-violet hover:bg-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer active:scale-95"
            >
              <Trash2 className="w-4 h-4" />
              <span>Open Email to Request Deletion</span>
            </button>
          </form>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
