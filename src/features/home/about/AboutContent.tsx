"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion"; // Updated for latest motion
import { ArrowRight } from "lucide-react";

type AboutContentProps = {
  titleEn: string;
  titleHi: string;
  description: string;
  link: string;
};

export function AboutContent({
  titleEn,
  titleHi,
  description,
  link,
}: AboutContentProps) {
  const [isHindi, setIsHindi] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => setIsHindi((prev) => !prev), 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative z-30 text-left order-2 lg:order-1 px-4 sm:px-0">
      {/* Title Container: Reduced height on mobile to keep content tight */}
      <div className="h-12 sm:h-16 md:h-24 flex items-center mb-4 sm:mb-6">
        <AnimatePresence mode="wait">
          <motion.h2
            key={isHindi ? "hi" : "en"}
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 15 }}
            transition={{ duration: 0.4 }}
            className="text-3xl sm:text-4xl md:text-6xl font-black text-neutral-900 tracking-tight leading-tight"
          >
            {isHindi ? titleHi : titleEn}
          </motion.h2>
        </AnimatePresence>
      </div>

      {/* Description: Fixed the mt-20 to a responsive mt-4, and adjusted font for mobile */}
      <p className="text-base mt-10  md:mt-10 lg:mt-20 sm:text-lg md:text-xl text-neutral-600 mb-8 sm:mb-10  leading-relaxed font-medium max-w-xl">
        {description}
      </p>

      {/* Button: More compact padding on mobile for better thumb-reach UX */}
      <Link
        href={link}
        className="group inline-flex items-center gap-2 sm:gap-3 bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full text-sm sm:text-base font-bold transition-all shadow-lg active:scale-95 touch-manipulation"
      >
        Learn Our Story
        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
}
