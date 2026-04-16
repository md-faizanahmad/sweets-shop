// utils/price.ts

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
export function getPricePerKg(price: string): number {
  return parseInt(price.replace(/\D/g, ""));
}
export function calculateTotalPrice(
  quantity: string,
  price: string,
): number | null {
  const kg = parseQuantityToKg(quantity);
  const pricePerKg = getPricePerKg(price);

  if (!kg) return null;

  return kg * pricePerKg;
}
