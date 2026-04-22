"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { AboutElement, AboutImage } from "./about.types";

interface AboutStageProps {
  shopImage: AboutImage;
  elements: AboutElement[];
}

export function AboutStage({ shopImage, elements }: AboutStageProps) {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [radius, setRadius] = useState<number>(200);

  // Responsive radius & Icon scaling
  useEffect(() => {
    const updateDimensions = (): void => {
      // Mobile: 120px orbit | Tablet/Small Desktop: 180px | Large: 240px
      if (window.innerWidth < 640) setRadius(120);
      else if (window.innerWidth < 1024) setRadius(180);
      else setRadius(240);
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <div
      className="relative flex items-center justify-center h-100 sm:h-125 lg:h-150 order-1 lg:order-2 group touch-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      // Better UX for mobile: toggle on tap
      onClick={() => setIsHovered(!isHovered)}
    >
      {/* 1. CENTRAL ROUNDED SHOP IMAGE */}
      <motion.div
        animate={{
          y: isHovered ? -5 : [0, -10, 0],
          scale: isHovered ? 1.05 : 1,
        }}
        transition={{
          duration: 4,
          repeat: isHovered ? 0 : Infinity,
          ease: "easeInOut",
        }}
        className="relative w-36 h-36 sm:w-64 sm:h-64 md:w-80 md:h-80 z-20 rounded-full overflow-hidden border-4 sm:border-8 border-white shadow-2xl"
      >
        <Image
          src={shopImage.src}
          alt={shopImage.alt}
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      {/* 2. ORBITING SNACK ELEMENTS */}
      {elements.slice(0, 6).map((el: AboutElement, i: number) => {
        const angle: number = i * (360 / 6) * (Math.PI / 180);
        const x: number = Math.cos(angle) * radius;
        const y: number = Math.sin(angle) * radius;

        return (
          <motion.div
            key={el.src}
            className="absolute z-30 pointer-events-none"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            animate={{
              x: isHovered ? x : i % 2 === 0 ? x * 0.5 : x * 0.8,
              y: isHovered ? y : i % 2 === 0 ? y * 0.8 : y * 0.5,
              rotate: isHovered ? 360 : 0,
            }}
            transition={{
              x: { type: "spring", stiffness: 50, damping: 15 },
              y: { type: "spring", stiffness: 50, damping: 15 },
              rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            }}
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative shadow-lg rounded-full bg-white/60 backdrop-blur-sm p-1 sm:p-2 border border-white/50"
            >
              <div className="relative w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16">
                <Image
                  src={el.src}
                  alt={el.alt}
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        );
      })}

      {/* 3. ATMOSPHERIC GRADIENT - Adjusted height for mobile */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute inset-x-0 bottom-0 h-24 sm:h-40 bg-linear-to-t from-[#FAF9F6] via-[#FAF9F6]/80 to-transparent" />
      </div>
    </div>
  );
}
