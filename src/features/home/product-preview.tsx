"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { ProductCard } from "@/components/ui/product-card";
import { products } from "../product-preview/product";
import { Sparkles } from "lucide-react";

// Animation variants for the staggered grid entrance
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export function ProductsPreview() {
  return (
    <section
      id="products"
      className="relative py-20 md:py-32 overflow-hidden bg-[#FAF9F6]"
    >
      {/* Decorative Background Element (Matches Hero Blobs) */}
      <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-pink-50/50 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />

      <Container>
        {/* --- SECTION HEADER --- */}
        <div className="relative mb-16 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-neutral-100 shadow-sm mb-4"
          >
            <Sparkles className="w-3 h-3 text-yellow-500" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-400">
              Customer Favorites
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black tracking-tight"
            style={{ color: "var(--nav-text)" }}
          >
            Explore Our{" "}
            <span style={{ color: "var(--nav-hover)" }}>Sweets</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-neutral-500 max-w-lg leading-relaxed text-base md:text-lg"
          >
            Every piece is a journey into the world of shuddh ingredients,
            traditional aromas, and warm smiles.
          </motion.p>
        </div>

        {/* --- ANIMATED GRID --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12 md:gap-x-10"
        >
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </motion.div>

        {/* --- BOTTOM CTA (Optional) --- */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-20 text-center"
        >
          <p className="text-sm font-bold text-neutral-400 uppercase tracking-widest">
            Don&apos;t see your favorite?
            <a
              href="#contact"
              className="ml-2 underline transition-colors hover:text-[var(--nav-hover)]"
              style={{ color: "var(--nav-text)" }}
            >
              Ask us on WhatsApp
            </a>
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
