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
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative w-full aspect-square max-w-125 mx-auto"
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority
        sizes="(max-width: 768px) 100vw, 500px"
        className="object-contain drop-shadow-2xl"
      />
    </motion.div>
  );
}
