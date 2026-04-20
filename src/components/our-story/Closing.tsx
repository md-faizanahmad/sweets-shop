// /components/our-story/Closing.tsx
import Link from "next/link";
import AnimatedSection from "./AnimatedSection";
import { OUR_STORY_CONFIG } from "./our-story.config";

export default function Closing() {
  const { closing } = OUR_STORY_CONFIG;
  return (
    <section className="relative py-40 px-6 bg-[#2D2926] text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10 flex items-center justify-center select-none pointer-events-none">
        <span className="text-[25vw] font-serif font-bold text-white whitespace-nowrap leading-none">
          {closing.bgText}
        </span>
      </div>

      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <AnimatedSection>
          <h2 className="font-serif text-5xl md:text-7xl mb-10 leading-tight">
            {closing.title} <br />
            <span className="italic text-[#D4AF37]">{closing.titleAccent}</span>
          </h2>
          <p className="text-lg md:text-2xl text-stone-400 mb-16 max-w-2xl mx-auto font-light">
            {closing.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              href={closing.primaryCta.href}
              className="w-full sm:w-auto px-12 py-5 bg-[#D4AF37] text-[#2D2926] font-bold uppercase tracking-tighter hover:bg-white transition-colors duration-300"
            >
              {closing.primaryCta.label}
            </Link>
            <Link
              href={closing.secondaryCta.href}
              className="w-full sm:w-auto px-12 py-5 border border-white/30 text-white font-bold uppercase tracking-tighter hover:bg-white hover:text-[#2D2926] transition-all duration-300"
            >
              {closing.secondaryCta.label}
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
