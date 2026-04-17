"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  images: { src: string; alt: string }[];
}

export function HeroClient({ images }: Props) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <>
      {/* Organic Background Blobs 
         CHANGE: Set z-index to 1 so it sits ABOVE your hero-bg.jpg (z-0) 
         but BELOW the content (z-20)
      */}
      <div className="absolute inset-0 z-1 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 20, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[10%] -left-[10%] w-[70%] h-[70%] rounded-full bg-pink-50/30 blur-3xl"
        />
        {/* <div
          className="absolute -bottom-[20%] -right-[10%] w-[80%] h-[80%] rounded-full opacity-10 blur-2xl"
          style={{ backgroundColor: "var(--nav-hover)" }}
        /> */}
      </div>

      {/* Floating Product Image Container */}
      <div className="relative z-10 w-full h-full flex items-center justify-center lg:justify-end lg:pr-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8, rotate: -10, y: 20 }}
            animate={{ opacity: 1, scale: 1, rotate: 0, y: 0 }}
            exit={{ opacity: 0, scale: 1.1, rotate: 10, y: -20 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
            className="relative w-75 h-75 md:w-100 md:h-100"
          >
            {/* Subtle shadow/halo for the product */}
            <div className="absolute inset-10 bg-white/40 rounded-full blur-3xl scale-110" />

            <Image
              src={images[index].src}
              alt={images[index].alt}
              fill
              priority={index === 0}
              className="object-contain drop-shadow-[0_25px_25px_rgba(0,0,0,0.15)] bg-blend-saturation"
              sizes="(max-width: 768px) 300px, 500px"
            />

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="absolute bottom-5 -left-5 md:left-0 bg-white/90 backdrop-blur-sm p-3 md:p-2 rounded-2xl shadow-xl border border-neutral-100 flex items-center gap-3"
            >
              <div className="text-xl md:text-2xl">🍯</div>
              <div className="leading-tight">
                <p className="text-[10px] font-bold text-neutral-400 uppercase">
                  Shuddh
                </p>
                <p className="text-xs md:text-sm font-black text-neutral-800">
                  100% Fresh
                </p>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
}
