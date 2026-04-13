"use client";

import { Review } from "@/features/home/config/trust.config";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

export function ReviewCard({ review }: { review: Review }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="relative p-6 rounded-4xl bg-white border border-neutral-100 shadow-xl shadow-neutral-200/40 flex flex-col"
    >
      {/* Decorative Quote Icon */}
      <Quote className="absolute top-6 right-8 w-8 h-8 text-neutral-100 z-0" />

      <div className="relative z-10">
        {/* 5 Star Rating */}
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
          ))}
        </div>

        <p className="text-sm md:text-base text-neutral-600 leading-relaxed italic mb-6">
          &quot;{review.text}&quot;
        </p>

        <div className="flex items-center gap-3 mt-auto pt-4 border-t border-neutral-50">
          <div className="w-10 h-10 rounded-full bg-(--nav-hover) flex items-center justify-center text-white font-black text-xs">
            {review.name.charAt(0)}
          </div>
          <div>
            <p className="text-sm font-black text-neutral-900">{review.name}</p>
            <p className="text-[10px] font-bold uppercase tracking-widest text-green-600">
              Verified Sweet Lover
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
