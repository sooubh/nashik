import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin } from 'lucide-react';
import { SITE_CONFIG } from '@/config/site';

export function SiteFooter() {
  return (
    <footer
      className="relative isolate w-full overflow-hidden bg-[#FBFAFD] text-[#211B2C]"
      id="site-footer"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[560px] bg-[radial-gradient(ellipse_at_50%_35%,rgba(210,228,248,0.42)_0%,rgba(244,241,248,0.24)_48%,transparent_78%)]"
      />

      {/* The wordmark stays behind the transparent illustration artwork. */}
      <div className="relative mx-auto max-w-[1600px] pt-12 sm:pt-16 lg:pt-20">
        <div className="relative isolate w-full">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-[18%] z-0 overflow-hidden text-center"
          >
            <span className="whitespace-nowrap font-sans text-[clamp(4.5rem,21vw,19rem)] font-black leading-[0.8] tracking-[-0.105em] text-[#4B2E83]/[0.13]">
              TRIVIO
            </span>
          </div>

          <Image
            src="/images/footer/nashik-illustration.webp"
            alt="Illustrated panorama of Nashik with Sahyadri hills, vineyards, waterfalls, temples, the Godavari waterfront and local food"
            width={1400}
            height={467}
            sizes="100vw"
            className="relative z-10 block h-auto w-full select-none object-contain"
            draggable={false}
          />
        </div>
      </div>

      {/* Brand details and the original footer navigation sit below the artwork. */}
      <div className="relative z-20 mx-auto mt-2 max-w-7xl px-6 pb-8 pt-10 sm:mt-5 sm:px-10 sm:pt-14 lg:px-16 lg:pt-16">
        <div className="grid grid-cols-1 gap-10 border-t border-[#E9E4EF] pt-10 sm:gap-12 md:grid-cols-12 lg:gap-14">
          <div className="flex flex-col justify-between md:col-span-5">
            <div>
              <Link
                href="/"
                className="group mb-4 inline-flex items-center gap-2.5"
                aria-label="Trivio Home"
              >
                <span className="text-2xl font-black tracking-[0.14em] text-deep-violet transition-colors group-hover:text-[#392066]">
                  TRIVIO
                </span>
                <MapPin
                  className="h-5 w-5 fill-deep-violet text-deep-violet transition-transform group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </Link>
              <p className="max-w-sm text-sm leading-relaxed text-[#686273]">
                {SITE_CONFIG.description}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 md:col-span-7 lg:gap-10">
            {SITE_CONFIG.footerColumns.map((col) => (
              <div key={col.title}>
                <h3 className="mb-4 text-xs font-bold tracking-wide text-deep-violet">
                  {col.title}
                </h3>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      {link.external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs leading-relaxed text-[#696474] transition-colors hover:text-deep-violet sm:text-sm"
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="text-xs leading-relaxed text-[#696474] transition-colors hover:text-deep-violet sm:text-sm"
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div
          className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-[#E9E4EF] pt-6 text-xs text-[#898393] sm:mt-14 sm:flex-row sm:items-center"
          data-ui
        >
          <div>
            © {new Date().getFullYear()} {SITE_CONFIG.name} · Developed by sooubh · Nashik, Maharashtra
          </div>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#8A78A8]" />
            <span>Made for the love of exploring Nashik.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
