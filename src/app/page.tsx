import Hero from "@/features/home/hero";
import { ProductsPreview } from "@/features/home/product-preview";
import { TrustSection } from "@/features/home/trust-section";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ProductsPreview />
      <TrustSection />
      {/* <Image alt="" src="/assets/g-jamun.png" width={50} height={50} /> */}
    </main>
  );
}
