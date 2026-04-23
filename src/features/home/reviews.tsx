"use client";

import { motion } from "framer-motion";
import { reviews } from "./config/trust.config";
import { ReviewCard } from "@/components/ui/review-card";

export function Reviews() {
  return (
    <div className="relative">
      {/* MOBILE: Horizontal Snap Carousel */}
      <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory no-scrollbar px-1 md:hidden">
        {reviews.map((review) => (
          <div key={review.id} className="snap-center shrink-0 w-[85%]">
            <ReviewCard review={review} />
          </div>
        ))}
      </div>

      {/* DESKTOP: Grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 },
          },
        }}
        className="hidden md:grid gap-6 md:grid-cols-3"
      >
        {reviews.map((review) => (
          <motion.div
            key={review.id}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <ReviewCard review={review} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
