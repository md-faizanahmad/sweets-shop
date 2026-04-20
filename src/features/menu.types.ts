// /features/menu/types/menu.types.ts
export interface MenuItem {
  id: string;
  name: string;
  price: string;
  description?: string;
  isChefSpecial?: boolean;
}

export interface MenuCategory {
  id: string;
  title: string;
  items: MenuItem[];
}

export interface MenuConfig {
  categories: MenuCategory[];
}
