"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

export function VisualShowcase() {
  return (
    <section className="relative w-full overflow-hidden bg-[#FAF9F6]">
      {/* 1. Header Layer - Floating above the video */}
      <div className="relative z-20 pt-16 pb-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 backdrop-blur-sm border border-neutral-100 shadow-sm mb-4"
        >
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[var(--footer-accent)]">
            Our Kitchen
          </span>
        </motion.div>

        <h2 className="text-3xl md:text-5xl font-black text-neutral-900 tracking-tight mb-4">
          Crafted Fresh,{" "}
          <span style={{ color: "var(--nav-hover)" }}>Every Day</span>
        </h2>
      </div>

      {/* 2. Attached Background Video Container */}
      <div className="relative w-full h-[40vh] md:h-[60vh] lg:h-[70vh]">
        {/* The Wrapper that creates the "attached" look */}
        <div className="absolute inset-0 w-full h-full">
          <div className="sticky top-0 w-full h-full overflow-hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="w-full h-full object-cover scale-105"
            >
              <source src="/assets/indian-snacks.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Premium Textures & Overlays */}
            {/* Vignette for depth */}
            <div className="absolute inset-0 bg-linear-to-b from-[#393937] via-transparent to-[#FAF9F6]" />
            <div className="absolute inset-0 bg-black/0 pointer-events-none" />

            {/* Center Play Indicator (Visual Only) */}
            {/* <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-16 h-16 rounded-full bg-white/50 backdrop-blur-md border border-white/30 flex items-center justify-center">
                <Play className="w-6 h-6 text-white fill-white" />
              </div>
            </div> */}
          </div>
        </div>
      </div>

      {/* 3. Bottom Caption - Attached below video */}
      <div className="relative z-20 py-12 text-center px-6">
        <p className="text-neutral-500 text-sm md:text-base max-w-xl mx-auto italic font-serif leading-relaxed">
          &quot;Watch our sweets come to life — where tradition, purity, and
          perfection meet in every single bite.&quot;
        </p>
      </div>
    </section>
  );
}
