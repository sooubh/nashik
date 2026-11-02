import React from 'react';

export function TrivioCta() {
  return (
    <section className="w-full py-16 px-6 sm:px-12 bg-deep-violet text-center text-white">
      <div className="max-w-md mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">
          Ready to explore?
        </h2>
        <p className="text-mist-lilac text-sm sm:text-base mb-6">
          Download Trivio for Android and head outside.
        </p>
        <a
          href="https://play.google.com/store/apps/details?id=com.nashikexplore.app"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 bg-signal-lime hover:bg-[#d5ff4f] text-[#221045] text-sm sm:text-base font-bold px-7 py-3 rounded-full transition-transform hover:scale-[1.02] active:scale-95"
        >
          <svg aria-hidden="true" className="w-5 h-5 fill-[#221045] shrink-0" viewBox="0 0 24 24">
            <path d="M3.609 1.814L13.792 12 3.61 22.185c-.382-.363-.61-.884-.61-1.47V3.284c0-.585.228-1.106.609-1.47zm11.242 11.243l2.364 2.364-12.08 6.942 9.716-9.306zm0-2.115L5.135 1.637l12.08 6.942-2.364 2.363zm1.488 1.058l3.774 2.167c.928.532.928 1.401 0 1.934l-3.774 2.167-2.302-2.301 2.302-2.267z" />
          </svg>
          <span>Get it on Google Play</span>
        </a>
      </div>
    </section>
  );
}
