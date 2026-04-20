// /features/menu/components/StickyCategoryNav.tsx
"use client";

import { MenuCategory } from "./menu.types";

export default function StickyCategoryNav({
  categories,
}: {
  categories: MenuCategory[];
}) {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-100 py-4 mb-8 overflow-x-auto no-scrollbar">
      <div className="flex justify-center gap-6 px-6 min-w-max mx-auto">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => scrollTo(cat.id)}
            className="text-xs uppercase tracking-widest font-bold text-stone-500 hover:text-amber-800 transition-colors"
          >
            {cat.title}
          </button>
        ))}
      </div>
    </nav>
  );
}
