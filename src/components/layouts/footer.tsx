"use client";

import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { footerConfig } from "./config/footer.config";
import { FooterMeta } from "./footer-meta";
import { SocialLinks } from "../ui/SocialLink";
import { Location } from "../ui/Location";
import { Phone, Clock, ShieldCheck, ArrowRight } from "lucide-react";

export function Footer() {
  const { brand, description, links, contact } = footerConfig;

  return (
    <footer
      className="relative mt-20 border-t overflow-hidden transition-colors"
      style={{
        backgroundColor: "var(--footer-bg)",
        borderColor: "var(--footer-border)",
      }}
    >
      {/* 1. Subtle Sweets Texture Watermark */}
      <div className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none select-none">
        <Image
          src="/assets/hero-bg.jpg"
          alt="Sweets Texture Background"
          fill
          className="object-cover"
        />
      </div>

      <Container className="relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand & Food Safety */}
          <div className="space-y-6">
            <div className="text-center md:text-left">
              <h3
                className="text-2xl font-black tracking-tighter"
                style={{ color: "var(--footer-title)" }}
              >
                {brand}
                <span style={{ color: "var(--footer-accent)" }}>.</span>
              </h3>
              <p
                className="text-sm mt-4 leading-relaxed max-w-xs mx-auto md:mx-0"
                style={{ color: "var(--footer-text)" }}
              >
                {description}
              </p>
            </div>

            {/* Indian Food Safety & Diet Icons */}
            <div className="flex items-center justify-center md:justify-start gap-4">
              <div className="flex items-center gap-2 border px-2 py-1 rounded bg-white/80 border-neutral-100">
                <div className="w-3 h-3 border-2 border-green-600 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-600" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-green-700">
                  100% Veg
                </span>
              </div>
              <div className="flex items-center gap-2 border px-2 py-1 rounded bg-white/80 border-neutral-100">
                <ShieldCheck className="w-3 h-3 text-blue-600" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700">
                  FSSAI Certified
                </span>
              </div>
            </div>
          </div>

          {/* Sweet Menu (Quick Links) */}
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
                    className="group inline-flex items-center gap-2 text-sm font-bold transition-all duration-200"
                    style={{ color: "var(--footer-link)" }}
                  >
                    <span className="group-hover:translate-x-1 transition-transform">
                      {link.label}
                    </span>
                    <ArrowRight
                      className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all"
                      style={{ color: "var(--footer-accent)" }}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Hours */}
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
                  className="w-4 h-4 mt-0.5"
                  style={{ color: "var(--footer-muted)" }}
                />
                <a
                  href={`tel:${contact.phone}`}
                  className="text-sm font-bold transition-colors hover:text-black"
                  style={{ color: "var(--footer-text)" }}
                >
                  {contact.phone}
                </a>
              </li>
              <li className="flex flex-col md:flex-row items-center md:items-start gap-3">
                <Clock
                  className="w-4 h-4 mt-0.5"
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
              <li className="flex justify-center md:justify-start">
                <SocialLinks />
              </li>
            </ul>
          </div>

          {/* Google Maps / Location Visual */}
          <div className="text-center md:text-left">
            <h4
              className="text-xs font-black uppercase tracking-[0.3em] mb-6"
              style={{ color: "var(--footer-muted)" }}
            >
              Location
            </h4>
            <div
              className="rounded-2xl overflow-hidden border shadow-sm h-32 w-full relative group mb-4"
              style={{ borderColor: "var(--footer-border)" }}
            >
              <Location />
              <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
            </div>
            <p
              className="text-[11px] font-medium leading-relaxed italic"
              style={{ color: "var(--footer-muted)" }}
            >
              {contact.location}
            </p>
          </div>
        </div>

        {/* Bottom Metadata Bar */}
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
              {/* Simple payment labels to keep it premium/minimal */}
              <div
                className="px-2 py-0.5 border text-[10px] font-bold rounded"
                style={{
                  borderColor: "var(--footer-border)",
                  color: "var(--footer-text)",
                }}
              >
                UPI
              </div>
              <div
                className="px-2 py-0.5 border text-[10px] font-bold rounded"
                style={{
                  borderColor: "var(--footer-border)",
                  color: "var(--footer-text)",
                }}
              >
                CARD
              </div>
              <div
                className="px-2 py-0.5 border text-[10px] font-bold rounded"
                style={{
                  borderColor: "var(--footer-border)",
                  color: "var(--footer-text)",
                }}
              >
                CASH
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
