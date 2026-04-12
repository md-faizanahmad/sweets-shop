import Hero from "@/features/home/hero";
import { ProductsPreview } from "@/features/home/product-preview";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ProductsPreview />
      {/* <Image alt="" src="/assets/g-jamun.png" width={50} height={50} /> */}
    </main>
  );
}
