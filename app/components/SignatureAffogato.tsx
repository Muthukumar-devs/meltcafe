'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useCafe } from '../context/CafeContext';
import { MENU_ITEMS } from '../data/menuData';
import { SparklesIcon, CoffeeCupIcon, FlameIcon, StarIcon, CheckIcon, ShoppingBagIcon } from './Icons';

export const SignatureAffogato: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isAdded, setIsAdded] = useState(false);
  const { addToCart } = useCafe();

  const affogatoItem = MENU_ITEMS.find((i) => i.id === 'coffee-madras-affogato');

  const steps = [
    {
      number: '01',
      title: 'Shevaroy Hills Dark Roast Pull',
      description:
        'A concentrated double-ristretto extracted from micro-lot Arabica beans grown in the mist of Yercaud, yielding intense notes of dark cocoa and roasted almond with a thick hazelnut crema.',
    },
    {
      number: '02',
      title: 'Hand-Churned Tahitian Gelato',
      description:
        'Two generous scoops of velvet gelato prepared with pure full-cream dairy and real Bourbon-Tahitian vanilla bean pods, maintaining the ideal chilled density to hold the espresso cascade.',
    },
    {
      number: '03',
      title: 'Molten Belgian Rim & Tableside Pour',
      description:
        'The chilled crystal glass is dipped in warm 64% Belgian dark chocolate and crushed roasted praline. Poured tableside from a heated copper vessel right at your table.',
    },
  ];

  const handleAdd = () => {
    if (affogatoItem) {
      addToCart(affogatoItem);
      setIsAdded(true);
      setTimeout(() => setIsAdded(false), 1500);
    }
  };

  return (
    <section id="affogato" className="py-24 bg-[#120b08] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Interactive Story & Steps */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-amber-400 font-semibold px-3 py-1 rounded-full bg-amber-950/60 border border-amber-700/40">
              <SparklesIcon className="w-3.5 h-3.5" />
              <span>Tableside Ritual</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#fdfaf6] leading-tight">
              The Madras Molten{' '}
              <span className="gold-gradient-text">Affogato Ritual</span>
            </h2>

            <p className="text-stone-300 leading-relaxed text-base sm:text-lg">
              Our signature masterpiece that bridges the storied coffee traditions of South India with decadent Belgian chocolaterie. A contrast of blazing heat, velvety cold, and molten cocoa.
            </p>

            {/* Interactive Steps Selector */}
            <div className="space-y-3 pt-2">
              {steps.map((step, idx) => (
                <div
                  key={step.number}
                  onClick={() => setActiveStep(idx)}
                  className={`p-4 sm:p-5 rounded-2xl cursor-pointer transition-all border ${
                    activeStep === idx
                      ? 'glass-card border-amber-500/50 bg-stone-900/90 shadow-lg'
                      : 'bg-stone-950/40 border-stone-800/80 hover:bg-stone-900/40 text-stone-400'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <span
                      className={`text-lg sm:text-xl font-bold font-display ${
                        activeStep === idx ? 'text-amber-400' : 'text-stone-600'
                      }`}
                    >
                      {step.number}
                    </span>
                    <div className="flex-1">
                      <h3
                        className={`text-base font-bold ${
                          activeStep === idx ? 'text-stone-100' : 'text-stone-300'
                        }`}
                      >
                        {step.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-stone-400 mt-1 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pricing & CTA */}
            <div className="pt-4 flex flex-wrap items-center gap-6">
              <div className="flex items-baseline gap-2">
                <span className="text-2xl sm:text-3xl font-display font-bold text-amber-400">
                  ₹365
                </span>
                <span className="text-xs text-stone-400">Signature Serve</span>
              </div>

              <button
                onClick={handleAdd}
                className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all cursor-pointer ${
                  isAdded ? 'bg-emerald-600 text-white' : 'btn-primary-melt text-white'
                }`}
              >
                {isAdded ? (
                  <>
                    <CheckIcon className="w-4 h-4 text-white" />
                    <span>Added to Order!</span>
                  </>
                ) : (
                  <>
                    <ShoppingBagIcon className="w-4 h-4" />
                    <span>Add Affogato to Order</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Column: Hero Visual with Overlays */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-amber-900/50 shadow-2xl shadow-black aspect-[3/4] group">
              <Image
                src="/images/affogato-coffee.jpg"
                alt="The Madras Molten Affogato Ritual Tableside Pour"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0907] via-transparent to-transparent opacity-70" />

              {/* Top Rating Tag */}
              <div className="absolute top-4 right-4 glass-panel px-3.5 py-1.5 rounded-full border border-amber-500/40 text-xs font-bold text-amber-300 flex items-center gap-1.5 shadow-lg">
                <StarIcon className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span>5.0 • Chennai&apos;s #1 Pour</span>
              </div>

              {/* Bottom Feature Pill */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl glass-panel border border-amber-500/30">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                    <CoffeeCupIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Live Tableside Pour</h4>
                    <p className="text-xs text-stone-300">Available at both Nungambakkam & Besant Nagar</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
