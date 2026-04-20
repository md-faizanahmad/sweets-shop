import AnimatedSection from "./AnimatedSection";

// components/our-story/Values.tsx
const values = [
  {
    title: "Purest Ingredients",
    text: "Organic A2 Ghee and hand-picked Saffron from the valleys of Pampore.",
  },
  {
    title: "Time-Honored",
    text: "We follow the slow-cooking methods used by our ancestors for over 70 years.",
  },
  {
    title: "Modern Elegance",
    text: "Our packaging and service reflect the grace of contemporary India.",
  },
];

export default function Values() {
  return (
    <section className="py-24 px-6 bg-[#FCF9F5]">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {values.map((v, i) => (
          <AnimatedSection key={i}>
            <div className="text-center p-8 bg-white/50 border border-stone-100 rounded-sm">
              <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-full mx-auto mb-6 flex items-center justify-center text-[#B3541E]">
                ✦
              </div>
              <h3 className="font-serif text-xl mb-4">{v.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{v.text}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
