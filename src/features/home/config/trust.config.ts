export type Review = {
  id: string;
  name: string;
  text: string;
};

export type Badge = {
  id: string;
  label: string;
};

export const reviews: Review[] = [
  {
    id: "r1",
    name: "Rahul",
    text: "Best sweets in the area. Fresh and authentic taste.",
  },
  {
    id: "r2",
    name: "Anjali",
    text: "Loved the quality and packaging. Highly recommended.",
  },
  {
    id: "r3",
    name: "Imran",
    text: "Perfect for festivals. Always consistent quality.",
  },
];

export const badges: Badge[] = [
  { id: "b1", label: "Fresh Daily" },
  { id: "b2", label: "Premium Ingredients" },
  { id: "b3", label: "Hygienic Preparation" },
];
