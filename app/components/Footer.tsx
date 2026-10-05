'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCafe } from '../context/CafeContext';
import { MapPinIcon, PhoneIcon, ClockIcon, CheckIcon } from './Icons';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const { openReservation } = useCafe();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="bg-[#090604] border-t border-amber-900/30 text-stone-400 text-xs sm:text-sm pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-800/80">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="flex items-center gap-3.5 group">
              <div className="relative w-12 h-12 rounded-full overflow-hidden ring-1 ring-amber-500/40 shadow-lg group-hover:ring-amber-400 transition-all">
                <Image
                  src="/images/logo.jpg"
                  alt="Melt Cafe Emblem Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="font-display font-bold text-2xl tracking-tight text-[#fdfaf6]">
                    MELT
                  </span>
                  <span className="text-[10px] font-bold tracking-widest uppercase bg-amber-950/70 border border-amber-600/40 text-amber-300 px-1.5 py-0.5 rounded">
                    CHENNAI
                  </span>
                </div>
                <span className="text-[11px] uppercase tracking-wider text-amber-200/60 font-medium">
                  Artisanal Chocolaterie & Roastery
                </span>
              </div>
            </Link>

            <p className="text-stone-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Chennai&apos;s sanctuary for 48-hour fermented wild sourdough grilled melts, single-origin Shevaroy Arabica roasts, and pure 70% Valrhona molten desserts.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => openReservation()}
                className="px-4 py-2 rounded-full text-xs font-semibold btn-primary-melt text-white cursor-pointer"
              >
                Reserve Your Table
              </button>
            </div>
          </div>

          {/* Chennai Flagship Branches */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="font-display text-base font-bold text-stone-100 flex items-center gap-2">
              <MapPinIcon className="w-4 h-4 text-amber-400" />
              <span>Chennai Locations</span>
            </h3>

            <div className="space-y-4 text-xs">
              <div className="p-3.5 rounded-xl bg-stone-900/60 border border-stone-800">
                <p className="font-bold text-stone-200">1. Nungambakkam Flagship & Roastery</p>
                <p className="text-stone-400 mt-1">18/4, Khader Nawaz Khan Road, Nungambakkam, Chennai - 600006</p>
                <p className="text-amber-400/80 mt-1 flex items-center gap-1">
                  <PhoneIcon className="w-3 h-3" /> +91 44 4892 1100
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-stone-900/60 border border-stone-800">
                <p className="font-bold text-stone-200">2. Melt By The Bay</p>
                <p className="text-stone-400 mt-1">32, 4th Main Road, Elliot&apos;s Beach Promenade, Besant Nagar, Chennai - 600090</p>
                <p className="text-amber-400/80 mt-1 flex items-center gap-1">
                  <PhoneIcon className="w-3 h-3" /> +91 44 4892 2200
                </p>
              </div>
            </div>
          </div>

          {/* Quick Hours & Newsletter */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="font-display text-base font-bold text-stone-100 flex items-center gap-2">
              <ClockIcon className="w-4 h-4 text-amber-400" />
              <span>Roasting Hours & Club</span>
            </h3>

            <div className="text-xs space-y-1.5 text-stone-300">
              <p className="flex justify-between">
                <span>Nungambakkam:</span>
                <span className="font-semibold text-white">8:00 AM – Midnight</span>
              </p>
              <p className="flex justify-between">
                <span>Besant Nagar:</span>
                <span className="font-semibold text-white">7:00 AM – 11:30 PM</span>
              </p>
            </div>

            {/* Newsletter */}
            <div className="pt-2">
              <p className="text-xs text-stone-400 mb-2 font-medium">
                Subscribe for seasonal dessert drops & coffee tastings:
              </p>
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="flex gap-2">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 bg-stone-900 border border-amber-900/40 rounded-xl px-3 py-2 text-xs text-stone-200 placeholder:text-stone-600 focus:outline-none focus:border-amber-500"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-xl text-xs font-semibold btn-primary-melt text-white cursor-pointer"
                  >
                    Join
                  </button>
                </div>
                {subscribed && (
                  <p className="text-[11px] text-emerald-400 flex items-center gap-1">
                    <CheckIcon className="w-3 h-3" /> Welcome to Melt Connoisseurs Club!
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© {new Date().getFullYear()} Melt Café & Roastery Pvt Ltd. All rights reserved. Chennai, Tamil Nadu.</p>
          <div className="flex items-center gap-6">
            <a href="#menu" className="hover:text-amber-400 transition-colors">Menu</a>
            <a href="#story" className="hover:text-amber-400 transition-colors">Philosophy</a>
            <a href="#locations" className="hover:text-amber-400 transition-colors">Chennai Directions</a>
            <a href="#affogato" className="hover:text-amber-400 transition-colors">Madras Affogato</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
