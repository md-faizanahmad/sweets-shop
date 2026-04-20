import { MenuItem } from "./menu.types";

// /features/menu/components/MenuItemRow.tsx
export default function MenuItemRow({ item }: { item: MenuItem }) {
  return (
    <div className="py-3 flex flex-col group">
      <div className="flex items-end justify-between gap-2">
        <h3 className="text-stone-800 font-medium tracking-tight whitespace-nowrap">
          {item.name}
          {item.isChefSpecial && (
            <span className="ml-2 text-[9px] text-amber-700 border border-amber-700 px-1 py-0.5 rounded-sm align-middle uppercase">
              Chef Choice
            </span>
          )}
        </h3>
        <div className="flex-grow border-b border-dotted border-stone-300 mb-1.5" />
        <span className="text-stone-900 font-serif font-bold">
          {item.price}
        </span>
      </div>
      {item.description && (
        <p className="text-xs text-stone-500 mt-1 font-light italic leading-relaxed">
          {item.description}
        </p>
      )}
    </div>
  );
}
