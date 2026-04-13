import Link from "next/link";
import { Container } from "@/components/ui/container";
import { footerConfig } from "./config/footer.config";
import { FooterMeta } from "./footer-meta";

export function Footer() {
  const { brand, description, links, contact } = footerConfig;

  return (
    <footer className="border-t mt-16">
      <Container>
        <div className="py-10 grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="text-sm font-semibold">{brand}</h3>
            <p className="text-small mt-3">{description}</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-medium mb-3">Quick Links</h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-small hover:text-[var(--primary)] transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-medium mb-3">Contact</h4>
            <ul className="space-y-2 text-small">
              <li>{contact.location}</li>
              <li>
                <a href={`tel:${contact.phone}`}>{contact.phone}</a>
              </li>
              <li>
                <a
                  href={contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--primary)]"
                >
                  WhatsApp Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="py-4 border-t flex justify-between items-center">
          <FooterMeta />
        </div>
      </Container>
    </footer>
  );
}
