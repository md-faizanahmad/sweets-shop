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
        { id: "s2", name: "Kaju Katli", price: "₹240", isChefSpecial: true },
        { id: "s3", name: "Motichoor Laddoo", price: "₹140" },
        { id: "s4", name: "Gulab Jamun (2 pcs)", price: "₹120" },
        { id: "s5", name: "Rasgulla", price: "₹110" },
        { id: "s6", name: "Milk Cake", price: "₹200" },
        { id: "s7", name: "Anjeer Barfi", price: "₹280" },
        { id: "s8", name: "Pista Roll", price: "₹260" },
        { id: "s9", name: "Dry Fruit Laddoo", price: "₹300" },
        { id: "s10", name: "Rasmalai", price: "₹160" },
      ],
    },

    {
      id: "snacks",
      title: "Street Savories",
      items: [
        { id: "sn1", name: "Paneer Tikka Roll", price: "₹160" },
        { id: "sn2", name: "Samosa (2 pcs)", price: "₹60" },
        { id: "sn3", name: "Raj Kachori", price: "₹140", isChefSpecial: true },
        { id: "sn4", name: "Aloo Tikki Chaat", price: "₹100" },
        { id: "sn5", name: "Papdi Chaat", price: "₹120" },
        { id: "sn6", name: "Dahi Puri", price: "₹110" },
        { id: "sn7", name: "Pav Bhaji", price: "₹150" },
        { id: "sn8", name: "Vada Pav", price: "₹80" },
        { id: "sn9", name: "Chole Bhature", price: "₹180" },
        { id: "sn10", name: "Bread Pakora", price: "₹70" },
      ],
    },

    {
      id: "chinese",
      title: "Indo-Chinese",

      items: [
        { id: "c1", name: "Chili Paneer Dry", price: "₹280" },
        { id: "c2", name: "Veg Hakka Noodles", price: "₹220" },
        { id: "c3", name: "Manchurian Gravy", price: "₹240" },
        { id: "c4", name: "Honey Chili Potato", price: "₹210" },
        { id: "c5", name: "Spring Rolls", price: "₹180" },
        { id: "c6", name: "Fried Rice", price: "₹200" },
        { id: "c7", name: "Schezwan Noodles", price: "₹230" },
        {
          id: "c8",
          name: "Dim Sum Basket",
          price: "₹260",
          isChefSpecial: true,
        },
        { id: "c9", name: "Manchow Soup", price: "₹140" },
        { id: "c10", name: "Crispy Corn", price: "₹190" },
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
        { id: "f2", name: "Dal Makhani", price: "₹280" },
        { id: "f3", name: "Shahi Paneer", price: "₹300" },
        { id: "f4", name: "Mix Veg Curry", price: "₹260" },
        { id: "f5", name: "Jeera Rice", price: "₹180" },
        { id: "f6", name: "Veg Biryani", price: "₹240" },
        { id: "f7", name: "Butter Naan", price: "₹60" },
        { id: "f8", name: "Garlic Naan", price: "₹80" },
        { id: "f9", name: "Tandoori Roti", price: "₹40" },
        { id: "f10", name: "Lachha Paratha", price: "₹70" },
      ],
    },
  ],
};
