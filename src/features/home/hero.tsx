import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { heroConfig } from "./config/hero.config";
import { HeroClient } from "./hero/HeroClient";

export default function Hero() {
  const { title, subtitle, description, cta, images } = heroConfig;

  return (
    <section className="relative w-full min-h-screen flex items-center bg-[#FAF9F6] overflow-hidden">
      {/* 1. Global Texture Background */}
      <div className="absolute inset-0 z-0 opacity-50 pointer-events-none">
        <Image
          src="/assets/hero-bg.png"
          alt="Background Texture"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* 2. Client Side Animations (Blobs & Products) */}
      <div className="absolute inset-0 z-0">
        <HeroClient images={images} />
      </div>

      {/* 3. Bottom Gradient for Transition */}
      <div
        className="absolute inset-x-0 bottom-0 h-40 z-10 pointer-events-none opacity-20"
        style={{
          background: `linear-gradient(to top, var(--nav-hover) 0%, transparent 100%)`,
        }}
      />

      {/* 4. Content Container */}
      <div className="container relative z-20 mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="max-w-xl text-center lg:text-left pt-20">
          <header className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 backdrop-blur-sm border border-neutral-100 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-500">
                {title}
              </p>
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-[1.05] tracking-tight text-neutral-900">
              Welcome to Our <br />
              <span style={{ color: "var(--nav-hover)" }}>Mithai Haven</span>
            </h1>

            <p className="text-3xl md:text-4xl font-medium text-neutral-400 italic font-serif">
              {subtitle.split("&")[0]} & more
            </p>
          </header>

          <p className="mt-6 text-base md:text-lg text-neutral-600 leading-relaxed max-w-md mx-auto lg:mx-0">
            {description}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <a
              href={cta.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-10 py-4 rounded-full font-bold text-xs uppercase tracking-widest transition-all hover:shadow-2xl active:scale-95 shadow-lg"
              style={{
                backgroundColor: "var(--nav-cta-bg)",
                color: "var(--nav-cta-text)",
              }}
            >
              {cta.text}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
