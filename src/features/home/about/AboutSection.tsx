import Link from "next/link";
import { aboutConfig } from "./about.config";
import { AboutVisual } from "./AboutVisual";
import { ArrowRight } from "lucide-react"; // Optional: for a cleaner UI

export function AboutSection() {
  return (
    <section className="py-20 bg-[#FAF9F6] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* TEXT CONTENT */}
          <div className="order-2 md:order-1">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight mb-6">
              {aboutConfig.title}
            </h2>
            <p className="text-lg text-neutral-600 leading-relaxed mb-8">
              {aboutConfig.description}
            </p>

            <Link
              href="/our-story"
              className="inline-flex items-center gap-2 bg-neutral-900 text-white px-8 py-4 rounded-full font-medium transition-all hover:bg-neutral-800 hover:shadow-lg active:scale-95"
            >
              Learn Our Story
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* VISUAL CONTENT */}
          <div className="order-1 md:order-2">
            <AboutVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
