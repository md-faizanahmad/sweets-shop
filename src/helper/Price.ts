export type Currency = "INR";

export type Unit = "kg" | "g" | "piece";

export interface Price {
  amount: number;
  unit: Unit;
  currency: Currency;
}
export function formatPrice(price: Price): string {
  return `₹${price.amount}/${price.unit}`;
}
