"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { ProductCard } from "@/components/ui/product-card";
import { Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";
import { loadProducts } from "@/schema/load.products";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

export function ProductsPreview() {
  const products = loadProducts();

  // show only first 5
  const displayProducts = products.slice(0, 5);

  return (
    <section
      id="products"
      className="relative py-20 md:py-32 overflow-hidden bg-[#FAF9F6]"
    >
      {/* Background blob */}
      <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-pink-50/50 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />

      <Container>
        {/* HEADER */}
        <div className="relative mb-12 md:mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="text-center md:text-left">
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
              Our Best{" "}
              <span style={{ color: "var(--nav-hover)" }}>Sellers</span>
            </motion.h2>
          </div>

          {/* Desktop CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="hidden md:block"
          >
            <Link
              href="/allproducts"
              className="group flex items-center gap-3 text-xs font-black uppercase tracking-[0.2em] text-(--nav-hover)"
            >
              Explore Full Menu
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>

        {/* GRID */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          {displayProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}

          {/* View More Card */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <Link
              href="/allproducts"
              className="group relative flex flex-col items-center justify-center h-60 p-6 transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center mb-4 group-hover:bg-(--nav-hover) group-hover:text-white transition-colors duration-300">
                <ArrowRight className="w-5 h-5" />
              </div>

              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400 text-center group-hover:text-neutral-900">
                See More <br /> Selection
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
