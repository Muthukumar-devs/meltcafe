'use client';

import React from 'react';
import { useCafe } from '../context/CafeContext';
import { CheckIcon, SparklesIcon } from './Icons';

export const Toast: React.FC = () => {
  const { toast } = useCafe();

  if (!toast) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-slide-in-right">
      <div className="glass-panel px-4 py-3 rounded-2xl border border-amber-500/40 text-stone-100 text-xs sm:text-sm font-semibold flex items-center gap-2.5 shadow-2xl shadow-black/80 bg-[#140e0b]/95">
        <div className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
          <SparklesIcon className="w-3.5 h-3.5" />
        </div>
        <span>{toast}</span>
        <CheckIcon className="w-4 h-4 text-emerald-400 ml-1" />
      </div>
    </div>
  );
};
