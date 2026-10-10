'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Mail, MapPin, Send, ArrowLeft, HelpCircle } from 'lucide-react';

export function ContactClient() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: '',
  });

  const handleOpenEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const subjectLine = `[NashikExplore] ${formData.subject}${formData.name ? ` from ${formData.name}` : ''}`;
    const bodyContent = `${formData.message}\n\n---\nSender: ${formData.name || 'Not specified'}\nEmail: ${formData.email || 'Not specified'}`;
    const mailtoUrl = `mailto:support@nashikexplore.com?subject=${encodeURIComponent(subjectLine)}&body=${encodeURIComponent(bodyContent)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <div className="py-20 sm:py-28 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto space-y-8 sm:space-y-12">
      {/* Top Back Link */}
      <div className="flex items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-brand-blue dark:hover:text-brand-light transition-colors py-1.5 min-h-[44px]"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Homepage</span>
        </Link>

        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-xs text-slate-600 dark:text-slate-400 font-semibold">
          <Mail className="w-3.5 h-3.5" />
          <span>Support Contact</span>
        </div>
      </div>

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
        <span className="text-xs uppercase font-extrabold tracking-widest text-brand-blue dark:text-brand-400 mb-2 block">
          Get In Touch
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-3 sm:mb-4">
          Contact Support
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
          Have questions about spots, feedback on the app, or suggestions? Reach out to us directly.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        {/* Left Column: Direct Info Cards */}
        <div className="lg:col-span-5 space-y-4 sm:space-y-6">
          <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200/60 dark:border-slate-800/60 shadow-card space-y-5 sm:space-y-6">
            <h2 className="font-extrabold text-lg sm:text-xl text-slate-900 dark:text-white tracking-tight">
              Support Channel
            </h2>

            <div className="space-y-4 sm:space-y-5">
              <div className="flex items-start gap-3.5 sm:gap-4">
                <div className="p-2.5 sm:p-3 rounded-xl bg-brand-50 dark:bg-brand-950/60 text-brand-blue dark:text-brand-light shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="block text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-400">
                    Official Email
                  </span>
                  <a
                    href="mailto:support@nashikexplore.com"
                    className="font-extrabold text-sm sm:text-base text-slate-900 dark:text-slate-100 hover:text-brand-blue dark:hover:text-brand-light transition-colors block truncate"
                  >
                    support@nashikexplore.com
                  </a>
                  <span className="block text-[10px] sm:text-[11px] text-slate-500 mt-0.5">
                    For feedback, reports, and inquiries
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3.5 sm:gap-4">
                <div className="p-2.5 sm:p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-400">
                    Location
                  </span>
                  <span className="font-extrabold text-sm sm:text-base text-slate-900 dark:text-slate-100 block">
                    Nashik, Maharashtra
                  </span>
                  <span className="block text-[10px] sm:text-[11px] text-slate-500 mt-0.5">
                    India
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl bg-brand-50/60 dark:bg-brand-950/40 border border-brand-200/60 dark:border-brand-800/60 flex items-center justify-between gap-3">
            <div>
              <h3 className="font-extrabold text-xs sm:text-sm text-slate-900 dark:text-white flex items-center gap-1.5">
                <HelpCircle className="w-4 h-4 text-brand-blue" />
                <span>Frequently Asked Questions</span>
              </h3>
              <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                Check our common questions and answers.
              </p>
            </div>
            <Link
              href="/#faq"
              className="px-4 py-2 rounded-xl bg-white dark:bg-slate-900 text-brand-blue dark:text-brand-light font-bold text-xs shadow-soft-xs hover:shadow-soft-sm border border-slate-200/60 dark:border-slate-800/60 hover:scale-105 transition-all shrink-0 min-h-[40px] flex items-center justify-center"
            >
              View FAQ
            </Link>
          </div>
        </div>

        {/* Right Column: Compose Email */}
        <div className="lg:col-span-7 bg-white dark:bg-slate-900/80 border border-slate-200/60 dark:border-slate-800/60 p-6 sm:p-10 rounded-2xl shadow-card">
          <h2 className="font-extrabold text-xl sm:text-2xl text-slate-900 dark:text-white tracking-tight mb-1 sm:mb-2">
            Send an Email
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mb-6 sm:mb-8">
            Compose your message below. Clicking the button will open your device&apos;s email client to send directly to <strong>support@nashikexplore.com</strong>.
          </p>

          <form onSubmit={handleOpenEmail} className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label htmlFor="contact-name" className="block text-xs font-extrabold uppercase tracking-wider text-slate-500 mb-1.5 sm:mb-2">
                  Your Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="e.g. Rahul Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 sm:py-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-surface-50 dark:bg-slate-850 text-slate-800 dark:text-slate-200 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue min-h-[46px]"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-xs font-extrabold uppercase tracking-wider text-slate-500 mb-1.5 sm:mb-2">
                  Your Email Address
                </label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder="name@domain.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 sm:py-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-surface-50 dark:bg-slate-850 text-slate-800 dark:text-slate-200 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue min-h-[46px]"
                />
              </div>
            </div>

            <div>
              <label htmlFor="contact-subject" className="block text-xs font-extrabold uppercase tracking-wider text-slate-500 mb-1.5 sm:mb-2">
                Subject
              </label>
              <select
                id="contact-subject"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-4 py-3 sm:py-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-surface-50 dark:bg-slate-850 text-slate-800 dark:text-slate-200 text-base sm:text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-brand-blue min-h-[46px]"
              >
                <option value="General Inquiry">General App Inquiry</option>
                <option value="Spot Submission">Suggest a New Attraction</option>
                <option value="Correction">Report Inaccurate Timing / Details</option>
                <option value="Billing Support">Subscription / Billing Support</option>
                <option value="Data Deletion">Data Deletion Request</option>
              </select>
            </div>

            <div>
              <label htmlFor="contact-message" className="block text-xs font-extrabold uppercase tracking-wider text-slate-500 mb-1.5 sm:mb-2">
                Message Content *
              </label>
              <textarea
                id="contact-message"
                rows={5}
                required
                placeholder="Please describe your question or feedback..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 sm:py-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-surface-50 dark:bg-slate-850 text-slate-800 dark:text-slate-200 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 sm:py-4 rounded-xl text-white font-extrabold text-sm sm:text-base bg-brand-blue hover:bg-brand-700 transition-all shadow-glow-sm flex items-center justify-center gap-2 active:scale-[0.99] min-h-[48px] cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Open in Email Client</span>
            </button>

            <p className="text-[11px] text-center text-slate-500 dark:text-slate-400">
              Opens your email client to send an email to <a href="mailto:support@nashikexplore.com" className="text-brand-blue underline">support@nashikexplore.com</a>.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
