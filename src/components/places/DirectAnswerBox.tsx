import React from 'react';
import { Sparkles } from 'lucide-react';
import { Locale } from '@/types/content';

interface DirectAnswerBoxProps {
  answer: string;
  locale?: Locale;
  subjectTitle?: string;
}

export function DirectAnswerBox({ answer, locale = 'en', subjectTitle }: DirectAnswerBoxProps) {
  const badgeLabels = {
    en: 'Quick Answer & Ground Truth',
    mr: 'थोडक्यात माहिती आणि वास्तव',
    hi: 'त्वरित सारांश एवं वास्तविकता',
  };

  return (
    <section
      aria-label="Direct Summary"
      className="relative overflow-hidden rounded-2xl border-2 border-brand-200 bg-gradient-to-br from-brand-50/70 via-white to-brand-50/40 p-5 sm:p-7 shadow-sm"
    >
      <div className="flex items-center gap-2 mb-3">
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-signal-lime text-[#221045] shadow-xs">
          <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
        </span>
        <span className="text-xs font-bold uppercase tracking-wider text-deep-violet">
          {badgeLabels[locale] || badgeLabels.en}
        </span>
        {subjectTitle && (
          <span className="hidden sm:inline text-xs text-on-surface-variant font-medium">
            · {subjectTitle}
          </span>
        )}
      </div>
      <p className="text-base sm:text-lg font-medium leading-relaxed text-on-surface">
        {answer}
      </p>
    </section>
  );
}
