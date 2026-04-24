"use client";

import { Review } from "@/features/home/config/trust.config";
import { motion } from "framer-motion";
import { Star, Utensils, Croissant } from "lucide-react";

export function ReviewCard({ review }: { review: Review }) {
  // Logic to determine icon based on review type (if applicable)
  const isBakery = review.category === "bakery";

  return (
    <motion.div
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className="relative p-8 rounded-4xl bg-white border border-orange-100/50 shadow-2xl shadow-orange-900/5 flex flex-col h-full"
    >
      {/* Category Badge */}
      <div className="absolute -top-3 left-8 flex items-center gap-2 px-3 py-1 bg-amber-50 border border-amber-100 rounded-full shadow-sm">
        {isBakery ? (
          <Croissant className="w-3.5 h-3.5 text-amber-600" />
        ) : (
          <Utensils className="w-3.5 h-3.5 text-orange-600" />
        )}
        <span className="text-[10px] font-bold uppercase tracking-tighter text-amber-900">
          {isBakery ? "Freshly Baked" : "Signature Dish"}
        </span>
      </div>

      <div className="relative z-10 pt-2">
        {/* Rating */}
        <div className="flex gap-0.5 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
          ))}
        </div>

        <p className="text-base md:text-lg text-neutral-700 leading-snug font-medium mb-8">
          &quot;{review.text}&quot;
        </p>

        <div className="flex items-center gap-4 mt-auto">
          {/* Avatar with soft "Dough" color */}
          <div className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center text-orange-700 font-bold text-sm">
            {review.name.charAt(0)}
          </div>
          <div>
            <p className="text-sm font-bold text-neutral-900">{review.name}</p>
            <p className="text-[11px] font-semibold text-neutral-400">
              Verified Foodie • {review.date || "Recent Guest"}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
