import AnimatedSection from "./AnimatedSection";

// components/our-story/Timeline.tsx
const milestones = [
  {
    year: "1948",
    title: "The First Flame",
    desc: "Our founder, Shri Ram Nath, began with a signature Kesar Peda recipe.",
  },
  {
    year: "1982",
    title: "Expansion",
    desc: "We introduced our modern patisserie line, blending French techniques with Indian flavors.",
  },
  {
    year: "2024",
    title: "Global Presence",
    desc: "Bringing the authentic taste of home to five cities worldwide.",
  },
];

export default function Timeline() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="font-serif text-4xl text-center mb-20 underline decoration-[#D4AF37] underline-offset-8">
          Our Journey
        </h2>
        <div className="relative border-l border-stone-200 ml-4 md:mx-auto md:max-w-3xl">
          {milestones.map((item, idx) => (
            <AnimatedSection key={idx}>
              <div className="mb-16 ml-8 relative">
                <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-[#B3541E] border-4 border-white" />
                <span className="font-serif text-2xl text-[#D4AF37]">
                  {item.year}
                </span>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 max-w-md">{item.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
