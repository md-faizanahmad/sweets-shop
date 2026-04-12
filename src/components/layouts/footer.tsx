"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, ArrowUpRight, Cookie } from "lucide-react";
import { NAV_LINKS } from "@/@types/nav";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-white pt-24 pb-12 overflow-hidden border-t border-neutral-100">
      {/* Organic Background Decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-24 bg-[#FAF9F6] rounded-[0_0_100%_100%] -z-10" />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* 1. Brand Identity */}
          <div className="space-y-6 text-center md:text-left">
            <Link href="/" className="inline-flex items-center gap-2 group">
              <div className="bg-pink-50 p-2 rounded-xl group-hover:rotate-12 transition-transform">
                <Image src="/brandIcon.png" alt="Logo" width={28} height={28} />
              </div>
              <span className="text-2xl font-black tracking-tighter text-neutral-900">
                Sweet<span style={{ color: "var(--nav-hover)" }}>Shop</span>
              </span>
            </Link>
            <p className="text-neutral-500 leading-relaxed text-sm max-w-xs mx-auto md:mx-0">
              Crafting traditional sweetness with shuddh ingredients since 1995.
              Our haven is where tradition meets modern taste.
            </p>
            {/* <div className="flex items-center justify-center md:justify-start gap-4">
              {[Instagram, Facebook].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -4 }}
                  className="p-3 rounded-full bg-[#FAF9F6] text-neutral-400 hover:text-[var(--nav-hover)] transition-colors border border-neutral-100"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div> */}
          </div>

          {/* 2. Quick Navigation */}
          <div className="text-center md:text-left">
            <h4 className="font-black text-xs uppercase tracking-[0.3em] text-neutral-400 mb-8">
              Explore
            </h4>
            <ul className="space-y-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center justify-center md:justify-start gap-2 text-sm font-bold text-neutral-600 hover:text-[var(--nav-hover)] transition-colors"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Contact Info */}
          <div className="text-center md:text-left">
            <h4 className="font-black text-xs uppercase tracking-[0.3em] text-neutral-400 mb-8">
              Visit Us
            </h4>
            <ul className="space-y-6">
              <li className="flex flex-col md:flex-row items-center md:items-start gap-3">
                <MapPin className="w-5 h-5 text-neutral-300 mt-1 shrink-0" />
                <span className="text-sm text-neutral-500 font-medium">
                  Shop 12, Heritage Market,
                  <br />
                  Central Avenue, Mumbai 400001
                </span>
              </li>
              <li className="flex flex-col md:flex-row items-center md:items-start gap-3">
                <Phone className="w-5 h-5 text-neutral-300 shrink-0" />
                <span className="text-sm text-neutral-500 font-medium">
                  +91 99999 99999
                </span>
              </li>
            </ul>
          </div>

          {/* 4. Business Hours */}
          <div className="bg-[#FAF9F6] p-8 rounded-[40px] border border-neutral-100 text-center">
            <h4 className="font-black text-xs uppercase tracking-[0.2em] text-neutral-400 mb-4">
              Opening Hours
            </h4>
            <div className="space-y-2">
              <p className="text-sm font-black text-neutral-900">Mon — Sat</p>
              <p className="text-xs text-neutral-500">10:00 AM — 09:00 PM</p>
              <div className="h-px w-8 bg-neutral-200 mx-auto my-4" />
              <p className="text-sm font-black text-neutral-900">Sunday</p>
              <p className="text-xs text-neutral-500">11:00 AM — 07:00 PM</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-neutral-100 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">
            © {currentYear} SweetShop Haven. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Privacy", "Terms", "Shipping"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-[10px] font-black uppercase tracking-widest text-neutral-400 hover:text-neutral-900 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
