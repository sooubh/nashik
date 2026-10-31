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
    <div className="py-24 sm:py-32 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto space-y-12">
      {/* Top Back Link */}
      <div className="flex items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-1.5 min-h-[44px]"
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
      <div className="text-left max-w-3xl space-y-3">
        <span className="text-sm font-bold text-blue-600 dark:text-blue-400 block">
          Support Inbox
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
          Contact support.
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
          Have questions about spots, feedback on the app, or corrections? Reach out to us directly.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Info Cards */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-8 rounded-3xl bg-slate-100 dark:bg-slate-900 space-y-6">
            <h2 className="font-bold text-xl text-slate-900 dark:text-white tracking-tight">
              Direct Channels
            </h2>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="block text-xs font-bold text-slate-400">
                    Official Email
                  </span>
                  <a
                    href="mailto:support@nashikexplore.com"
                    className="font-bold text-base text-slate-900 dark:text-slate-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors block truncate"
                  >
                    support@nashikexplore.com
                  </a>
                  <span className="block text-xs text-slate-500 mt-0.5">
                    For feedback, reports, and inquiries
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs font-bold text-slate-400">
                    Location
                  </span>
                  <span className="font-bold text-base text-slate-900 dark:text-slate-100 block">
                    Nashik, Maharashtra
                  </span>
                  <span className="block text-xs text-slate-500 mt-0.5">
                    India
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-blue-50 dark:bg-blue-950/40 flex items-center justify-between gap-3">
            <div>
              <h3 className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-1.5">
                <HelpCircle className="w-4 h-4 text-blue-600" />
                <span>Privacy &amp; Data Rights</span>
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                Learn how your data and preferences are handled.
              </p>
            </div>
            <Link
              href="/privacy-policy"
              className="px-4 py-2 rounded-xl bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 font-bold text-xs transition-colors shrink-0 min-h-[40px] flex items-center justify-center"
            >
              Read Policy
            </Link>
          </div>
        </div>

        {/* Right Column: Compose Email */}
        <div className="lg:col-span-7 bg-slate-100 dark:bg-slate-900 p-8 sm:p-10 rounded-3xl">
          <h2 className="font-bold text-2xl text-slate-900 dark:text-white tracking-tight mb-2">
            Send an Email
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mb-8">
            Compose your message below. Clicking the button will open your device&apos;s email client to send directly to <strong>support@nashikexplore.com</strong>.
          </p>

          <form onSubmit={handleOpenEmail} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="contact-name" className="block text-xs font-bold text-slate-500 mb-2">
                  Your Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="e.g. Rahul Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-sm focus:outline-none min-h-[46px]"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-xs font-bold text-slate-500 mb-2">
                  Your Email Address
                </label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder="name@domain.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-sm focus:outline-none min-h-[46px]"
                />
              </div>
            </div>

            <div>
              <label htmlFor="contact-subject" className="block text-xs font-bold text-slate-500 mb-2">
                Subject
              </label>
              <select
                id="contact-subject"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-sm font-semibold focus:outline-none min-h-[46px]"
              >
                <option value="General Inquiry">General App Inquiry</option>
                <option value="Spot Submission">Suggest a New Attraction</option>
                <option value="Correction">Report Inaccurate Timing / Details</option>
                <option value="Billing Support">Subscription / Billing Support</option>
                <option value="Data Deletion">Data Deletion Request</option>
              </select>
            </div>

            <div>
              <label htmlFor="contact-message" className="block text-xs font-bold text-slate-500 mb-2">
                Message Content *
              </label>
              <textarea
                id="contact-message"
                rows={5}
                required
                placeholder="Please describe your question or feedback..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-sm focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl text-white font-bold text-sm bg-blue-600 hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 active:scale-[0.99] min-h-[48px] cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Open in Email Client</span>
            </button>

            <p className="text-xs text-center text-slate-500 dark:text-slate-400">
              Opens your email client to send an email to <a href="mailto:support@nashikexplore.com" className="text-blue-600 underline">support@nashikexplore.com</a>.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
