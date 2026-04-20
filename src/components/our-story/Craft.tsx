// /components/our-story/Craft.tsx
import Image from "next/image";
import AnimatedSection from "./AnimatedSection";
import { OUR_STORY_CONFIG } from "./our-story.config";

export default function Craft() {
  const { craft } = OUR_STORY_CONFIG;
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#FCF9F5]">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative h-125 md:h-175 w-full">
            <AnimatedSection>
              <Image
                src={craft.image}
                alt="Artisan Craftsmanship"
                fill
                className="object-cover rounded-sm shadow-xl"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-8 shadow-2xl max-w-xs hidden md:block">
                <p className="font-serif italic text-lg text-[#B3541E]">
                  &quot;{craft.quote}&quot;
                </p>
              </div>
            </AnimatedSection>
          </div>

          <div className="order-1 lg:order-2 space-y-8">
            <AnimatedSection>
              <h2 className="font-serif text-4xl md:text-6xl leading-tight">
                {craft.heading} <br />
                <span className="text-[#D4AF37] italic">
                  {craft.headingAccent}
                </span>
              </h2>
              <div className="w-16 h-1 bg-[#B3541E] my-8" />
              <div className="space-y-6 text-gray-700 text-lg md:text-xl font-light leading-relaxed">
                <p>{craft.description1}</p>
                <p>{craft.description2}</p>
              </div>
              <button className="mt-10 px-10 py-5 bg-[#2D2926] text-white hover:bg-[#B3541E] transition-all duration-500 uppercase tracking-widest text-xs font-bold">
                {craft.cta}
              </button>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
