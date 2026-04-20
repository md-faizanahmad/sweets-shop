// /components/our-story/Timeline.tsx
import AnimatedSection from "./AnimatedSection";
import { OUR_STORY_CONFIG } from "./our-story.config";

export default function Timeline() {
  const { timeline } = OUR_STORY_CONFIG;
  return (
    <section className="py-24 bg-white border-y border-stone-100">
      <div className="container mx-auto px-6">
        <h2 className="font-serif text-4xl md:text-5xl text-center mb-24">
          {timeline.heading}
        </h2>
        <div className="relative max-w-4xl mx-auto border-l-2 border-[#D4AF37]/30 ml-4 md:ml-auto">
          {timeline.items.map((item, idx) => (
            <AnimatedSection key={idx}>
              <div className="mb-20 ml-10 relative group">
                <div className="absolute -left-12.25 top-0 w-4 h-4 rounded-full bg-[#B3541E] ring-8 ring-white transition-transform group-hover:scale-125" />
                <span className="font-serif text-3xl text-[#D4AF37] block mb-2">
                  {item.year}
                </span>
                <h3 className="text-2xl font-bold mb-4 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-lg max-w-xl leading-relaxed">
                  {item.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
