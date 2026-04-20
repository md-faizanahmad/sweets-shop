"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
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
    <div className="relative z-30 text-left order-2 lg:order-1">
      <div className="h-16 md:h-24 flex items-center mb-6">
        <AnimatePresence mode="wait">
          <motion.h2
            key={isHindi ? "hi" : "en"}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="text-4xl md:text-6xl font-black text-neutral-900 tracking-tight leading-tight"
          >
            {isHindi ? titleHi : titleEn}
          </motion.h2>
        </AnimatePresence>
      </div>

      <p className="text-lg mt-20 md:text-xl text-neutral-600 mb-10 leading-relaxed font-medium max-w-xl ">
        {description}
      </p>

      <Link
        href={link}
        className="group inline-flex items-center gap-3 bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg active:scale-95"
      >
        Learn Our Story
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
}
