// features/product/lib/load-products.ts

import { Product } from "@/@types/product.types";
import { productsSchema } from "../schema/product.schema";

/**
 * Load and validate products from static JSON
 * This is a SAFE boundary — never trust raw JSON directly
 */
export function loadProducts(): Product[] {
  const result = productsSchema.safeParse(raw);

  if (!result.success) {
    console.error("❌ Invalid products.json:", result.error.format());

    // Fail fast — don't let app run with broken data
    throw new Error("Invalid product data");
  }

  return result.data;
}
