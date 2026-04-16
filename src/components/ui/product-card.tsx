"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PhoneCall, ShoppingBag, Star } from "lucide-react";
import { contactConfig } from "../layouts/config/contact.config";
import { useState } from "react";
import Link from "next/link";
import { OrderModal } from "@/features/orders/components/Order-Modal";
import { Product } from "@/@types/product.types";
import { formatPrice } from "@/helper/parse-quantity";

type Props = {
  product: Product;
};

export function ProductCard({ product }: Props) {
  const [open, setOpen] = useState(false);

  const priceText = formatPrice(product);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ y: -8 }}
        className="group relative flex flex-col items-center p-4 transition-all duration-500 cursor-pointer"
      >
        {/* Background */}
        <div className="absolute inset-0 z-0 bg-pink-50/50 rounded-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-95 group-hover:scale-105" />

        {/* Image */}
        <div className="relative w-full aspect-square z-10">
          <div className="absolute inset-10 bg-white/60 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <Image
            src={product.image.src}
            alt={product.image.alt || product.name}
            fill
            className="object-contain drop-shadow-[0_10px_10px_rgba(0,0,0,0.08)] transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 50vw, 25vw"
          />

          <div className="absolute top-2 right-2 flex items-center gap-1 bg-white/80 backdrop-blur-md px-2 py-1 rounded-full border border-neutral-100 shadow-sm opacity-0 group-hover:opacity-100 transition-all duration-300">
            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
            <span className="text-[10px] font-bold text-neutral-800">4.9</span>
          </div>
        </div>

        {/* Info */}
        <div className="mt-4 text-center z-10 w-full">
          <h3
            className="text-lg font-black tracking-tight transition-colors duration-300 group-hover:text-(--nav-hover)"
            style={{ color: "var(--nav-text)" }}
          >
            {product.name}
          </h3>

          <div className="flex items-center justify-center gap-3 mt-2">
            {/* fake original price (correct calculation) */}
            <span className="text-sm font-bold text-neutral-400 line-through">
              ₹{product.price.amount + 100}/{product.price.unit}
            </span>

            <span
              className="text-base font-black px-3 py-1 rounded-lg bg-white shadow-sm border border-neutral-100"
              style={{ color: "var(--nav-text)" }}
            >
              {priceText}
            </span>
          </div>

          {/* Actions */}
          <div className="mt-6 w-full flex gap-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
            <button
              onClick={() => setOpen(true)}
              disabled={!product.isAvailable}
              className="flex-1 h-12 flex items-center justify-center gap-2 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] shadow-lg active:scale-95 disabled:opacity-50"
              style={{
                backgroundColor: "var(--nav-cta-bg)",
                color: "var(--nav-cta-text)",
              }}
            >
              <ShoppingBag className="w-4 h-4" /> Order
            </button>

            <Link
              href={`tel:${contactConfig.phone}`}
              className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white border border-neutral-100 text-neutral-400 hover:text-neutral-900 shadow-sm active:scale-95 transition-colors"
            >
              <PhoneCall className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </motion.div>

      <OrderModal
        open={open}
        product={product}
        onClose={() => setOpen(false)}
      />
    </>
  );
}
