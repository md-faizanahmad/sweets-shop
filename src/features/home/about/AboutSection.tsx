"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { aboutConfig } from "./about.config";
import { AboutVisual } from "./AboutVisual";
import { ArrowRight } from "lucide-react";
import { FloatingElement } from "./FloatingElement";

export function AboutSection() {
  const [isHindi, setIsHindi] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsHindi((prev) => !prev);
    }, 4000); // 4 seconds feels more relaxed
    return () => clearInterval(interval);
  }, []);

  return (
    // overflow-hidden is crucial to keep floating elements contained
    <section className="relative py-10 bg-[#FAF9F6] overflow-hidden min-h-[80vh] flex items-center">
      {/* 1. Surrounding Floating 3D Elements (Background Layer) */}
      <div className="absolute inset-0 z-0 opacity-80 md:opacity-100">
        {aboutConfig.elements.map((element, index) => (
          <FloatingElement
            key={index}
            src={element.src}
            alt={element.alt}
            size={element.size}
            index={index}
          />
        ))}
      </div>

      {/* 2. Central Content (Grid Layout) */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 items-center justify-items-center">
          {/* Central Shop Visual (The Hub) */}
          <div className="col-start-1 row-start-1 w-full max-w-lg lg:max-w-xl opacity-20 md:opacity-100">
            <AboutVisual
              src={aboutConfig.image.src}
              alt={aboutConfig.image.alt}
            />
          </div>

          {/* Text Content (Stacked on top of visual for mobile, integrated on desktop) */}
          <div className="col-start-1 row-start-1 text-center max-w-3xl mt-12 md:mt-0 p-6 md:p-10 rounded-3xl md:bg-white/40 md:backdrop-blur-sm border border-white/20">
            {/* Bilingual Title */}
            <div className="h-[90px] md:h-[130px] flex items-center justify-center mb-4">
              <AnimatePresence mode="wait">
                <motion.h2
                  key={isHindi ? "hi" : "en"}
                  initial={{ opacity: 0, scale: 0.9, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 1.1, y: -10 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} // Custom easeOutCirc
                  className="text-4xl md:text-6xl font-extrabold text-neutral-950 tracking-tighter leading-tight"
                >
                  {isHindi ? aboutConfig.title.hi : aboutConfig.title.en}
                </motion.h2>
              </AnimatePresence>
            </div>

            <p className="text-xl text-neutral-800 leading-relaxed mb-10 max-w-2xl mx-auto font-medium">
              {aboutConfig.description}
            </p>

            <Link
              href={aboutConfig.links.story}
              className="inline-flex items-center gap-2.5 bg-orange-600 text-white px-10 py-5 rounded-full text-lg font-semibold transition-all hover:bg-orange-700 hover:shadow-2xl hover:-translate-y-0.5 active:scale-95"
            >
              Explore Our Story
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
