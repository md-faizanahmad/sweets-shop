"use client";

import { Container } from "@/components/ui/container";
import { badges } from "./config/trust.config";
import { Badge } from "@/components/ui/badge";
import { Reviews } from "./reviews";
import { motion } from "framer-motion";

export function TrustSection() {
  return (
    <section className="py-20 bg-[#FAF9F6] overflow-hidden">
      <Container>
        {/* Header - Boutique Style */}
        <div className="flex flex-col items-center text-center mb-12 space-y-3">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-neutral-100 shadow-sm">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-(--footer-accent)">
              Our Customers
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-neutral-900">
            What our{" "}
            <span style={{ color: "var(--nav-hover)" }}>Sweet Family</span> says
          </h2>
        </div>

        {/* Badges - Floating Flex Row */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {badges.map((b, i) => (
            <motion.div
              key={b.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Badge label={b.label} />
            </motion.div>
          ))}
        </div>

        {/* Reviews */}
        <Reviews />
      </Container>
    </section>
  );
}
