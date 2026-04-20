// /features/menu/config/menu.config.ts

import { MenuConfig } from "./menu.types";

export const MENU_DATA: MenuConfig = {
  categories: [
    {
      id: "sweets",
      title: "Royal Mithai",
      items: [
        {
          id: "s1",
          name: "Kesar Peda",
          price: "₹180",
          description: "Infused with Kashmiri saffron",
        },
        {
          id: "s2",
          name: "Silver Leaf Kaju Katli",
          price: "₹240",
          isChefSpecial: true,
        },
        { id: "s3", name: "Gulab Jamun (2pcs)", price: "₹120" },
      ],
    },
    {
      id: "snacks",
      title: "Street Savories",
      items: [
        { id: "sn1", name: "Paneer Tikka Roll", price: "₹160" },
        { id: "sn2", name: "Artisan Samosa (2pcs)", price: "₹60" },
        {
          id: "sn3",
          name: "Raj Kachori Royale",
          price: "₹140",
          isChefSpecial: true,
        },
      ],
    },
    {
      id: "chinese",
      title: "Indo-Chinese",
      items: [
        { id: "c1", name: "Chili Paneer Dry", price: "₹280" },
        { id: "c2", name: "Vegetable Hakka Noodles", price: "₹220" },
        { id: "c3", name: "Manchurian Gravy", price: "₹240" },
      ],
    },
    {
      id: "food",
      title: "Main Course",
      items: [
        {
          id: "f1",
          name: "Paneer Butter Masala",
          price: "₹320",
          isChefSpecial: true,
        },
        { id: "f2", name: "Dal Makhani (Slow Cooked)", price: "₹280" },
        { id: "f3", name: "Butter Naan", price: "₹60" },
      ],
    },
  ],
};
