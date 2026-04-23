// /components/our-story/Hero.tsx
import Image from "next/image";
import AnimatedSection from "./AnimatedSection";
import { OUR_STORY_CONFIG } from "./our-story.config";

export default function Hero() {
  const { hero } = OUR_STORY_CONFIG;
  return (
    <section className="relative min-h-screen flex items-center pt-20  px-6 md:px-12 lg:px-24">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        <AnimatedSection>
          <div className="max-w-xl">
            <span className="uppercase tracking-[0.3em] text-xs md:text-sm text-[#B3541E] font-bold mb-6 block">
              {hero.badge}
            </span>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-8  leading-[1.1] text-[#2D2926]">
              {hero.title}{" "}
              <span className="italic text-[#D4AF37]">{hero.titleAccent}</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-light">
              {hero.description}
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="relative h-100 md:h-150 w-full rounded-sm overflow-hidden shadow-2xl">
            <Image
              src={hero.image}
              alt="Premium Indian Sweets Selection"
              fill
              priority // High priority as it's above the fold
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
