'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { MENU_CATEGORIES, MENU_ITEMS, MenuItem } from '../data/menuData';
import { useCafe } from '../context/CafeContext';
import { StarIcon, ClockIcon, ShoppingBagIcon, SparklesIcon, CheckIcon } from './Icons';

export const InteractiveMenu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [vegOnly, setVegOnly] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [addedItemIds, setAddedItemIds] = useState<Record<string, boolean>>({});

  const { addToCart } = useCafe();

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory =
        activeCategory === 'all' || item.category === activeCategory;
      const matchesVeg = vegOnly ? item.isVeg : true;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.ingredients.some((ing) => ing.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesVeg && matchesSearch;
    });
  }, [activeCategory, vegOnly, searchQuery]);

  const handleAddItem = (item: MenuItem) => {
    addToCart(item);
    setAddedItemIds((prev) => ({ ...prev, [item.id]: true }));
    setTimeout(() => {
      setAddedItemIds((prev) => ({ ...prev, [item.id]: false }));
    }, 1200);
  };

  return (
    <section id="menu" className="py-24 bg-[#0d0907] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-amber-400 font-semibold px-3 py-1 rounded-full bg-amber-950/60 border border-amber-700/40 mb-3">
            <SparklesIcon className="w-3.5 h-3.5" />
            <span>Curated Gastronomy</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-[#fdfaf6]">
            The Artisanal <span className="gold-gradient-text">Melt Menu</span>
          </h2>
          <p className="mt-4 text-stone-300 text-base sm:text-lg">
            Prepared to order using 48-hour fermented wild sourdough, French Valrhona chocolate, and fresh micro-lot South Indian roasts.
          </p>
        </div>

        {/* Filter Controls Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-amber-900/30">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {MENU_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                  activeCategory === cat.id
                    ? 'btn-primary-melt text-white shadow-md'
                    : 'bg-stone-900/70 text-stone-300 hover:text-amber-300 hover:bg-stone-800/80 border border-stone-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search & Dietary Toggle */}
          <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end">
            <div className="relative flex-1 sm:w-60">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search coffee, melts, waffle..."
                className="w-full bg-stone-900/90 border border-amber-900/40 rounded-full px-4 py-2 text-xs sm:text-sm text-stone-200 placeholder:text-stone-500 focus:outline-none focus:border-amber-500 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-200 text-xs"
                >
                  ✕
                </button>
              )}
            </div>

            <button
              onClick={() => setVegOnly(!vegOnly)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-semibold border transition-all cursor-pointer whitespace-nowrap ${
                vegOnly
                  ? 'bg-emerald-950/60 border-emerald-500/60 text-emerald-300'
                  : 'bg-stone-900/60 border-stone-800 text-stone-400 hover:text-stone-200'
              }`}
            >
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
              Veg Only
            </button>
          </div>
        </div>

        {/* Menu Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 glass-panel rounded-3xl max-w-lg mx-auto">
            <p className="text-stone-400 text-base">No culinary items found matching your filters.</p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setVegOnly(false);
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 text-xs font-semibold btn-secondary-melt rounded-full"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredItems.map((item) => {
              const isAdded = addedItemIds[item.id];
              return (
                <div
                  key={item.id}
                  className="glass-card rounded-3xl overflow-hidden flex flex-col group"
                >
                  {/* Item Image with Tags */}
                  <div className="relative h-56 sm:h-60 w-full overflow-hidden bg-stone-950">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1c1410] via-transparent to-transparent opacity-70" />

                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                      {item.tag ? (
                        <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-[#120a07]/90 text-amber-300 border border-amber-500/40 backdrop-blur-md shadow-md">
                          {item.tag}
                        </span>
                      ) : (
                        <div />
                      )}

                      <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-stone-950/80 border border-stone-700/60 backdrop-blur-sm">
                        <span
                          className={`w-2 h-2 rounded-full ${
                            item.isVeg ? 'bg-emerald-500' : 'bg-red-500'
                          }`}
                        />
                        <span className="text-[10px] uppercase font-semibold text-stone-300">
                          {item.isVeg ? 'Veg' : 'Non-Veg'}
                        </span>
                      </div>
                    </div>

                    {/* Rating Pill */}
                    <div className="absolute bottom-3 left-3 flex items-center gap-1 px-2.5 py-1 rounded-full bg-stone-900/90 text-amber-300 text-xs font-bold border border-amber-900/50 backdrop-blur-md">
                      <StarIcon className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span>{item.rating.toFixed(1)}</span>
                    </div>

                    {/* Prep Time */}
                    <div className="absolute bottom-3 right-3 flex items-center gap-1 text-[11px] text-stone-300 bg-stone-900/80 px-2 py-0.5 rounded-full border border-stone-700/50 backdrop-blur-sm">
                      <ClockIcon className="w-3 h-3 text-amber-400" />
                      <span>{item.preparationTime}</span>
                    </div>
                  </div>

                  {/* Item Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-display text-lg sm:text-xl font-bold text-stone-100 group-hover:text-amber-300 transition-colors">
                        {item.name}
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm text-stone-400 leading-relaxed line-clamp-3">
                        {item.description}
                      </p>

                      {/* Ingredients Chips */}
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {item.ingredients.slice(0, 3).map((ing, idx) => (
                          <span
                            key={idx}
                            className="text-[10px] font-medium bg-amber-950/40 text-amber-200/80 px-2 py-0.5 rounded-full border border-amber-900/30"
                          >
                            {ing}
                          </span>
                        ))}
                        {item.ingredients.length > 3 && (
                          <span className="text-[10px] font-medium text-stone-500 px-1 py-0.5">
                            +{item.ingredients.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Price and Add CTA */}
                    <div className="mt-6 pt-4 border-t border-amber-900/30 flex items-center justify-between">
                      <div>
                        <span className="text-xs text-stone-400 block font-medium">Price</span>
                        <span className="text-xl sm:text-2xl font-bold font-display text-amber-400">
                          ₹{item.price}
                        </span>
                      </div>

                      <button
                        onClick={() => handleAddItem(item)}
                        className={`flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                          isAdded
                            ? 'bg-emerald-600 text-white'
                            : 'btn-primary-melt text-white'
                        }`}
                      >
                        {isAdded ? (
                          <>
                            <CheckIcon className="w-4 h-4 text-white" />
                            <span>Added!</span>
                          </>
                        ) : (
                          <>
                            <ShoppingBagIcon className="w-4 h-4" />
                            <span>Add to Order</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
