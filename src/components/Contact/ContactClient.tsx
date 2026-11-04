'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Mail, MapPin, Send, ArrowLeft, HelpCircle, Copy, Check } from 'lucide-react';
import { SiteNav } from '@/components/SiteNav';
import { SiteFooter } from '@/components/SiteFooter';
import { SITE_CONFIG } from '@/config/site';

export function ContactClient() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: '',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(SITE_CONFIG.supportEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleOpenEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const subjectLine = `[${SITE_CONFIG.name}] ${formData.subject}${formData.name ? ` from ${formData.name}` : ''}`;
    const bodyContent = `${formData.message}\n\n---\nSender: ${formData.name || 'Not specified'}\nEmail: ${formData.email || 'Not specified'}`;
    const mailtoUrl = `mailto:${SITE_CONFIG.supportEmail}?subject=${encodeURIComponent(subjectLine)}&body=${encodeURIComponent(bodyContent)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <div className="min-h-[100dvh] bg-paper flex flex-col justify-between">
      <SiteNav />

      <main className="flex-1 pt-24 sm:pt-28 pb-12 sm:pb-16 px-4 sm:px-8 lg:px-12 max-w-6xl mx-auto w-full space-y-12">
        {/* Top Back Link & Badge */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-deep-violet hover:underline py-1.5"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Trivio Home</span>
          </Link>

          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-deep-violet/10 text-xs text-deep-violet font-semibold">
            <Mail className="w-3.5 h-3.5" />
            <span>Support Desk</span>
          </div>
        </div>

        {/* Header */}
        <div className="text-left max-w-2xl space-y-3">
          <span className="font-editorial italic text-base text-deep-violet block">
            Direct Assistance
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-on-surface leading-tight">
            Contact support.
          </h1>
          <p className="text-on-surface-variant text-base sm:text-lg leading-relaxed">
            Have questions about spots, feedback on the app, or destination corrections? Reach out to our Nashik team directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-card bg-[#F4F1F8] border border-[#ded9e8] space-y-6">
              <h2 className="font-bold text-xl text-on-surface tracking-tight">
                Direct Contact
              </h2>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-deep-violet/10 text-deep-violet shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-xs font-semibold text-on-surface-variant">
                      Official Support Email
                    </span>
                    <a
                      href={`mailto:${SITE_CONFIG.supportEmail}`}
                      className="font-bold text-base text-on-surface hover:text-deep-violet transition-colors block truncate"
                    >
                      {SITE_CONFIG.supportEmail}
                    </a>
                    <button
                      onClick={handleCopyEmail}
                      type="button"
                      className="mt-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#ded9e8] text-xs font-semibold text-deep-violet hover:bg-[#ded9e8] transition-colors cursor-pointer"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="text-emerald-700">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-deep-violet" />
                          <span>Copy Email Address</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-deep-violet/10 text-deep-violet shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-on-surface-variant">
                      Location Focus
                    </span>
                    <span className="font-bold text-base text-on-surface block">
                      Nashik, Maharashtra
                    </span>
                    <span className="block text-xs text-on-surface-variant mt-0.5">
                      India
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-card bg-[#F4F1F8] border border-[#ded9e8] flex items-center justify-between gap-3">
              <div>
                <h3 className="font-bold text-sm text-on-surface flex items-center gap-1.5">
                  <HelpCircle className="w-4 h-4 text-deep-violet" />
                  <span>Privacy &amp; Data Rights</span>
                </h3>
                <p className="text-xs text-on-surface-variant mt-0.5">
                  Learn how user records and local wishlists are handled.
                </p>
              </div>
              <Link
                href="/privacy-policy"
                className="px-4 py-2 rounded-full bg-white border border-[#ded9e8] text-deep-violet font-semibold text-xs hover:border-deep-violet transition-colors shrink-0"
              >
                Read Policy
              </Link>
            </div>
          </div>

          {/* Right Column: Compose Email */}
          <div className="lg:col-span-7 bg-[#F4F1F8] p-6 sm:p-8 rounded-card">
            <h2 className="font-bold text-2xl text-on-surface tracking-tight mb-2">
              Compose Message
            </h2>
            <p className="text-xs text-on-surface-variant mb-6 leading-relaxed">
              Fill in your note below. Clicking <strong>Open Email Client</strong> will launch your device&apos;s email program with the subject and body pre-addressed to <strong>{SITE_CONFIG.supportEmail}</strong>.
            </p>

            <form onSubmit={handleOpenEmail} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-semibold text-on-surface mb-1.5">
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    placeholder="e.g. Rahul Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#ded9e8] text-on-surface text-sm focus:outline-none focus:border-deep-violet"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-xs font-semibold text-on-surface mb-1.5">
                    Your Email Address
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#ded9e8] text-on-surface text-sm focus:outline-none focus:border-deep-violet"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-subject" className="block text-xs font-semibold text-on-surface mb-1.5">
                  Inquiry Topic
                </label>
                <select
                  id="contact-subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#ded9e8] text-on-surface text-sm focus:outline-none focus:border-deep-violet"
                >
                  <option value="General Inquiry">General Question</option>
                  <option value="Spot Inaccuracy Report">Destination Correction / Update</option>
                  <option value="New Spot Suggestion">Suggest a Nashik Landmark</option>
                  <option value="Technical Bug Report">App Issue / Bug Report</option>
                  <option value="Privacy / Data Request">Privacy or Account Question</option>
                </select>
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs font-semibold text-on-surface mb-1.5">
                  Message Description *
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  required
                  placeholder="Describe your inquiry, suggestion, or correction..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#ded9e8] text-on-surface text-sm focus:outline-none focus:border-deep-violet"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-full text-signal-lime font-bold text-sm bg-deep-violet hover:bg-primary transition-colors flex items-center justify-center gap-2 cursor-pointer active:scale-95"
              >
                <Send className="w-4 h-4" />
                <span>Open Email Client to Send</span>
              </button>
            </form>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
