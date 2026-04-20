// /app/menu/page.tsx

import { MENU_DATA } from "@/features/menu.config";
import MenuSection from "@/features/MenuSection";
import StickyCategoryNav from "@/features/StickyCategoryNav";

export default function MenuPage() {
  return (
    <main className="relative min-h-screen bg-[#FDFCF9]">
      {/* Background Image Layer */}
      <div
        className="fixed inset-0 z-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: 'url("/assets/menu-page-bg.png")', // Replace with Gemini generated vertical menu background
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Content Overlay */}
      <div className="relative z-10">
        {/* Hero Header */}
        <header className="pt-20 pb-12 text-center bg-white/40 backdrop-blur-sm">
          <h1 className="font-serif text-5xl md:text-6xl text-stone-900 mb-4">
            Our Menu
          </h1>
          <p className="text-stone-500 italic">
            Freshly Prepared Heritage Flavors
          </p>
        </header>

        <StickyCategoryNav categories={MENU_DATA.categories} />

        {/* Menu Diary Card */}
        <div className="max-w-162.5 mx-auto px-6 pb-32">
          <div className="bg-white/80 shadow-2xl rounded-sm p-8 md:p-16 border border-stone-100 relative">
            {/* Inner Decorative Border */}
            <div className="absolute inset-4 border border-stone-200 pointer-events-none opacity-40" />

            {MENU_DATA.categories.map((category) => (
              <MenuSection key={category.id} category={category} />
            ))}

            <footer className="mt-12 pt-12 border-t border-stone-200 text-center text-stone-400 text-xs italic">
              *Taxes as applicable. Prices are subject to change.
            </footer>
          </div>
        </div>
      </div>
    </main>
  );
}
