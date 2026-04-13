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
      className="relative mt-20 border-t overflow-hidden"
      style={{
        backgroundColor: "var(--footer-bg)",
        borderColor: "var(--footer-border)",
      }}
    >
      {/* Texture Watermark */}
      <div className="absolute inset-0 z-1 opacity-[1] pointer-events-none select-none">
        <Image
          src="/assets/hero-bg.png"
          alt="Texture"
          fill
          className="object-cover"
        />
      </div>

      <Container className="relative z-10">
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <FooterBrand brand={brand} description={description} />
          <FooterLinks links={links} contact={contact} />
          <FooterMap address={contact.location} />
        </div>

        {/* Bottom Bar */}
        <div
          className="py-10 border-t flex flex-col md:flex-row gap-6 justify-between items-center"
          style={{ borderColor: "var(--footer-border)" }}
        >
          <div
            className="text-[10px] font-bold uppercase tracking-widest"
            style={{ color: "var(--footer-muted)" }}
          >
            <FooterMeta />
          </div>
          <div className="flex items-center gap-4">
            <span
              className="text-[10px] font-bold uppercase tracking-widest"
              style={{ color: "var(--footer-muted)" }}
            >
              Accepting
            </span>
            <div className="flex gap-2 opacity-60">
              {["UPI", "CARD", "CASH"].map((mode) => (
                <div
                  key={mode}
                  className="px-2 py-0.5 border text-[10px] font-bold rounded"
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
