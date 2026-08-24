'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Mail, MapPin, Clock, Send, CheckCircle2, ShieldCheck, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function ContactClient() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: 'General Inquiry',
        message: '',
      });
    }, 700);
  };

  return (
    <div className="pt-28 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto space-y-8 sm:space-y-12">
      {/* Top Back Link */}
      <div className="flex items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-brand-blue dark:hover:text-brand-light transition-colors py-1"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Homepage</span>
        </Link>

        <div className="inline-flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
          <ShieldCheck className="w-4 h-4" />
          <span>Verified Helpdesk</span>
        </div>
      </div>

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <span className="text-xs uppercase font-extrabold tracking-widest text-brand-blue dark:text-brand-400 mb-2 block">
          Get In Touch
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-3 sm:mb-4">
          Contact Support &amp; Moderation
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
          Have questions about spots, feedback on itineraries, need assistance with your lifetime premium status, or requesting account/data deletion? We are here to help.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        {/* Left Column: Direct Info & SLA Cards */}
        <div className="lg:col-span-5 space-y-4 sm:space-y-6">
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-soft-sm space-y-5 sm:space-y-6">
            <h2 className="font-extrabold text-lg sm:text-xl text-slate-900 dark:text-white tracking-tight">
              Direct Communication Channels
            </h2>

            <div className="space-y-4 sm:space-y-5">
              <div className="flex items-start gap-3.5 sm:gap-4">
                <div className="p-2.5 sm:p-3 rounded-2xl bg-brand-50 dark:bg-brand-950 text-brand-blue dark:text-brand-light shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="block text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-400">
                    Email Helpdesk
                  </span>
                  <a
                    href="mailto:support@nashikexplore.com"
                    className="font-extrabold text-sm sm:text-base text-slate-900 dark:text-slate-100 hover:text-brand-blue dark:hover:text-brand-light transition-colors block truncate"
                  >
                    support@nashikexplore.com
                  </a>
                  <span className="block text-[10px] sm:text-[11px] text-slate-500 mt-0.5">
                    For support, moderation, and data erasure
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3.5 sm:gap-4">
                <div className="p-2.5 sm:p-3 rounded-2xl bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-400">
                    Response SLA
                  </span>
                  <span className="font-extrabold text-sm sm:text-base text-slate-900 dark:text-slate-100 block">
                    24 - 48 Business Hours
                  </span>
                  <span className="block text-[10px] sm:text-[11px] text-slate-500 mt-0.5">
                    Mon - Sat (9:00 AM - 6:00 PM IST)
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3.5 sm:gap-4">
                <div className="p-2.5 sm:p-3 rounded-2xl bg-amber-50 dark:bg-amber-950 text-amber-600 dark:text-amber-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-400">
                    Developer Address
                  </span>
                  <span className="font-extrabold text-sm sm:text-base text-slate-900 dark:text-slate-100 block">
                    College Road, Nashik
                  </span>
                  <span className="block text-[10px] sm:text-[11px] text-slate-500 mt-0.5">
                    Maharashtra, 422005, India
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-5 sm:p-6 rounded-3xl bg-brand-50/60 dark:bg-brand-950/40 border border-brand-200/60 dark:border-brand-800/60 flex items-center justify-between gap-3">
            <div>
              <h3 className="font-extrabold text-xs sm:text-sm text-slate-900 dark:text-white">
                Frequently Asked Questions
              </h3>
              <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                Check our knowledge base for fast answers.
              </p>
            </div>
            <Link
              href="/#faq"
              className="px-3.5 sm:px-4 py-2 rounded-xl bg-white dark:bg-slate-900 text-brand-blue dark:text-brand-light font-bold text-xs shadow-sm hover:scale-105 transition-all shrink-0 min-h-[36px] flex items-center justify-center"
            >
              View FAQ
            </Link>
          </div>
        </div>

        {/* Right Column: Interactive Form */}
        <div className="lg:col-span-7 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 p-6 sm:p-10 rounded-3xl shadow-soft-sm">
          <h2 className="font-extrabold text-xl sm:text-2xl text-slate-900 dark:text-white tracking-tight mb-1 sm:mb-2">
            Send Us a Message
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mb-6 sm:mb-8">
            Fill in the details below and our team will get back to you promptly.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label htmlFor="contact-name" className="block text-xs font-extrabold uppercase tracking-wider text-slate-500 mb-1.5 sm:mb-2">
                  Your Full Name *
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 sm:py-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-850 text-slate-800 dark:text-slate-200 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue min-h-[46px]"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-xs font-extrabold uppercase tracking-wider text-slate-500 mb-1.5 sm:mb-2">
                  Email Address *
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  placeholder="name@domain.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 sm:py-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-850 text-slate-800 dark:text-slate-200 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue min-h-[46px]"
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
                className="w-full px-4 py-3 sm:py-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-850 text-slate-800 dark:text-slate-200 text-base sm:text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-brand-blue min-h-[46px]"
              >
                <option value="General Inquiry">General App Inquiry</option>
                <option value="Spot Submission">Suggest a New Tourist Spot</option>
                <option value="Correction">Report Outdated Timing / Fee</option>
                <option value="Premium Support">Lifetime Premium Billing Support</option>
                <option value="Data Deletion">Data Deletion Request (GDPR / Play Console)</option>
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
                placeholder="Please describe your question or feedback in detail..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 sm:py-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-850 text-slate-800 dark:text-slate-200 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 sm:py-4 rounded-2xl text-white font-extrabold text-sm sm:text-base bg-brand-blue hover:bg-brand-700 transition-all shadow-glow-sm flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99] min-h-[48px] cursor-pointer"
            >
              {isSubmitting ? (
                <span>Sending Message...</span>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Success Modal */}
      <AnimatePresence>
        {isSuccess && (
          <div
            onClick={() => setIsSuccess(false)}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 rounded-3xl max-w-md w-full shadow-2xl text-center"
            >
              <div className="h-14 w-14 sm:h-16 sm:w-16 bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shrink-0">
                <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8" />
              </div>
              <h3 className="font-extrabold text-xl sm:text-2xl mb-2 text-slate-900 dark:text-white">
                Message Received!
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                Thank you for reaching out to the Nashik Travel Guide team. We will review your message and reply to your email address within 24 to 48 business hours.
              </p>
              <button
                onClick={() => setIsSuccess(false)}
                type="button"
                className="w-full py-3.5 rounded-xl text-white bg-brand-blue hover:bg-brand-700 font-bold text-sm transition-all min-h-[44px] cursor-pointer"
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
