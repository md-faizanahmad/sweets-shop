"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function AboutVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }} // Prevents animation from re-triggering constantly
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative w-full max-w-2xl mx-auto aspect-square md:aspect-video lg:h-100"
    >
      <Image
        src="/images/shop-3d.png"
        alt="3D Shop Illustration"
        fill
        priority // Loads this image faster as it's likely a focal point
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-contain"
      />
    </motion.div>
  );
}
