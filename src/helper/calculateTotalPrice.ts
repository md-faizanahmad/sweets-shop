import { parseQuantityToKg } from "@/utils/price";

export function calculateTotalPrice(
  quantity: string,
  pricePerKg: number,
): number | null {
  const qtyInKg = parseQuantityToKg(quantity);

  if (qtyInKg === null) return null;

  return Math.round(qtyInKg * pricePerKg);
}
