import { Container } from "@/components/ui/container";
import { locationConfig } from "../layouts/config/location.config";

export function Location() {
  return (
    <section id="location" className="py-12 md:py-16">
      <Container>
        <div className="mb-6">
          <h2 className="text-heading">Visit Our Shop</h2>
          <p className="text-body mt-2">
            Find us easily and get directions in one click.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 items-center">
          {/* Map */}
          <div className="w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden border">
            <iframe
              src={locationConfig.embedUrl}
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Shop Location Map"
              className="border-0"
            />
          </div>

          {/* Info + CTA */}
          <div>
            <p className="text-body">{locationConfig.address}</p>

            <a
              href={locationConfig.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex mt-4 h-11 items-center justify-center rounded-md px-5 text-sm font-medium bg-[var(--primary)] text-white hover:opacity-90 transition"
            >
              Get Directions
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
