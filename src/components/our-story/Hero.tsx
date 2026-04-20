// components/our-story/Hero.tsx
import AnimatedSection from "./AnimatedSection";
import { OUR_STORY_CONFIG } from "./our-story.config";

export default function Hero() {
  const { hero } = OUR_STORY_CONFIG;

  return (
    <section className="relative min-h-[80vh] flex items-center pt-20 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <AnimatedSection>
          <div className="max-w-xl">
            <span className="uppercase tracking-[0.2em] text-sm text-[#B3541E] font-semibold mb-4 block">
              {hero.badge}
            </span>
            <h1 className="font-serif text-5xl md:text-7xl mb-6 leading-tight text-[#2D2926]">
              {hero.title}{" "}
              <span className="italic text-[#D4AF37]">{hero.titleAccent}</span>
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              {hero.description}
            </p>
          </div>
        </AnimatedSection>

        <div className="relative h-[500px] w-full bg-stone-200 rounded-sm overflow-hidden shadow-2xl">
          <img
            src={hero.image}
            alt="Heritage Story"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}
