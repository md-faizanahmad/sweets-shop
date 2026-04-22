import Link from "next/link";
import { Phone, Clock, ArrowRight } from "lucide-react";
import { FooterConfig, FooterLink } from "../config/footer.config";

interface FooterLinksProps {
  links: FooterLink[];
  contact: FooterConfig["contact"];
}

export function FooterLinks({ links, contact }: FooterLinksProps) {
  return (
    <>
      {/* 1. SWEET MENU - Compact on Mobile */}
      <div className="text-center md:text-left">
        <h4
          className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] md:tracking-[0.3em] mb-6 md:mb-8"
          style={{ color: "var(--footer-muted)" }}
        >
          Sweet Menu
        </h4>
        <ul className="space-y-3 md:space-y-4">
          {links.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="group inline-flex items-center gap-2 text-sm font-bold transition-all py-1 md:py-0"
                style={{ color: "var(--footer-link)" }}
              >
                <span className="group-hover:translate-x-1 transition-transform">
                  {link.label}
                </span>
                <ArrowRight
                  className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0"
                  style={{ color: "var(--footer-accent)" }}
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* 2. CONNECTIVITY - Improved alignment for Mobile */}
      <div className="text-center md:text-left mt-10 md:mt-0">
        <h4
          className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] md:tracking-[0.3em] mb-6 md:mb-8"
          style={{ color: "var(--footer-muted)" }}
        >
          Connectivity
        </h4>
        <ul className="space-y-5 md:space-y-6">
          {/* Phone Link - Larger tap area for mobile UX */}
          <li className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-3">
            <Phone
              className="w-4 h-4 md:mt-0.5 shrink-0"
              style={{ color: "var(--footer-muted)" }}
            />
            <a
              href={`tel:${contact.phone}`}
              className="text-sm font-bold transition-colors hover:opacity-80 active:scale-95 touch-manipulation"
              style={{ color: "var(--footer-text)" }}
            >
              {contact.phone}
            </a>
          </li>

          {/* Clock - Better vertical spacing on mobile */}
          <li className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-3">
            <Clock
              className="w-4 h-4 md:mt-0.5 shrink-0"
              style={{ color: "var(--footer-muted)" }}
            />
            <div
              className="text-sm font-medium leading-tight"
              style={{ color: "var(--footer-text)" }}
            >
              <p>10:00 AM — 10:00 PM</p>
              <p
                className="text-[9px] md:text-[10px] uppercase font-bold mt-1.5"
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
