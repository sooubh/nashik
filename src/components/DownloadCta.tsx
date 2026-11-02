import React from 'react';
import Image from 'next/image';
import { Smartphone, Check, ShieldCheck, MapPin } from 'lucide-react';

export function DownloadCta() {
  return (
    <section id="download" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="relative rounded-3xl bg-slate-950 text-white p-8 sm:p-14 lg:p-20 overflow-hidden">
        
        {/* Cinematic Sunset Lake Backdrop */}
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src="/images/destinations/gangapur-lake-sunset.jpg"
            alt="Sunset over Gangapur Dam lake and Sahyadri mountains"
            fill
            className="object-cover object-center opacity-30"
            sizes="(max-width: 1280px) 100vw, 1280px"
          />
          <div className="absolute inset-0 bg-slate-950/75" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
          
          {/* Left Text & Direct Action */}
          <div className="lg:col-span-8 text-left space-y-6">
            
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/90 text-slate-300 text-xs font-bold">
              <Smartphone className="w-4 h-4 text-blue-400" />
              <span>Available for Android devices</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Ready to explore Nashik?
            </h2>

            <p className="text-slate-300 text-base sm:text-xl leading-relaxed max-w-2xl">
              Take NashikExplore with you on your next trip. Browse authentic wine estates, sacred heritage temples, and Sahyadri mountain treks with clear visitor intelligence and direct Google Maps navigation.
            </p>

            {/* Direct Google Play Button */}
            <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="https://play.google.com/store/apps/details?id=com.nashikexplore.app"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download NashikExplore on Google Play (opens in a new tab)"
                className="inline-flex items-center justify-center gap-3.5 px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-colors active:scale-[0.98] min-h-[52px]"
              >
                <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.793 12 3.61 22.186c-.352-.375-.568-.89-.568-1.46V3.274c0-.57.216-1.085.568-1.46zm11.238 11.24L17.7 15.91l-11.8 6.772 8.947-9.628zm0-2.108L5.9 1.318 17.7 8.09l-2.853 2.856zm1.054 1.054l3.197-1.838c.846-.486.846-1.282 0-1.768l-3.197-1.838-2.115 2.115 2.115 2.329z" />
                </svg>
                <div className="text-left">
                  <div className="text-[10px] font-medium opacity-90 leading-none">Free Install on</div>
                  <div className="text-sm font-extrabold leading-none mt-1">Google Play Store</div>
                </div>
              </a>

              <span className="text-xs text-slate-400 font-medium">
                Requires Android 8.0 or newer
              </span>
            </div>

            {/* Practical Assurances */}
            <div className="pt-6 flex flex-wrap gap-y-2 gap-x-6 text-xs text-slate-400">
              <span className="flex items-center gap-1.5 font-medium">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                No mandatory account registration
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
                No intrusive third-party background tracking
              </span>
            </div>

          </div>

          {/* Right Column: Phone Visual */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="relative w-48 sm:w-56 aspect-[9/19.5] rounded-3xl overflow-hidden bg-black p-2">
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <Image
                  src="/images/details.png"
                  alt="NashikExplore spot dossier detail preview"
                  fill
                  className="object-cover"
                  sizes="224px"
                />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
