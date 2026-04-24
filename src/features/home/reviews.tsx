"use client";

import { motion } from "framer-motion";
import { reviews } from "./config/trust.config";
import { ReviewCard } from "@/components/ui/review-card";
import { GoogleReviewButton } from "../GoogleReviewButton";

export function Reviews() {
  const reviewUrl = "https://g.page/r/CRMMa73YxMTbEAE/review";
  return (
    <section className="py-10 bg-[#fcfaf8]">
      {" "}
      {/* Soft cream background */}
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-900 mb-4">
            Guest Experiences
          </h2>
          <p className="text-neutral-500 max-w-md mx-auto">
            From our morning ovens to our candlelit dinners, here is what our
            community is saying.
          </p>
        </div>

        <div className="relative">
          {/* MOBILE: Horizontal Snap Carousel */}
          <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar px-4 pb-8 md:hidden">
            {reviews.map((review) => (
              <div key={review.id} className="snap-center shrink-0 w-[88%]">
                <ReviewCard review={review} />
              </div>
            ))}
          </div>

          {/* DESKTOP: Staggered Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1 },
              },
            }}
            className="hidden md:grid gap-8 md:grid-cols-3"
          >
            {reviews.map((review) => (
              <motion.div
                key={review.id}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <ReviewCard review={review} />
              </motion.div>
            ))}
          </motion.div>
        </div>
        {/* Place this at the bottom of your Reviews component */}
        <div className="mt-16 flex flex-col items-center justify-center gap-4 text-center">
          <p className="text-neutral-500 text-sm font-medium">
            Had a great meal or a delicious pastry?
          </p>
          <GoogleReviewButton url={reviewUrl} />

          <div className="flex items-center gap-4 mt-2">
            <div className="h-px w-8 bg-neutral-200" />
            <span className="text-[10px] text-neutral-400 font-bold uppercase tracking-widest">
              Trusted by 500+ Local Foodies
            </span>
            <div className="h-px w-8 bg-neutral-200" />
          </div>
        </div>
      </div>
    </section>
  );
}
