"use client";

import { useMemo } from "react";
import { ChevronDown, Filter } from "lucide-react";
import productsData from "../../../public/product.json";

export function ProductFilter({
  category,
  onChange,
}: {
  category: string;
  onChange: (v: string) => void;
}) {
  // 1. Dynamically extract unique categories from JSON
  const categories = useMemo(() => {
    const unique = Array.from(new Set(productsData.map((p) => p.category)));
    return [
      { label: "All Categories", value: "" },
      ...unique.map((cat) => ({
        label: cat.charAt(0).toUpperCase() + cat.slice(1),
        value: cat,
      })),
    ];
  }, []);

  return (
    <div className="relative group w-full md:w-auto min-w-40">
      {/* Visual Icons */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none flex items-center gap-2">
        <Filter className="w-3.5 h-3.5 text-neutral-400 group-focus-within:text-(--nav-hover) transition-colors" />
      </div>

      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-400 group-focus-within:text-(--nav-hover) transition-colors">
        <ChevronDown className="w-4 h-4" />
      </div>

      {/* The Select Element */}
      <select
        value={category}
        onChange={(e) => onChange(e.target.value)}
        className="
          w-full appearance-none bg-white border border-neutral-100 
          pl-10 pr-10 py-2.5 rounded-2xl text-[11px] font-black uppercase tracking-widest
          text-neutral-600 cursor-pointer shadow-sm
          focus:border-[var(--nav-hover)] focus:ring-4 focus:ring-[var(--nav-hover)]/5 
          outline-none transition-all duration-300
        "
      >
        {categories.map((cat) => (
          <option
            key={cat.value}
            value={cat.value}
            className="text-sm font-sans normal-case"
          >
            {cat.label}
          </option>
        ))}
      </select>
    </div>
  );
}
