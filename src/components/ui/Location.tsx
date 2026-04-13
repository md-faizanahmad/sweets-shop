"use client";

import { MapPin, Navigation } from "lucide-react";
import { Container } from "@/components/ui/container";
import { locationConfig } from "../layouts/config/location.config";
import { motion } from "framer-motion";

export function Location() {
  return (
    <section id="location" className="py-12 bg-[#FAF9F6]">
      <Container>
        <div className="max-w-3xl mx-auto">
          {/* Header - Compact */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
            <div className="space-y-1">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-(--footer-accent)">
                Our Boutique
              </span>
              <h2 className="text-2xl font-black text-neutral-900 tracking-tight">
                Visit the Haven
              </h2>
            </div>
            <p className="text-xs font-medium text-neutral-500 max-w-60">
              Find us in the heart of the city for fresh, daily-made traditional
              treats.
            </p>
          </div>

          {/* Compact Unified Card */}
          <div className="relative group overflow-hidden rounded-4xl bg-white border border-neutral-100 shadow-xl shadow-neutral-200/50">
            <div className="flex flex-col md:flex-row">
              {/* Map - Smaller & Interactive */}
              <div className="w-full md:w-1/2 h-52 md:h-64 relative overflow-hidden grayscale-[0.5] contrast-[1.1] group-hover:grayscale-0 transition-all duration-700">
                <iframe
                  src={locationConfig.embedUrl}
                  width="100%"
                  height="100%"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Shop Location"
                  className="border-0"
                />
              </div>

              {/* Info - Clean & Functional */}
              <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
                <div className="flex items-start gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-pink-50">
                    <MapPin className="w-4 h-4 text-(--footer-accent)" />
                  </div>
                  <p className="text-sm font-bold leading-relaxed text-neutral-700">
                    {locationConfig.address}
                  </p>
                </div>

                <motion.a
                  whileTap={{ scale: 0.95 }}
                  href={locationConfig.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full h-12 rounded-2xl text-xs font-black uppercase tracking-widest shadow-lg transition-all"
                  style={{
                    backgroundColor: "var(--nav-cta-bg)",
                    color: "var(--nav-cta-text)",
                  }}
                >
                  <Navigation className="w-4 h-4" />
                  Get Directions
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
