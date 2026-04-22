"use client";

import { Navigation, MapPin } from "lucide-react";
import { Container } from "@/components/ui/container";
import { locationConfig } from "../layouts/config/location.config";

export function Location() {
  return (
    <section id="location" className="py-8 md:py-16 bg-[#FAF9F6]">
      <Container>
        <div className="max-w-4xl mx-auto px-4">
          {/* Header to match your screenshot style */}
          <div className="text-center mb-10">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-400 block mb-2">
              Our Boutique
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-neutral-900 tracking-tight">
              Find Our Shop
            </h2>
          </div>

          {/* Minimalist Card (No Iframe) */}
          <div className="relative rounded-[2.5rem] overflow-hidden bg-neutral-100 border border-neutral-200 shadow-sm h-[300px] md:h-[400px] flex items-center justify-center group">
            {/* Background Pattern/Texture to replace the map */}
            <div
              className="absolute inset-0 opacity-40 transition-opacity group-hover:opacity-60"
              style={{
                backgroundImage: `radial-gradient(#d1d1d1 1px, transparent 1px)`,
                backgroundSize: "20px 20px",
              }}
            />

            <div className="relative flex flex-col items-center text-center px-6">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg mb-4">
                <MapPin className="w-8 h-8 text-orange-500" strokeWidth={1.5} />
              </div>
              <p className="text-neutral-500 text-sm font-medium mb-8 max-w-xs">
                {locationConfig.address}
              </p>

              {/* Get Directions Button */}
              <a
                href={locationConfig.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-white hover:bg-neutral-50 text-neutral-900 px-8 py-4 rounded-2xl shadow-xl transition-all active:scale-95 border border-neutral-100"
              >
                <Navigation className="w-4 h-4 text-orange-600 fill-orange-600" />
                <span className="text-xs font-black uppercase tracking-widest">
                  Get Directions
                </span>
              </a>
            </div>
          </div>

          {/* Simple footer link if you want to keep the social vibe from your screenshot */}
          <div className="flex justify-center gap-6 mt-8 text-[10px] font-bold uppercase tracking-widest text-neutral-400">
            <span className="hover:text-neutral-900 cursor-pointer transition-colors">
              Instagram
            </span>
            <span className="hover:text-neutral-900 cursor-pointer transition-colors">
              Facebook
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
