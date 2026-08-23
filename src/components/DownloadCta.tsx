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
      <section id="download" className="py-20 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-[36px] bg-gradient-to-br from-brand-900 via-slate-900 to-slate-950 text-white p-8 sm:p-12 lg:p-16 border border-brand-800/40 shadow-2xl overflow-hidden text-center lg:text-left"
        >
          {/* Ambient Glows */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-blue/30 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-sky/20 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-brand-light text-xs font-bold uppercase tracking-wider">
                <Smartphone className="w-3.5 h-3.5" />
                <span>Available for Android 8.0+</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
                Ready to Explore Nashik Like a Local?
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Download the official Nashik Travel Guide Android application today. Access verified temple timings, vineyard tasting guides, Sahyadri hiking coordinates, and custom offline itineraries.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                <a
                  href="https://play.google.com/store/apps/details?id=com.nashikexplore.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-7 py-3.5 rounded-2xl bg-brand-blue hover:bg-brand-500 text-white font-extrabold text-sm shadow-glow-md hover:scale-105 active:scale-95 transition-all"
                >
                  <Download className="w-4 h-4" />
                  <span>Get it on Google Play</span>
                </a>

                <button
                  type="button"
                  onClick={() => setIsQrModalOpen(true)}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-sm transition-all hover:scale-105 active:scale-95"
                >
                  <QrCode className="w-4 h-4 text-brand-300" />
                  <span>Scan QR Code</span>
                </button>
              </div>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4 text-xs text-slate-300">
                <div className="flex items-center gap-1 text-amber-400">
                  <Star className="w-4 h-4 fill-amber-400" />
                  <span className="font-bold text-white">4.8 Play Store</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1 text-emerald-400">
                  <ShieldCheck className="w-4 h-4" />
                  <span>100% Verified Offline</span>
                </div>
                <span>•</span>
                <span>50k+ Active Travelers</span>
              </div>
            </div>

            {/* Live QR Code Box */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative p-6 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl flex flex-col items-center justify-center text-center max-w-xs w-full">
                <div className="relative w-40 h-40 bg-white p-2.5 rounded-2xl shadow-inner mb-3 flex items-center justify-center">
                  <img
                    src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.nashikexplore.app&color=0066FF"
                    alt="Scan to download Nashik Travel Guide"
                    className="w-full h-full object-contain"
                    width={150}
                    height={150}
                  />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white p-0.5 rounded-lg shadow-sm border border-slate-100 flex items-center justify-center">
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
                <span className="font-extrabold text-xs text-white">Scan with Camera</span>
                <span className="text-[10px] text-brand-light font-medium mt-0.5">Instant Google Play listing</span>
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
