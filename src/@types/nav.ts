// types/nav.ts
import { LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
  icon?: LucideIcon;
}

export const NAV_LINKS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Our Story", href: "/our-story" },
  { label: "Menu's", href: "/menu" },
  { label: "Location", href: "/location" },
  { label: "Contact", href: "/contact" },
];
