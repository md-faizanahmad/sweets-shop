"use client";

import { MapPin, Navigation, Clock } from "lucide-react";
import { Container } from "@/components/ui/container";
import { locationConfig } from "../layouts/config/location.config";
import { motion } from "framer-motion";

export function Location() {
  return (
    <section id="location" className="py-12 md:py-20 bg-[#FAF9F6]">
      <Container>
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center md:text-left mb-8 md:mb-10">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-400 block mb-2">
              Our Boutique
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-neutral-900 tracking-tight">
              Visit the Haven
            </h2>
          </div>

          {/* Card */}
          <div className="rounded-[2.5rem] bg-white border border-neutral-100 shadow-2xl shadow-neutral-200/60 overflow-hidden">
            <div className="flex flex-col md:flex-row">
              {/* MAP (FIXED HEIGHT) */}
              <div className="w-full md:w-1/2 h-[350px] md:h-[450px] border-b md:border-b-0 md:border-r border-neutral-100">
                <iframe
                  src={locationConfig.embedUrl}
                  className="w-full h-full"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Shop Location"
                />
              </div>

              {/* INFO */}
              <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                <div className="space-y-6 mb-8">
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-xl bg-pink-50">
                      <MapPin className="w-5 h-5 text-pink-500" />
                    </div>
                    <div>
                      <p className="text-sm font-black uppercase text-neutral-900 mb-1">
                        Address
                      </p>
                      <p className="text-sm text-neutral-600">
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
                      <p className="text-sm font-black uppercase text-neutral-900 mb-1">
                        Hours
                      </p>
                      <p className="text-sm text-neutral-600">
                        Open Daily: 10 AM - 10 PM
                      </p>
                    </div>
                  </div>
                </div>

                {/* Button */}
                <motion.a
                  whileTap={{ scale: 0.96 }}
                  href={locationConfig.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full h-14 rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] shadow-xl transition-all hover:shadow-2xl"
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
