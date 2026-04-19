"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface FloatingElementProps {
  src: string;
  alt: string;
  size: number;
  index: number;
}

// Define specific base positions (top, left) for 6 elements to surround the center
const basePositions = [
  { top: "10%", left: "15%" }, // Top Left
  { top: "15%", left: "75%" }, // Top Right
  { top: "50%", left: "5%" }, // Mid Left
  { top: "60%", left: "85%" }, // Mid Right
  { top: "80%", left: "20%" }, // Bottom Left
  { top: "85%", left: "70%" }, // Bottom Right
];

export function FloatingElement({
  src,
  alt,
  size,
  index,
}: FloatingElementProps) {
  const pos = basePositions[index % basePositions.length];

  return (
    <motion.div
      className="absolute"
      style={{
        top: pos.top,
        left: pos.left,
        width: size,
        height: size,
      }}
      // Entrance Animation
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{
        delay: index * 0.15, // Staggered entrance
        type: "spring",
        stiffness: 100,
        damping: 15,
      }}
    >
      {/* Continuous Floating Motion */}
      <motion.div
        className="w-full h-full relative"
        animate={{
          y: ["0%", "15%", "0%"], // Up and down bobbing
          rotate: [0, 5, -5, 0], // Gentle rotation
        }}
        transition={{
          duration: 4 + (index % 3), // Varied durations so they aren't in sync
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={`${size}px`}
          className="object-contain drop-shadow-xl"
        />
      </motion.div>
    </motion.div>
  );
}
