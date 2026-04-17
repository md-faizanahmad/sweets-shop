import Image from "next/image";
import { Container } from "@/components/ui/container";
import { FooterMeta } from "./footer-meta";
import { footerConfig } from "./config/footer.config";
import { FooterBrand } from "./Footer/FooterBrand";
import { FooterLinks } from "./Footer/FooterLink";
import { FooterMap } from "./Footer/FooterMap";

export function Footer() {
  const { brand, description, links, contact } = footerConfig;

  return (
    <footer
      className="relative mt-16 border-t overflow-hidden"
      style={{
        backgroundColor: "var(--footer-bg)",
        borderColor: "var(--footer-border)",
      }}
    >
      {/* Texture */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <Image
          src="/assets/hero-bg.png"
          alt="Texture"
          fill
          className="object-cover"
        />
      </div>

      <Container className="relative z-10">
        {/* Main Section */}
        <div className="py-10 md:py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {/* Brand */}
          <FooterBrand brand={brand} description={description} />

          {/* Links */}
          <FooterLinks links={links} contact={contact} />

          {/* Map (desktop inline) */}
          <div className="hidden lg:block">
            <FooterMap address={contact.location} />
          </div>
        </div>

        {/* Map for Mobile */}
        <div className="pb-10 lg:hidden">
          <FooterMap address={contact.location} />
        </div>

        {/* Bottom Bar */}
        <div
          className="py-6 border-t flex flex-col md:flex-row gap-4 justify-between items-center text-center md:text-left"
          style={{ borderColor: "var(--footer-border)" }}
        >
          <div
            className="text-xs font-medium tracking-wide"
            style={{ color: "var(--footer-muted)" }}
          >
            <FooterMeta />
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <span
              className="text-xs font-medium tracking-wide"
              style={{ color: "var(--footer-muted)" }}
            >
              Accepting
            </span>

            <div className="flex gap-2">
              {["UPI", "CARD", "CASH"].map((mode) => (
                <div
                  key={mode}
                  className="px-3 py-1 border text-xs font-medium rounded"
                  style={{
                    borderColor: "var(--footer-border)",
                    color: "var(--footer-text)",
                  }}
                >
                  {mode}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
