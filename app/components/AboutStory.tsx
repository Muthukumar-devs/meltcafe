import React from 'react';
import Image from 'next/image';
import { SparklesIcon, FlameIcon, CoffeeCupIcon, UtensilsIcon, MapPinIcon } from './Icons';

export const AboutStory: React.FC = () => {
  return (
    <section id="story" className="py-24 relative overflow-hidden bg-[#100b08]">
      {/* Subtle background ambient blur */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image Showcase with Glass Badge */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-amber-900/40 shadow-2xl shadow-black/80 aspect-[4/3] group">
              <Image
                src="/images/cafe-ambiance.jpg"
                alt="Melt Cafe Chennai Nungambakkam Interior"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0907] via-transparent to-transparent opacity-80" />
              
              {/* Floating Location Card */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl glass-panel border border-amber-500/30 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-widest text-amber-400 font-semibold flex items-center gap-1.5">
                    <MapPinIcon className="w-3.5 h-3.5" />
                    Flagship Sanctuary
                  </p>
                  <p className="text-sm sm:text-base font-bold text-white mt-0.5">
                    18/4 Khader Nawaz Khan Rd, Nungambakkam
                  </p>
                </div>
                <div className="hidden sm:block text-right">
                  <span className="inline-block px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    Open till 11:30 PM
                  </span>
                </div>
              </div>
            </div>

            {/* Accent Floating Badge */}
            <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 glass-panel p-4 rounded-2xl border border-amber-500/30 shadow-xl hidden sm:flex items-center gap-3 animate-float-slow">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-300 flex items-center justify-center">
                <SparklesIcon className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-stone-300 font-medium">Est. in Chennai</p>
                <p className="text-sm font-bold text-amber-400">Pure Artisanal Craft</p>
              </div>
            </div>
          </div>

          {/* Right Column: Story Narrative & Pillars */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-amber-400 font-semibold px-3 py-1 rounded-full bg-amber-950/60 border border-amber-700/40">
              <FlameIcon className="w-3.5 h-3.5" />
              <span>The Melt Philosophy</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#fdfaf6] leading-tight">
              Where European Chocolaterie Meets{' '}
              <span className="gold-gradient-text">Madras Warmth</span>
            </h2>

            <p className="text-stone-300 leading-relaxed text-base sm:text-lg">
              Melt Café was born out of a simple conviction: that Chennai deserved a sanctuary where coffee is roasted with scientific rigor, bread is slow-fermented with patience, and chocolate is revered as an art form.
            </p>

            <p className="text-stone-400 leading-relaxed text-sm sm:text-base">
              From our flagship roastery on Khader Nawaz Khan Road to our sea-breeze cafe on Besant Nagar beach, every single melt is pressed to order, every espresso is extracted from handpicked high-altitude South Indian beans, and our molten chocolate domes are baked fresh at exact temperatures.
            </p>

            {/* 3 Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-2xl glass-card">
                <div className="w-9 h-9 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center mb-3">
                  <FlameIcon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-stone-100 text-sm">Molten Flow</h3>
                <p className="text-xs text-stone-400 mt-1">
                  70% French Valrhona couverture tempered to erupt into luscious warm ganache.
                </p>
              </div>

              <div className="p-4 rounded-2xl glass-card">
                <div className="w-9 h-9 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center mb-3">
                  <CoffeeCupIcon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-stone-100 text-sm">Shevaroy Roast</h3>
                <p className="text-xs text-stone-400 mt-1">
                  Single-origin Arabica sourced directly from family plantations in Yercaud.
                </p>
              </div>

              <div className="p-4 rounded-2xl glass-card">
                <div className="w-9 h-9 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center mb-3">
                  <UtensilsIcon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-stone-100 text-sm">48-Hr Ferment</h3>
                <p className="text-xs text-stone-400 mt-1">
                  Stoneground wild sourdough creating the ultimate caramelized cheese pull.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
