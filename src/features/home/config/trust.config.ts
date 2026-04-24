// config/trust.config.ts

export type ReviewCategory = "bakery" | "restaurant" | "general";

export type Review = {
  id: string;
  name: string;
  text: string;
  category: ReviewCategory;
  rating: number; // Added for dynamic star rendering
  date?: string; // Added for freshness/relevancy
  avatarColor?: string; // Optional: specific colors for different vibes
};

export type Badge = {
  id: string;
  label: string;
  iconType: "fresh" | "quality" | "hygiene" | "service"; // Added for icon mapping
};

export const reviews: Review[] = [
  {
    id: "r1",
    name: "Rahul",
    text: "The sourdough is world-class, and their Mithai has that authentic 'homemade' feel. Best bakery-restaurant hybrid in town!",
    category: "bakery",
    rating: 5,
    date: "2 days ago",
  },
  {
    id: "r2",
    name: "Anjali",
    text: "Had the signature pasta for dinner and picked up a cheesecake for later. The quality and packaging are impeccable.",
    category: "restaurant",
    rating: 5,
    date: "1 week ago",
  },
  {
    id: "r3",
    name: "Imran",
    text: "Always my go-to for festival platters. The hygiene standards and consistent taste keep me coming back every month.",
    category: "general",
    rating: 5,
    date: "2 weeks ago",
  },
];

export const badges: Badge[] = [
  { id: "b1", label: "Baked Fresh at 5AM", iconType: "fresh" },
  { id: "b2", label: "Farm-to-Table Ingredients", iconType: "quality" },
  { id: "b3", label: "ISO Certified Kitchen", iconType: "hygiene" },
  { id: "b4", label: "Elite Guest Service", iconType: "service" },
];
