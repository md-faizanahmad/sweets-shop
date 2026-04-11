import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="py-16">
      <Container>
        <div className="max-w-xl">
          {/* Headline */}
          <h1 className="text-display">Fresh Sweets Made Daily</h1>

          {/* Subtext */}
          <p className="text-body mt-4">
            Experience authentic taste crafted with premium ingredients and
            tradition.
          </p>

          {/* CTA */}
          <div className="mt-6 flex gap-3">
            <Button>Order Now</Button>
            <Button variant="secondary">View Menu</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
