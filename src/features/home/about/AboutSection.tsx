"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { aboutConfig } from "./about.config";
import { AboutVisual } from "./AboutVisual";
import { ArrowRight } from "lucide-react";

export function AboutSection() {
  const [isHindi, setIsHindi] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsHindi((prev) => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-5 bg-[#FAF9F6] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* TEXT CONTENT */}
          <div className="order-2 md:order-1">
            <div className="h-20 md:h-30 flex items-center">
              <AnimatePresence mode="wait">
                <motion.h2
                  key={isHindi ? "hi" : "en"}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5 }}
                  className="text-3xl md:text-5xl font-bold text-neutral-900 tracking-tight"
                >
                  {isHindi ? aboutConfig.title.hi : aboutConfig.title.en}
                </motion.h2>
              </AnimatePresence>
            </div>

            <p className="text-lg text-neutral-600 leading-relaxed mb-8 mt-4">
              {aboutConfig.description}
            </p>

            <Link
              href={aboutConfig.links.story}
              className="inline-flex items-center gap-2 bg-orange-600 text-white px-8 py-4 rounded-full font-medium transition-all hover:bg-orange-700 hover:shadow-lg active:scale-95"
            >
              Learn Our Story
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* VISUAL CONTENT */}
          <div className="order-1 md:order-2">
            {/* We pass the config props to the visual component */}
            <AboutVisual
              src={aboutConfig.image.src}
              alt={aboutConfig.image.alt}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
