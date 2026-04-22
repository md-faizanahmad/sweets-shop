"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FooterConfig, FooterLink } from "../config/footer.config";
import { ConnectivityColumn } from "./ConnectivityColumn";

interface FooterLinksProps {
  links: FooterLink[];
  contact: FooterConfig["contact"];
}

export function FooterLinks({ links, contact }: FooterLinksProps) {
  return (
    <>
      {/* 1. SWEET MENU - Compact & Responsive */}
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
                className="group inline-flex items-center gap-2 text-sm font-bold transition-all py-1 md:py-0 touch-manipulation"
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

      {/* 2. CONNECTIVITY - Handled by standalone component */}
      <ConnectivityColumn contact={contact} />
    </>
  );
}
