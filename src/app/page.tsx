import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <main>
      <section className="py-20">
        <Container>
          <h1 className="text-display">Fresh Traditional Sweets</h1>

          <p className="text-body mt-4 max-w-md">
            Crafted daily with authentic ingredients and timeless recipes.
          </p>

          <div className="mt-6">
            <Button>Order Now</Button>
          </div>
        </Container>
      </section>
    </main>
  );
}
