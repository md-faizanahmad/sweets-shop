// components/our-story/Craft.tsx
import AnimatedSection from "./AnimatedSection";
import { OUR_STORY_CONFIG } from "./our-story.config";

export default function Craft() {
  const { craft } = OUR_STORY_CONFIG;

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <div className="relative group">
              <img
                src={craft.image}
                alt="Artisan"
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-8 right-8 bg-white p-6 shadow-xl max-w-xs">
                <p className="font-serif italic text-[#B3541E]">
                  "{craft.quote}"
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="space-y-8">
              <h2 className="font-serif text-4xl md:text-5xl leading-tight">
                {craft.heading} <br />{" "}
                <span className="text-[#D4AF37]">{craft.headingAccent}</span>
              </h2>
              <div className="w-20 h-1 bg-[#B3541E]" />
              <p className="text-gray-700 text-lg leading-relaxed">
                {craft.description1}
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                {craft.description2}
              </p>
              <button className="px-8 py-4 bg-[#2D2926] text-white hover:bg-[#B3541E] transition-all">
                {craft.cta}
              </button>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
