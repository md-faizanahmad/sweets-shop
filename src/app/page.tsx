import { AboutSection } from "@/features/home/about/AboutSection";
import Hero from "@/features/home/hero";
import { ProductsPreview } from "@/features/home/product-preview";
import { TrustSection } from "@/features/home/trust-section";
import { VisualShowcase } from "@/features/home/VisualShowcase";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ProductsPreview />
      <VisualShowcase />
      <AboutSection />
      <TrustSection />
      {/* <Image alt="" src="/assets/g-jamun.png" width={50} height={50} /> */}
    </main>
  );
}
