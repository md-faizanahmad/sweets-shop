// /features/menu/components/MenuLayout.tsx
import Image from "next/image";
import StickyCategoryNav from "./StickyCategoryNav";
import { MENU_DATA } from "./menu.config";

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen">
      {/* Optimized Background Image */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/assets/menu-page-bg.png"
          alt="Menu Background"
          fill
          priority
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-[#FDFCF9]/80" />{" "}
        {/* Cream Overlay */}
      </div>

      <div className="relative z-10">
        <header className="pt-20 pb-10 text-center">
          <h1 className="font-serif text-5xl md:text-7xl text-stone-900 mb-2">
            Our Menu
          </h1>
          <div className="w-24 h-1 bg-amber-700 mx-auto mb-4" />
          <p className="text-stone-500 italic tracking-widest uppercase text-xs">
            Taste the Tradition
          </p>
        </header>

        <StickyCategoryNav categories={MENU_DATA.categories} />

        {/* The Diary/Card Wrapper */}
        <div className="max-w-250 mx-auto px-4 md:px-8 pb-24">
          <div className="bg-white shadow-2xl rounded-sm p-6 md:p-16 border border-stone-200 relative">
            {/* Fine border decoration */}
            <div className="absolute inset-2 border border-stone-100 pointer-events-none" />
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
