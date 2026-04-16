"use client";

import { Search } from "lucide-react";
import { motion } from "framer-motion";

export function ProductSearch({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="relative group w-full md:max-w-xs lg:max-w-md">
      {/* Search Icon - Stylized */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none">
        <Search className="w-4 h-4 text-neutral-400 group-focus-within:text-[var(--nav-hover)] transition-colors duration-300" />
      </div>

      {/* Input Field */}
      <input
        type="text"
        placeholder="Search for Laddu, Barfi, Namkeen..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-white border border-neutral-100 pl-11 pr-4 py-3.5 rounded-2xl text-sm font-medium placeholder:text-neutral-400 shadow-sm focus:border-[var(--nav-hover)] focus:ring-4 focus:ring-[var(--nav-hover)]/5 outline-hidden transition-all duration-300"
      />

      {/* Subtle Hint for UX (Hidden on Mobile) */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 hidden md:block">
        <kbd className="text-[10px] font-black text-neutral-300 bg-neutral-50 px-1.5 py-0.5 rounded border border-neutral-100">
          ESC
        </kbd>
      </div>
    </div>
  );
}
