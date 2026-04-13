"use client";

import { motion } from "framer-motion";
import { reviews } from "./config/trust.config";
import { ReviewCard } from "@/components/ui/review-card";

export function Reviews() {
  return (
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
      className="grid gap-6 md:grid-cols-3"
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
  );
}
