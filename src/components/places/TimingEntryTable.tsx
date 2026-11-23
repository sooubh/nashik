import React from 'react';
import { Clock, Ticket, Calendar, AlertCircle } from 'lucide-react';
import { PlaceTimings, PlaceEntryFee, PlaceBestTime, Locale } from '@/types/content';

interface TimingEntryTableProps {
  timings: PlaceTimings;
  entryFee: PlaceEntryFee;
  bestTimeToVisit: PlaceBestTime;
  locale: Locale;
}

export function TimingEntryTable({
  timings,
  entryFee,
  bestTimeToVisit,
  locale,
}: TimingEntryTableProps) {
  const isMr = locale === 'mr';
  const isHi = locale === 'hi';

  const labels = {
    visitingHours: isMr ? 'दर्शन / भेट वेळ' : isHi ? 'दर्शन / समय' : 'Visiting Hours',
    entryFeeTitle: isMr ? 'प्रवेश शुल्क' : isHi ? 'प्रवेश शुल्क' : 'Entry Fee & Tickets',
    bestTimeTitle: isMr ? 'उत्तम वेळ' : isHi ? 'सर्वोत्तम समय' : 'Best Time to Visit',
    closedDays: isMr ? 'बंद दिवस' : isHi ? 'बंद दिन' : 'Closed Days',
    morningSlot: isMr ? 'सकाळची वेळ / आरती' : isHi ? 'सुबह का समय / आरती' : 'Morning Slot / Aarti',
    eveningSlot: isMr ? 'संध्याकाळची वेळ / आरती' : isHi ? 'शाम का समय / आरती' : 'Evening Slot / Aarti',
    general: isMr ? 'सर्वसाधारण' : isHi ? 'सामान्य' : 'General',
    specialVip: isMr ? 'व्हीआयपी / विशेष पास' : isHi ? 'वीआईपी / विशेष पास' : 'VIP / Special Pass',
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
      {/* 1. Timings Card */}
      <div className="rounded-2xl border border-brand-100 bg-white p-5 sm:p-6 shadow-xs flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 mb-3 text-deep-violet">
            <Clock className="h-5 w-5 shrink-0" />
            <h3 className="text-base font-bold tracking-tight text-on-surface">
              {labels.visitingHours}
            </h3>
          </div>

          <div className="text-2xl font-black text-deep-violet tracking-tight">
            {timings.open} – {timings.close}
          </div>

          <p className="mt-2 text-xs sm:text-sm text-on-surface-variant leading-relaxed">
            {timings.description}
          </p>

          <div className="mt-4 space-y-2 pt-3 border-t border-brand-50 text-xs">
            {timings.morningAartiOrSlot && (
              <div className="flex items-start justify-between gap-2">
                <span className="font-medium text-on-surface-variant">{labels.morningSlot}:</span>
                <span className="font-bold text-on-surface text-right">{timings.morningAartiOrSlot}</span>
              </div>
            )}
            {timings.eveningAartiOrSlot && (
              <div className="flex items-start justify-between gap-2">
                <span className="font-medium text-on-surface-variant">{labels.eveningSlot}:</span>
                <span className="font-bold text-on-surface text-right">{timings.eveningAartiOrSlot}</span>
              </div>
            )}
            {timings.closedDays && timings.closedDays.length > 0 && (
              <div className="flex items-center justify-between gap-2 text-red-600 font-semibold">
                <span>{labels.closedDays}:</span>
                <span>{timings.closedDays.join(', ')}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 2. Entry Fee Card */}
      <div className="rounded-2xl border border-brand-100 bg-white p-5 sm:p-6 shadow-xs flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 mb-3 text-deep-violet">
            <Ticket className="h-5 w-5 shrink-0" />
            <h3 className="text-base font-bold tracking-tight text-on-surface">
              {labels.entryFeeTitle}
            </h3>
          </div>

          <div className="text-2xl font-black text-deep-violet tracking-tight">
            {entryFee.isFree ? (
              <span className="text-emerald-700">Free Entry</span>
            ) : (
              entryFee.general
            )}
          </div>

          <p className="mt-2 text-xs sm:text-sm text-on-surface-variant leading-relaxed">
            {entryFee.description}
          </p>

          {entryFee.vipOrSpecial && (
            <div className="mt-4 p-3 rounded-xl bg-brand-50 border border-brand-100 text-xs">
              <span className="font-bold text-deep-violet block mb-0.5">{labels.specialVip}:</span>
              <span className="text-on-surface font-medium">{entryFee.vipOrSpecial}</span>
            </div>
          )}
        </div>
      </div>

      {/* 3. Best Time Card */}
      <div className="rounded-2xl border border-brand-100 bg-white p-5 sm:p-6 shadow-xs flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 mb-3 text-deep-violet">
            <Calendar className="h-5 w-5 shrink-0" />
            <h3 className="text-base font-bold tracking-tight text-on-surface">
              {labels.bestTimeTitle}
            </h3>
          </div>

          <div className="text-xl font-black text-deep-violet tracking-tight">
            {bestTimeToVisit.season}
          </div>

          <div className="mt-1 text-xs font-semibold text-signal-lime bg-[#221045] inline-block px-2.5 py-0.5 rounded-full">
            {bestTimeToVisit.idealHours}
          </div>

          <p className="mt-3 text-xs sm:text-sm text-on-surface-variant leading-relaxed">
            {bestTimeToVisit.description}
          </p>
        </div>
      </div>
    </div>
  );
}
