// /features/menu/components/MenuSection.tsx
import MenuItemRow from "./MenuItemRow";
import AnimatedWrapper from "./AnimatedWrapper";
import { MenuCategory } from "./menu.types";

export default function MenuSection({ category }: { category: MenuCategory }) {
  return (
    <section id={category.id} className="py-12 first:pt-4">
      <AnimatedWrapper>
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl md:text-4xl text-amber-800 mb-2">
            {category.title}
          </h2>
          <div className="w-16 h-0.5 bg-amber-200 mx-auto" />
        </div>
        <div className="space-y-2">
          {category.items.map((item) => (
            <MenuItemRow key={item.id} item={item} />
          ))}
        </div>
      </AnimatedWrapper>
    </section>
  );
}
