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
  const [radius, setRadius] = useState<number>(240);

  // Handle responsive radius for the orbit
  useEffect(() => {
    const updateRadius = (): void => {
      setRadius(window.innerWidth < 768 ? 160 : 240);
    };

    updateRadius();
    window.addEventListener("resize", updateRadius);
    return () => window.removeEventListener("resize", updateRadius);
  }, []);

  return (
    <div
      className="relative flex items-center justify-center h-125 lg:h-150 order-1 lg:order-2 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 1. CENTRAL ROUNDED SHOP IMAGE */}
      <motion.div
        animate={{
          y: isHovered ? -5 : [0, -15, 0],
          scale: isHovered ? 1.05 : 1,
        }}
        transition={{
          duration: 4,
          repeat: isHovered ? 0 : Infinity,
          ease: "easeInOut",
        }}
        className="relative w-64 h-64 md:w-80 md:h-80 z-20 rounded-full overflow-hidden border-8 border-white shadow-2xl"
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
              x: isHovered ? x : i % 2 === 0 ? x * 0.4 : x * 1.1,
              y: isHovered ? y : i % 2 === 0 ? y * 1.1 : y * 0.4,
              rotate: isHovered ? 360 : 0,
            }}
            transition={{
              x: { type: "spring", stiffness: 40, damping: 12 },
              y: { type: "spring", stiffness: 40, damping: 12 },
              rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            }}
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative shadow-xl rounded-full bg-white/50 backdrop-blur-md p-3 border border-white/40"
            >
              <Image
                src={el.src}
                alt={el.alt}
                width={el.size}
                height={el.size}
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        );
      })}

      {/* 3. ATMOSPHERIC GRADIENT */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-[#FAF9F6] via-[#FAF9F6]/80 to-transparent" />
      </div>
    </div>
  );
}
