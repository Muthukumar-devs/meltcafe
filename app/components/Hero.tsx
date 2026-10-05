'use client';

import React from 'react';
import Image from 'next/image';
import { useCafe } from '../context/CafeContext';
import { SparklesIcon, CalendarIcon, ChevronRightIcon, StarIcon, CoffeeCupIcon, UtensilsIcon } from './Icons';

export const Hero: React.FC = () => {
  const { openReservation } = useCafe();

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-8 pb-16">
      {/* Background Image with Dark Vignette */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-cafe.jpg"
          alt="Melt Cafe Chennai Ambiance and Molten Dessert"
          fill
          priority
          className="object-cover object-center brightness-60 scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Layered Gradient Overlays for Readability and Mood */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0907] via-[#0d0907]/80 to-[#0d0907]/40" />
        <div className="absolute inset-0 bg-radial-glow opacity-80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-stone-900/90 border border-amber-500/40 text-amber-300 text-xs sm:text-sm font-medium mb-6 shadow-lg shadow-black/50 animate-float-slow">
          <SparklesIcon className="w-4 h-4 text-amber-400" />
          <span>Artisanal Chocolaterie & Specialty Roastery • Nungambakkam & Besant Nagar</span>
        </div>

        {/* Main Heading */}
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#fdfaf6] max-w-5xl mx-auto leading-[1.12]">
          Where Warm Flavours{' '}
          <span className="gold-gradient-text block sm:inline">
            Melt Into Unforgettable Moments
          </span>
        </h1>

        {/* Subheading */}
        <p className="mt-6 text-base sm:text-xl text-stone-300 max-w-3xl mx-auto font-normal leading-relaxed">
          Indulge in artisanal 48-hour fermented sourdough melts, legendary 70% Valrhona molten chocolate domes, and micro-lot coffee beans roasted right here in coastal Chennai.
        </p>

        {/* Call to Actions */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#menu"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-semibold text-base btn-primary-melt cursor-pointer group"
          >
            <UtensilsIcon className="w-5 h-5 text-white" />
            <span>Explore Artisanal Menu</span>
            <ChevronRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>

          <button
            onClick={() => openReservation()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-semibold text-base btn-secondary-melt cursor-pointer"
          >
            <CalendarIcon className="w-5 h-5 text-amber-400" />
            <span>Reserve a Table</span>
          </button>
        </div>

        {/* Highlights Banner Strip */}
        <div className="mt-16 pt-10 border-t border-amber-900/30 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 max-w-4xl mx-auto text-left">
          <div className="glass-panel p-4 rounded-2xl flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
              <CoffeeCupIcon className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-amber-200/70 font-semibold">Coffee Beans</p>
              <p className="text-sm font-bold text-stone-100">100% Single-Origin</p>
            </div>
          </div>

          <div className="glass-panel p-4 rounded-2xl flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
              <UtensilsIcon className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-amber-200/70 font-semibold">Crust & Crumb</p>
              <p className="text-sm font-bold text-stone-100">48-Hr Sourdough</p>
            </div>
          </div>

          <div className="glass-panel p-4 rounded-2xl flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
              <SparklesIcon className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-amber-200/70 font-semibold">Chocolate</p>
              <p className="text-sm font-bold text-stone-100">70% Pure Valrhona</p>
            </div>
          </div>

          <div className="glass-panel p-4 rounded-2xl flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
              <StarIcon className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-amber-200/70 font-semibold">Guest Rating</p>
              <p className="text-sm font-bold text-stone-100">4.9 / 5.0 (2,400+)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
