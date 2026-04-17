"use client";

import { MapPin, Navigation, Clock } from "lucide-react";
import { Container } from "@/components/ui/container";
import { locationConfig } from "../layouts/config/location.config";
import { motion } from "framer-motion";

export function Location() {
  return (
    <section id="location" className="py-12 md:py-20 bg-[#FAF9F6]">
      <Container>
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center md:text-left mb-8 md:mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-neutral-400 block mb-2">
              Our Boutique
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-neutral-900 tracking-tight">
              Visit the Haven
            </h2>
          </div>

          {/* Card */}
          <div className="rounded-3xl bg-white border border-neutral-100 shadow-xl overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              {/* MAP */}
              <div className="relative w-full lg:w-1/2 h-75 sm:h-95 md:h-105 lg:h-auto">
                <iframe
                  src={locationConfig.embedUrl}
                  className="w-full h-full"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Shop Location"
                />

                {/* Overlay CTA (mobile boost) */}
                <div className="absolute bottom-4 left-4 right-4 lg:hidden">
                  <a
                    href={locationConfig.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 h-12 rounded-xl text-xs font-bold uppercase tracking-wide shadow-lg"
                    style={{
                      backgroundColor: "var(--nav-cta-bg)",
                      color: "var(--nav-cta-text)",
                    }}
                  >
                    <Navigation className="w-4 h-4" />
                    Open in Maps
                  </a>
                </div>
              </div>

              {/* INFO */}
              <div className="w-full lg:w-1/2 p-6 sm:p-8 md:p-10 flex flex-col justify-center">
                <div className="space-y-6 mb-8">
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-xl bg-pink-50">
                      <MapPin className="w-5 h-5 text-pink-500" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase text-neutral-900 mb-1">
                        Address
                      </p>
                      <p className="text-sm text-neutral-600 leading-relaxed">
                        {locationConfig.address}
                      </p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-xl bg-orange-50">
                      <Clock className="w-5 h-5 text-orange-500" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase text-neutral-900 mb-1">
                        Hours
                      </p>
                      <p className="text-sm text-neutral-600">
                        Open Daily: 10 AM - 10 PM
                      </p>
                    </div>
                  </div>
                </div>

                {/* Desktop CTA */}
                <motion.a
                  whileTap={{ scale: 0.96 }}
                  href={locationConfig.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden lg:flex items-center justify-center gap-3 w-full h-14 rounded-2xl text-sm font-bold uppercase tracking-wide shadow-lg hover:shadow-xl transition-all"
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
