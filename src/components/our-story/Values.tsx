// /components/our-story/Values.tsx
import AnimatedSection from "./AnimatedSection";
import { OUR_STORY_CONFIG } from "./our-story.config";

export default function Values() {
  return (
    <section className="py-32 px-6 bg-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24">
        {OUR_STORY_CONFIG.values.map((v, i) => (
          <AnimatedSection key={i}>
            <div className="text-center group cursor-default">
              <div className="text-4xl mb-8 transform transition-transform group-hover:scale-110 duration-500 block">
                {v.icon}
              </div>
              <h3 className="font-serif text-2xl mb-6 tracking-wide">
                {v.title}
              </h3>
              <p className="text-gray-500 leading-relaxed font-light">
                {v.text}
              </p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
