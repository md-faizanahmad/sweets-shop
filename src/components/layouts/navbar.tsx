"use client";

import Link from "next/link";
import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { MobileMenu } from "./MobileMenu";
import { motion } from "framer-motion";
import { NAV_LINKS } from "@/@types/nav";

export default function Navbar() {
  return (
    <header
      className="sticky top-0 z-50 w-full border-b backdrop-blur-md transition-all duration-300"
      style={{
        backgroundColor: "var(--nav-bg)",
        borderColor: "var(--nav-border)",
      }}
    >
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo Section */}
        <Link
          href="/"
          className="flex items-center gap-3 group transition-opacity hover:opacity-90"
        >
          <div className="relative p-1.5 rounded-lg group-hover:rotate-12 transition-transform duration-500 ease-out">
            <Image
              src="/brandIcon.png"
              alt="SweetShop Logo"
              width={32}
              height={32}
              className="object-contain rounded-full"
              priority
            />
          </div>
          <span
            className="text-xl font-bold tracking-tight transition-colors duration-300"
            style={{ color: "var(--nav-text)" }}
          >
            Sweet<span style={{ color: "var(--nav-hover)" }}>Shop</span>
          </span>
        </Link>

        {/* Desktop Nav - Using Tailwind for smooth color switching */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-semibold transition-all duration-300 ease-in-out hover:opacity-100 opacity-80"
                  style={{
                    color: "var(--nav-text-muted)",
                    // Using a CSS hover hook in style is tricky, so we use a utility class
                    // that targets the variable in your globals.css
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--nav-hover)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--nav-text-muted)")
                  }
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* WhatsApp CTA - Retaining Framer for the "Premium" feel */}
          <motion.a
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-bold shadow-sm transition-all duration-300 hover:shadow-md"
            style={{
              backgroundColor: "var(--nav-cta-bg)",
              color: "var(--nav-cta-text)",
            }}
          >
            <MessageCircle className="h-4 w-4" />
            Order Now
          </motion.a>
        </div>

        <MobileMenu />
      </nav>
    </header>
  );
}
