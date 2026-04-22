// components/ui/MiniMap.tsx
"use client";

import { Navigation, MapPin } from "lucide-react";
import { locationConfig } from "../layouts/config/location.config";

export function Location() {
  const { location, name, directionsUrl } = locationConfig;

  return (
    <div className="relative w-full h-full group overflow-hidden">
      {/* 1. THE MAP IFRAME */}
      <iframe
        title={`${name} Location`}
        src={`https://maps.google.com/maps?q=${location.latitude},${location.longitude}&z=15&output=embed`}
        loading="lazy"
        className="absolute inset-0 h-full w-full border-0 grayscale-[0.5] contrast-[1.2] transition-all duration-500 group-hover:grayscale-0 group-hover:scale-110"
      />

      {/* 2. HOVER OVERLAY (Visible on hover/tap) */}
      <a
        href={directionsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 bg-black/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center p-4 text-center"
      >
        {/* Address in Mini Map */}
        <div className="mb-2 p-1.5 bg-white/10 rounded-full translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          <MapPin className="w-4 h-4 text-white" />
        </div>

        {/* Action Button */}
        <div className="flex items-center gap-2 bg-orange-600 cursor-pointer text-white px-3 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-widest translate-y-2 group-hover:translate-y-0 transition-transform duration-300 delay-150">
          <Navigation className="w-3 h-3 fill-current" />
          Get Directions
        </div>
      </a>
    </div>
  );
}
