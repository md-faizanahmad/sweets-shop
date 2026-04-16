// utils/price.ts

import { getPricePerKg } from "@/helper/format-price";

export function parseQuantityToKg(input: string): number | null {
  const value = input.toLowerCase().trim();

  if (value.endsWith("kg")) {
    const num = parseFloat(value.replace("kg", ""));
    return isNaN(num) ? null : num;
  }

  if (value.endsWith("g")) {
    const num = parseFloat(value.replace("g", ""));
    return isNaN(num) ? null : num / 1000;
  }

  return null;
}
