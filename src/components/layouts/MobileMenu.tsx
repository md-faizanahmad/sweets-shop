"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle, ChevronRight } from "lucide-react";
import { NAV_LINKS } from "@/@types/nav";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-50 flex h-11 w-11 rounded-full items-center justify-center cursor-pointer transition-all duration-200"
        style={{
          backgroundColor: isOpen ? "transparent" : "var(--nav-bg)",
          color: "var(--nav-text)",
          border: `1px solid var(--nav-border)`,
        }}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6 " />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute inset-x-0 top-18 mx-4 overflow-hidden rounded-2xl border shadow-2xl z-49"
            style={{
              backgroundColor: "white", // Solid bg for mobile readability
              borderColor: "var(--nav-border)",
            }}
          >
            <div className="flex flex-col p-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between rounded-lg p-4 text-base font-semibold transition-colors active:bg-gray-50"
                  style={{ color: "var(--nav-text)" }}
                >
                  {link.label}
                  <ChevronRight className="h-4 w-4 opacity-30" />
                </Link>
              ))}

              <div
                className="mt-4 pt-4 border-t flex flex-col gap-3"
                style={{ borderColor: "var(--nav-border)" }}
              >
                {/* WhatsApp CTA */}
                <a
                  href="https://wa.me/919999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-3 rounded-xl p-4 font-bold transition-transform active:scale-95"
                  style={{
                    backgroundColor: "var(--nav-cta-bg)",
                    color: "var(--nav-cta-text)",
                  }}
                >
                  <MessageCircle className="h-5 w-5" />
                  Order on WhatsApp
                </a>

                {/* Google Maps Directions Button - Mobile Only */}
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=YOUR_SHOP_LOCATION_COORDINATES_OR_NAME"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-3 rounded-xl p-4 font-bold border transition-all active:bg-gray-50"
                  style={{
                    borderColor: "var(--nav-border)",
                    color: "var(--nav-text)",
                  }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5 fill-current"
                    style={{ color: "var(--nav-hover)" }}
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  Get Directions
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
