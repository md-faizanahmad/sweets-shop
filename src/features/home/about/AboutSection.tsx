import { aboutConfig } from "./about.config";
import { AboutContent } from "./AboutContent";
import { AboutStage } from "./AboutStage";

export default function AboutSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#FAF9F6] py-16 md:py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT SIDE: Server-friendly text content */}
          <AboutContent
            titleEn={aboutConfig.title.en}
            titleHi={aboutConfig.title.hi}
            description={aboutConfig.description}
            link={aboutConfig.links.story}
          />

          {/* RIGHT SIDE: Interactive 3D Stage */}
          <AboutStage
            shopImage={aboutConfig.image}
            elements={aboutConfig.elements}
          />
        </div>
      </div>
    </section>
  );
}
