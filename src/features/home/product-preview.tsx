import { Container } from "@/components/ui/container";
import { ProductCard } from "@/components/ui/product-card";
import { products } from "../product-preview/product";

export function ProductsPreview() {
  return (
    <section id="products" className="py-12 md:py-16">
      <Container>
        {/* Heading */}
        <div className="mb-6">
          <h2 className="text-heading">Our Popular Sweets</h2>
          <p className="text-body mt-2">
            Freshly prepared every day with premium ingredients.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
}
