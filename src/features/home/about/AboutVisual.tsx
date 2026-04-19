"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface AboutVisualProps {
  src: string;
  alt: string;
}

export function AboutVisual({ src, alt }: AboutVisualProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="relative w-full aspect-square"
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority
        sizes="(max-width: 768px) 100vw, 600px"
        className="object-contain"
      />
    </motion.div>
  );
}
