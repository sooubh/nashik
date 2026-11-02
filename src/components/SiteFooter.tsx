import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SITE_CONFIG } from '@/config/site';

export function SiteFooter() {
  return (
    <footer className="w-full bg-[#160D2E] text-white" id="site-footer">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 py-14 lg:py-18">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 mb-12">
          {/* Brand Info */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <Link href="/" className="inline-flex items-center gap-3 mb-4 group" aria-label="Trivio Home">
                <Image
                  src="/images/branding/app-horizontal-icon.png"
                  alt="Trivio"
                  width={140}
                  height={36}
                  className="h-8 w-auto object-contain brightness-105"
                />
              </Link>
              <p className="text-sm text-white/70 max-w-sm leading-relaxed">
                {SITE_CONFIG.description}
              </p>
            </div>
          </div>

          {/* 3 Link Columns */}
          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {SITE_CONFIG.footerColumns.map((col) => (
              <div key={col.title}>
                <h3 className="font-bold text-xs text-signal-lime mb-4">
                  {col.title}
                </h3>
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      {link.external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs sm:text-sm text-white/75 hover:text-white transition-colors"
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="text-xs sm:text-sm text-white/75 hover:text-white transition-colors"
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

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60" data-ui>
          <div>
            © {new Date().getFullYear()} {SITE_CONFIG.name} · Developed by sooubh · Nashik, Maharashtra
          </div>
          <div className="flex items-center gap-4">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-white/30" />
            <span>Google Play ID: <code className="text-white/80">{SITE_CONFIG.packageId}</code></span>
          </div>
        </div>
      </div>
    </footer>
  );
}
