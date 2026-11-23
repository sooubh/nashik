import React from 'react';
import { AlertTriangle, ShieldCheck } from 'lucide-react';
import { Locale } from '@/types/content';

interface SafetyAlertProps {
  safetyTips: string[];
  dressCode?: string;
  locale: Locale;
}

export function SafetyAlert({ safetyTips, dressCode, locale }: SafetyAlertProps) {
  const isMr = locale === 'mr';
  const isHi = locale === 'hi';

  const heading = isMr
    ? 'महत्त्वाच्या सूचना व नियम'
    : isHi
    ? 'महत्वपूर्ण दिशानिर्देश एवं सुरक्षा'
    : 'Local Ground Reality & Safety Rules';

  const dressCodeLabel = isMr ? 'वेशभूषा नियम' : isHi ? 'वस्त्र नियम' : 'Dress Code & Protocol';

  return (
    <section className="rounded-2xl border-2 border-amber-200 bg-amber-50/60 p-5 sm:p-7">
      <div className="flex items-center gap-2 mb-4 text-amber-900 font-bold text-base sm:text-lg">
        <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0" />
        <h2>{heading}</h2>
      </div>

      <div className="space-y-4">
        {dressCode && (
          <div className="rounded-xl border border-amber-200/80 bg-white p-4">
            <span className="font-bold text-xs uppercase tracking-wider text-amber-900 block mb-1">
              {dressCodeLabel}
            </span>
            <p className="text-sm font-medium text-amber-950 leading-relaxed">
              {dressCode}
            </p>
          </div>
        )}

        <ul className="space-y-2 text-xs sm:text-sm text-amber-950 font-medium list-disc pl-5 leading-relaxed">
          {safetyTips.map((tip, idx) => (
            <li key={idx}>{tip}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
