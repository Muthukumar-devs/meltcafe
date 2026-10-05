'use client';

import React, { useState } from 'react';
import { CHENNAI_LOCATIONS } from '../data/locationsData';
import { useCafe } from '../context/CafeContext';
import { MapPinIcon, ClockIcon, PhoneIcon, CalendarIcon, CheckIcon, CompassIcon } from './Icons';

export const ChennaiLocations: React.FC = () => {
  const [selectedBranchId, setSelectedBranchId] = useState<string>('nungambakkam');
  const { openReservation } = useCafe();

  const currentBranch = CHENNAI_LOCATIONS.find((b) => b.id === selectedBranchId) || CHENNAI_LOCATIONS[0];

  return (
    <section id="locations" className="py-24 bg-[#0d0907] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-amber-400 font-semibold px-3 py-1 rounded-full bg-amber-950/60 border border-amber-700/40 mb-3">
            <MapPinIcon className="w-3.5 h-3.5" />
            <span>Chennai Sanctuaries</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-[#fdfaf6]">
            Visit Melt Café in <span className="gold-gradient-text">Chennai</span>
          </h2>
          <p className="mt-4 text-stone-300 text-base sm:text-lg">
            Two distinct architectural vibes crafted for high-tea conversations, remote work mornings, and late-night dessert cravings.
          </p>
        </div>

        {/* Location Selector Switcher */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-full bg-stone-900 border border-amber-900/40">
            {CHENNAI_LOCATIONS.map((loc) => (
              <button
                key={loc.id}
                onClick={() => setSelectedBranchId(loc.id)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  selectedBranchId === loc.id
                    ? 'btn-primary-melt text-white shadow-md'
                    : 'text-stone-400 hover:text-stone-200'
                }`}
              >
                {loc.area} Flagship
              </button>
            ))}
          </div>
        </div>

        {/* Selected Branch Detail Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Info Card */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-10 rounded-3xl border border-amber-900/40 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-950/80 px-3 py-1 rounded-full border border-amber-800/60">
                  {currentBranch.tagline}
                </span>
                {currentBranch.isFlagship && (
                  <span className="text-xs font-bold text-amber-200 bg-amber-900/40 px-3 py-1 rounded-full border border-amber-600/30">
                    Flagship Roastery
                  </span>
                )}
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4">
                {currentBranch.name}
              </h3>

              {/* Address Box */}
              <div className="space-y-4 text-sm sm:text-base text-stone-300 mb-6">
                <div className="flex items-start gap-3">
                  <MapPinIcon className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">{currentBranch.address}</p>
                    <p className="text-stone-400 text-xs sm:text-sm">{currentBranch.city} - {currentBranch.pincode}, Tamil Nadu</p>
                    <p className="text-amber-200/70 text-xs mt-1">Landmark: {currentBranch.landmark}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ClockIcon className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">Opening Timings</p>
                    <p className="text-stone-400 text-xs sm:text-sm">Mon - Fri: {currentBranch.hours.weekdays}</p>
                    <p className="text-stone-400 text-xs sm:text-sm">Sat - Sun: {currentBranch.hours.weekends}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <PhoneIcon className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">Reservations & Order Help</p>
                    <div className="flex flex-wrap gap-4 mt-0.5">
                      <a href={`tel:${currentBranch.phone.replace(/\s+/g, '')}`} className="text-amber-300 hover:underline text-xs sm:text-sm">
                        {currentBranch.phone}
                      </a>
                      <span className="text-stone-600">|</span>
                      <a href={`tel:${currentBranch.alternatePhone.replace(/\s+/g, '')}`} className="text-amber-300 hover:underline text-xs sm:text-sm">
                        {currentBranch.alternatePhone}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CompassIcon className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">Transit & Parking</p>
                    <p className="text-stone-400 text-xs sm:text-sm">Metro: {currentBranch.metroStation}</p>
                    <p className="text-stone-400 text-xs sm:text-sm">Parking: {currentBranch.parking}</p>
                  </div>
                </div>
              </div>

              {/* Branch Highlights Checklist */}
              <div className="pt-4 border-t border-amber-900/30">
                <h4 className="text-xs uppercase tracking-wider text-amber-200/80 font-bold mb-3">
                  Key Amenities & Experiences
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {currentBranch.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-stone-300">
                      <CheckIcon className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Branch Actions */}
            <div className="mt-8 pt-6 border-t border-amber-900/30 flex flex-wrap gap-4">
              <button
                onClick={() => openReservation(currentBranch.id)}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold btn-primary-melt cursor-pointer"
              >
                <CalendarIcon className="w-4 h-4" />
                Book Table at {currentBranch.area}
              </button>

              <a
                href={`tel:${currentBranch.phone.replace(/\s+/g, '')}`}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold btn-secondary-melt"
              >
                <PhoneIcon className="w-4 h-4" />
                Call Branch
              </a>
            </div>
          </div>

          {/* Interactive Map & Directions Card */}
          <div className="lg:col-span-5 glass-panel rounded-3xl overflow-hidden border border-amber-900/40 flex flex-col">
            <div className="p-4 bg-stone-900/90 border-b border-amber-900/30 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MapPinIcon className="w-4 h-4 text-amber-400" />
                <span className="text-xs font-semibold text-stone-200">{currentBranch.area}, Chennai</span>
              </div>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  currentBranch.address + ', Chennai'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-amber-300 hover:text-amber-200 flex items-center gap-1 font-medium"
              >
                Open in Google Maps ↗
              </a>
            </div>

            {/* Embedded Interactive Map */}
            <div className="flex-1 min-h-[360px] relative bg-stone-950">
              <iframe
                title={`Map of ${currentBranch.name}`}
                src={currentBranch.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'contrast(1.05) invert(90%) hue-rotate(180deg)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full"
              />
            </div>

            {/* Quick Visit Tip */}
            <div className="p-4 bg-[#120a07] text-xs text-stone-300 flex items-center justify-between border-t border-amber-900/30">
              <span>💡 Tip: Peak evening rush starts around 6:30 PM. Reserving online is recommended!</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
