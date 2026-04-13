"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShoppingBag, Star } from "lucide-react";
import { Product } from "@/features/product-preview/product.config";

type Props = {
  product: Product;
};

export function ProductCard({ product }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="group relative flex flex-col items-center p-4 transition-all duration-500 cursor-pointer"
    >
      {/* 1. Organic Background Blob (Visible on Hover) */}
      <div className="absolute inset-0 z-0 bg-pink-50/50 rounded-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-95 group-hover:scale-105" />

      {/* 2. Floating Image Container */}
      <div className="relative w-full aspect-square z-10">
        {/* Subtle Halo behind product */}
        <div className="absolute inset-10 bg-white/60 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <Image
          src={product.image}
          alt={product.alt || product.name}
          fill
          className="object-contain p-4 drop-shadow-[0_10px_10px_rgba(0,0,0,0.08)] transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3"
          sizes="(max-width: 768px) 50vw, 25vw"
        />

        {/* Floating Rating Badge */}
        <div className="absolute top-2 right-2 flex items-center gap-1 bg-white/80 backdrop-blur-md px-2 py-1 rounded-full border border-neutral-100 shadow-sm opacity-0 group-hover:opacity-100 transition-all duration-300">
          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
          <span className="text-[10px] font-bold text-neutral-800">4.9</span>
        </div>
      </div>

      {/* 3. Product Info */}
      <div className="mt-4 text-center z-10 w-full">
        <h3
          className="text-lg font-black tracking-tight transition-colors duration-300 group-hover:text-(--nav-hover)"
          style={{ color: "var(--nav-text)" }}
        >
          {product.name}
        </h3>

        <div className="flex items-center justify-center gap-3 mt-2">
          <span className="text-sm font-bold text-neutral-400 line-through">
            {/* Dynamic fake original price for "Premium" feel */}₹
            {parseInt(product.price.replace(/\D/g, "")) + 100}
          </span>
          <span
            className="text-base font-black px-3 py-1 rounded-lg bg-white shadow-sm border border-neutral-100"
            style={{ color: "var(--nav-text)" }}
          >
            {product.price}
          </span>
        </div>

        {/* 4. Instant Action Button (WhatsApp or Add) */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="mt-5 w-full flex items-center justify-center gap-2 py-3 rounded-2xl font-bold text-[10px] uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-xl"
          style={{
            backgroundColor: "var(--nav-cta-bg)",
            color: "var(--nav-cta-text)",
          }}
        >
          <ShoppingBag className="w-4 h-4" />
          Order Now
        </motion.button>
      </div>
    </motion.div>
  );
}
