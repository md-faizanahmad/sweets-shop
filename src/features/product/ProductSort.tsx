"use client";

import { ChevronDown } from "lucide-react";

export function ProductSort({
  sort,
  onChange,
}: {
  sort: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="relative group min-w-35">
      {/* Custom Chevron Icon */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-400 group-focus-within:text-(--nav-hover) transition-colors">
        <ChevronDown className="w-4 h-4" />
      </div>

      <select
        value={sort}
        onChange={(e) => onChange(e.target.value)}
        className="
          w-full appearance-none bg-white border border-neutral-100 
          pl-4 pr-10 py-2.5 rounded-2xl text-[11px] font-black uppercase tracking-widest
          text-neutral-600 cursor-pointer shadow-sm
          focus:border-(--nav-hover) focus:ring-4 focus:ring-(--nav-hover)/5 
          outline-none transition-all duration-300
        "
      >
        <option value="">Sort By</option>
        <option value="price-low">Price: Low to High</option>
        <option value="price-high">Price: High to Low</option>
      </select>
    </div>
  );
}
