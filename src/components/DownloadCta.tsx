'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Download, Star, ShieldCheck, Smartphone, QrCode } from 'lucide-react';
import { QrCodeModal } from './QrCodeModal';

export function DownloadCta() {
  const [isQrModalOpen, setIsQrModalOpen] = useState(false);

  return (
    <>
      <section id="download" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-[2rem] sm:rounded-4xl bg-gradient-to-br from-brand-950 via-brand-900 to-slate-950 text-white p-8 sm:p-12 lg:p-16 border border-white/10 shadow-2xl overflow-hidden text-center lg:text-left"
        >
          {/* Ambient Glows */}
          <div className="absolute -top-24 -right-24 w-80 sm:w-96 h-80 sm:h-96 bg-brand-400/20 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-80 sm:w-96 h-80 sm:h-96 bg-brand-300/10 rounded-full blur-[80px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10">
            <div className="lg:col-span-8 space-y-6 sm:space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-brand-100 text-[11px] sm:text-xs font-bold uppercase tracking-widest">
                <Smartphone className="w-4 h-4" />
                <span>Available for Android 8.0+</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
                Ready to Explore Nashik Like a Local?
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Download the official Nashik Travel Guide Android application today. Access verified temple timings, vineyard tasting guides, Sahyadri hiking coordinates, and custom offline itineraries.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-4 pt-2 sm:pt-4 max-w-md mx-auto lg:mx-0">
                <a
                  href="https://play.google.com/store/apps/details?id=com.nashikexplore.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-brand-blue hover:bg-brand-700 text-white font-bold text-sm shadow-glow-sm transition-all active:scale-[0.97] min-h-[48px]"
                >
                  <Download className="w-5 h-5" />
                  <span>Get on Google Play</span>
                </a>

                <button
                  type="button"
                  onClick={() => setIsQrModalOpen(true)}
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-white font-bold text-sm transition-all active:scale-[0.97] min-h-[48px]"
                >
                  <QrCode className="w-5 h-5 text-brand-300" />
                  <span>Scan QR Code</span>
                </button>
              </div>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 pt-4 sm:pt-6 text-sm text-slate-300">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span className="font-bold text-white">4.8 Rating</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>100% Offline Ready</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5">
                  <span>50k+ Explorers</span>
                </div>
              </div>
            </div>

            {/* Live QR Code Box */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative p-6 sm:p-8 rounded-2xl bg-white/8 backdrop-blur-xl border border-white/15 shadow-2xl flex flex-col items-center justify-center text-center max-w-[280px] w-full">
                <div className="relative w-40 h-40 sm:w-48 sm:h-48 bg-white p-3 rounded-2xl shadow-inner mb-4 flex items-center justify-center">
                  <img
                    src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.nashikexplore.app&color=0066FF"
                    alt="Scan to download Nashik Travel Guide"
                    className="w-full h-full object-contain"
                    width={180}
                    height={180}
                  />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white p-1 rounded-lg shadow-md border border-slate-100 flex items-center justify-center">
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
                <span className="font-bold text-sm text-white mb-1">Scan with Camera</span>
                <span className="text-xs text-brand-300">Instant Google Play listing</span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* QR Code Scanner Modal */}
      <QrCodeModal isOpen={isQrModalOpen} onClose={() => setIsQrModalOpen(false)} />
    </>
  );
}
