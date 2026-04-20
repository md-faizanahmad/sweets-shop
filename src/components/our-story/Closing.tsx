// components/our-story/Closing.tsx
import AnimatedSection from "./AnimatedSection";

export default function Closing() {
  return (
    <section className="relative py-32 px-6 bg-[#FCF9F5]">
      {/* Decorative Background Element */}
      <div className="absolute inset-0 opacity-5 flex items-center justify-center pointer-events-none">
        <span className="text-[20vw] font-serif font-bold text-[#D4AF37]">
          Heritage
        </span>
      </div>

      <div className="container mx-auto max-w-3xl text-center relative z-10">
        <AnimatedSection>
          <span className="text-[#B3541E] font-bold text-3xl mb-6 block">
            ❦
          </span>
          <h2 className="font-serif text-4xl md:text-6xl mb-8">
            From our family table, <br />
            <span className="italic">to yours.</span>
          </h2>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            Thank you for being a part of our story. We invite you to experience
            the flavors that have defined our family for generations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/menu"
              className="px-10 py-4 bg-[#B3541E] text-white rounded-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              Explore the Menu
            </a>
            <a
              href="/reservations"
              className="px-10 py-4 border border-[#2D2926] text-[#2D2926] rounded-sm hover:bg-[#2D2926] hover:text-white transition-all duration-300"
            >
              Visit Our Restaurant
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
