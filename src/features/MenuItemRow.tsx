// /features/menu/components/MenuItemRow.tsx

import { MenuItem } from "./menu.types";

export default function MenuItemRow({ item }: { item: MenuItem }) {
  return (
    <div className="group mb-6">
      <div className="flex items-end gap-2 w-full">
        <span className="text-lg font-medium text-stone-800 shrink-0">
          {item.name}
          {item.isChefSpecial && (
            <span className="ml-2 text-[10px] text-amber-600 uppercase tracking-widest border border-amber-600 px-1">
              Chef&apos;s Special
            </span>
          )}
        </span>
        <div className="flex-grow border-b border-dotted border-stone-400 mb-1.5 opacity-50" />
        <span className="text-lg font-serif font-semibold text-stone-900 shrink-0">
          {item.price}
        </span>
      </div>
      {item.description && (
        <p className="text-sm text-stone-500 font-light mt-1  italic">
          {item.description}
        </p>
      )}
    </div>
  );
}
