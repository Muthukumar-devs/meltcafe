import React from 'react';
import { REVIEWS } from '../data/reviewsData';
import { StarIcon, SparklesIcon } from './Icons';

export const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-[#100b08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-amber-400 font-semibold px-3 py-1 rounded-full bg-amber-950/60 border border-amber-700/40 mb-3">
            <SparklesIcon className="w-3.5 h-3.5" />
            <span>Community Love</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-[#fdfaf6]">
            Loved by Chennai&apos;s <span className="gold-gradient-text">Food Connoisseurs</span>
          </h2>
          <p className="mt-4 text-stone-300 text-base sm:text-lg">
            Hear what regulars and culinary enthusiasts from across Chennai say about our warm melts and roastery pours.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="glass-card p-6 sm:p-8 rounded-3xl flex flex-col justify-between"
            >
              <div>
                {/* Top Row: Stars and Date */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <StarIcon key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs text-stone-400 font-medium">{rev.date}</span>
                </div>

                {/* Comment */}
                <p className="text-stone-300 text-sm sm:text-base leading-relaxed italic">
                  &ldquo;{rev.comment}&rdquo;
                </p>
              </div>

              {/* Bottom: Reviewer details & favorite item */}
              <div className="mt-6 pt-4 border-t border-amber-900/30 flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-sm text-stone-100">{rev.name}</h3>
                  <p className="text-xs text-amber-400">{rev.location}</p>
                </div>

                <div className="text-right hidden sm:block">
                  <span className="text-[10px] uppercase tracking-wider text-stone-400 block font-medium">Favorite Order</span>
                  <span className="text-xs text-amber-200/90 font-semibold">{rev.favoriteItem}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
