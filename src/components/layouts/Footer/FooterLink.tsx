import Link from "next/link";
import { Phone, Clock, ArrowRight } from "lucide-react";
// Import the specific types from your config
import { FooterConfig, FooterLink } from "../config/footer.config";

interface FooterLinksProps {
  links: FooterLink[]; // Fixed: This must be an array to use .map()
  contact: FooterConfig["contact"]; // Fixed: Drilling down to the contact object type
}

export function FooterLinks({ links, contact }: FooterLinksProps) {
  return (
    <>
      <div className="text-center md:text-left">
        <h4
          className="text-xs font-black uppercase tracking-[0.3em] mb-8"
          style={{ color: "var(--footer-muted)" }}
        >
          Sweet Menu
        </h4>
        <ul className="space-y-4">
          {links.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="group inline-flex items-center gap-2 text-sm font-bold transition-all"
                style={{ color: "var(--footer-link)" }}
              >
                <span className="group-hover:translate-x-1 transition-transform">
                  {link.label}
                </span>
                <ArrowRight
                  className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ color: "var(--footer-accent)" }}
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="text-center md:text-left">
        <h4
          className="text-xs font-black uppercase tracking-[0.3em] mb-8"
          style={{ color: "var(--footer-muted)" }}
        >
          Connectivity
        </h4>
        <ul className="space-y-6">
          <li className="flex flex-col md:flex-row items-center md:items-start gap-3">
            <Phone
              className="w-4 h-4 mt-0.5 shrink-0"
              style={{ color: "var(--footer-muted)" }}
            />
            <a
              href={`tel:${contact.phone}`}
              className="text-sm font-bold transition-colors hover:opacity-80"
              style={{ color: "var(--footer-text)" }}
            >
              {contact.phone}
            </a>
          </li>
          <li className="flex flex-col md:flex-row items-center md:items-start gap-3">
            <Clock
              className="w-4 h-4 mt-0.5 shrink-0"
              style={{ color: "var(--footer-muted)" }}
            />
            <div
              className="text-sm font-medium"
              style={{ color: "var(--footer-text)" }}
            >
              <p>10:00 AM — 10:00 PM</p>
              <p
                className="text-[10px] uppercase font-bold mt-1"
                style={{ color: "var(--footer-muted)" }}
              >
                Open All 7 Days
              </p>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
