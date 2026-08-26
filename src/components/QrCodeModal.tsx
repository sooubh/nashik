'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Copy, Check, ExternalLink, Smartphone } from 'lucide-react';

interface QrCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function QrCodeModal({ isOpen, onClose }: QrCodeModalProps) {
  const [copied, setCopied] = useState(false);
  const playStoreUrl = 'https://play.google.com/store/apps/details?id=com.nashikexplore.app';

  const handleCopy = () => {
    navigator.clipboard.writeText(playStoreUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: 'tween', ease: 'easeOut', duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ type: 'tween', ease: 'easeOut', duration: 0.3 }}
            className="relative w-full max-w-sm sm:max-w-md bg-white dark:bg-slate-900 rounded-2xl sm:rounded-3xl border border-slate-200/60 dark:border-slate-800/60 shadow-soft-xl z-10 overflow-hidden p-6 sm:p-8"
          >
            {/* Ambient background glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-brand-400/10 dark:bg-brand-400/5 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-300/10 rounded-full blur-2xl pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 min-h-[44px] min-w-[44px] p-2.5 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center justify-center cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Content */}
            <div className="text-center">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 dark:bg-slate-800 border border-brand-200/60 dark:border-slate-700 text-brand-blue dark:text-brand-400 text-xs font-bold uppercase tracking-widest mb-4">
                <Smartphone className="w-3.5 h-3.5" />
                <span>Instant Mobile Install</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-2">
                Scan to Get the App
              </h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-xs mx-auto mb-6 leading-relaxed">
                Point your phone camera at the QR code to open the listing directly on Google Play.
              </p>

              {/* QR Code Container */}
              <div className="relative mx-auto w-48 h-48 sm:w-56 sm:h-56 p-4 bg-white rounded-2xl border border-slate-200/60 dark:border-slate-700 shadow-sm flex items-center justify-center mb-6">
                <div className="relative w-full h-full flex items-center justify-center">
                  <img
                    src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.nashikexplore.app&color=006398"
                    alt="Scan to download Nashik Travel Guide App"
                    className="w-full h-full object-contain"
                    width={200}
                    height={200}
                  />
                  {/* Center App Icon Overlay */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white p-1 rounded-xl shadow-md border border-slate-100 flex items-center justify-center">
                    <div className="relative w-full h-full">
                      <Image
                        src="/images/logo.png"
                        alt="Logo"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Badges / Information */}
              <div className="flex items-center justify-center gap-3 text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium mb-6">
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-brand-blue" /> Free
                </span>
                <span>•</span>
                <span>Android 8.0+</span>
                <span>•</span>
                <span>Verified</span>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 w-full min-h-[44px] px-6 py-3 rounded-xl bg-brand-blue hover:bg-brand-700 text-white font-bold text-sm shadow-glow-sm flex items-center justify-center gap-2 transition-all active:scale-[0.97]"
                >
                  <span>Open in Play Store</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <button
                  type="button"
                  onClick={handleCopy}
                  className="w-full sm:w-auto min-h-[44px] min-w-[44px] px-6 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 font-bold text-sm shadow-soft-sm hover:border-brand-300 dark:hover:border-brand-700 flex items-center justify-center gap-2 transition-all shrink-0 cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-brand-blue" />
                      <span className="text-brand-blue dark:text-brand-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy Link</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
