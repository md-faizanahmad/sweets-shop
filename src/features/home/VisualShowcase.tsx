"use client";

import { Container } from "@/components/ui/container";

export function VisualShowcase() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <div className="max-w-5xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-black text-neutral-900 tracking-tight mb-4">
            Crafted Fresh, Every Day
          </h2>

          <p className="text-neutral-600 text-sm md:text-base mb-10 max-w-2xl mx-auto">
            Watch our sweets come to life — made with tradition, purity, and
            perfection.
          </p>

          {/* Video Container */}
          <div className="relative w-full overflow-hidden rounded-[2rem] shadow-2xl">
            {/* Video */}
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="w-full h-[250px] md:h-[450px] object-cover"
            >
              <source src="/assets/indian-snacks.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Optional subtle overlay */}
            <div className="absolute inset-0 bg-black/10 pointer-events-none" />
          </div>
        </div>
      </Container>
    </section>
  );
}
