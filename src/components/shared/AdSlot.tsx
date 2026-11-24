import React from 'react';
import { SITE_CONFIG } from '@/config/site';

interface AdSlotProps {
  slotId: string;
  format?: 'banner' | 'rectangle' | 'leaderboard';
  className?: string;
}

export const AdSlot: React.FC<AdSlotProps> = ({
  slotId,
  format = 'banner',
  className = '',
}) => {
  // If ads are disabled globally, render null or minimal placeholder without layout shift
  if (!SITE_CONFIG.adsEnabled) {
    return null;
  }

  // Define fixed dimensions to prevent Cumulative Layout Shift (CLS)
  const formatStyles: Record<string, string> = {
    banner: 'w-full h-24 max-w-2xl min-h-[96px]',
    rectangle: 'w-full h-64 max-w-sm min-h-[250px]',
    leaderboard: 'w-full h-24 max-w-4xl min-h-[90px]',
  };

  return (
    <aside
      aria-label="Advertisement"
      data-ad-slot={slotId}
      className={`mx-auto bg-gray-100 border border-dashed border-gray-300 rounded-lg flex items-center justify-center text-xs text-gray-400 ${formatStyles[format] || formatStyles.banner} ${className}`}
    >
      <div className="text-center p-2">
        <span className="block font-medium">Sponsored</span>
        <span className="text-[10px] text-gray-400">Slot ID: {slotId}</span>
      </div>
    </aside>
  );
};
