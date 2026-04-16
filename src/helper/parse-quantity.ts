// features/product/utils/format-price.ts

import { Product } from "@/@types/product.types";

export function formatPrice(product: Product): string {
  return `₹${product.price.amount}/${product.price.unit}`;
}
