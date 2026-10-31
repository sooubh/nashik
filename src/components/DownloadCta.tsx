import React from 'react';
import Image from 'next/image';
import { Download, Smartphone, Check, ShieldCheck, MapPin } from 'lucide-react';

export function DownloadCta() {
  return (
    <section id="download" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="relative rounded-3xl bg-slate-900 text-white p-8 sm:p-12 lg:p-16 border border-slate-800 shadow-2xl overflow-hidden">
        
        {/* Subtle Architectural Geometry Background */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
          
          {/* Left Text & Direct Action */}
          <div className="lg:col-span-8 text-left space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-semibold">
              <Smartphone className="w-4 h-4 text-blue-400" />
              <span>Available for Android devices</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight headline-editorial">
              Ready to explore Nashik?
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              Take NashikExplore with you on your next trip. Browse authentic wine estates, sacred heritage temples, and Sahyadri mountain treks with clear visitor intelligence and direct Google Maps navigation.
            </p>

            {/* Direct Google Play Button */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="https://play.google.com/store/apps/details?id=com.nashikexplore.app"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download NashikExplore on Google Play (opens in a new tab)"
                className="inline-flex items-center justify-center gap-3.5 px-7 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-all shadow-md active:scale-[0.98] min-h-[48px]"
              >
                <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.793 12 3.61 22.186c-.352-.375-.568-.89-.568-1.46V3.274c0-.57.216-1.085.568-1.46zm11.238 11.24L17.7 15.91l-11.8 6.772 8.947-9.628zm0-2.108L5.9 1.318 17.7 8.09l-2.853 2.856zm1.054 1.054l3.197-1.838c.846-.486.846-1.282 0-1.768l-3.197-1.838-2.115 2.115 2.115 2.329z" />
                </svg>
                <div className="text-left">
                  <div className="text-[10px] font-medium opacity-90 leading-none">Free Install on</div>
                  <div className="text-sm font-extrabold leading-none mt-1">Google Play Store</div>
                </div>
              </a>

              <span className="text-xs text-slate-400">
                Requires Android 8.0 or newer
              </span>
            </div>

            {/* Practical Assurances */}
            <div className="pt-4 border-t border-slate-800/80 flex flex-wrap gap-y-2 gap-x-6 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                No mandatory account registration
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
                No intrusive third-party background tracking
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                Hand-off directly to Google Maps
              </span>
            </div>

          </div>

          {/* Right App Icon Emblem */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-3xl overflow-hidden border border-slate-700 bg-slate-800/80 shadow-xl flex items-center justify-center p-6">
              <div className="relative w-28 h-28 sm:w-32 sm:h-32">
                <Image
                  src="/images/logo.png"
                  alt="NashikExplore App Icon"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
