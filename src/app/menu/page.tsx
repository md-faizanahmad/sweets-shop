import { MENU_DATA } from "@/features/menu.config";
import MenuLayout from "@/features/MenuLayout";
import MenuSection from "@/features/MenuSection";

export const metadata = {
  title: "The Menu | Heritage Flavors",
  description:
    "Explore our curated selection of Indian Mithai, Snacks, and Fine Dining.",
};

export default function MenuPage() {
  return (
    <MenuLayout>
      {MENU_DATA.categories.map((category) => (
        <MenuSection key={category.id} category={category} />
      ))}

      <footer className="mt-16 text-center space-y-2">
        <p className="text-stone-400 text-[10px] uppercase tracking-widest font-bold">
          All items are prepared fresh daily
        </p>
        <p className="text-stone-300 text-[9px]">
          Please inform your server of any allergies.
        </p>
      </footer>
    </MenuLayout>
  );
}
