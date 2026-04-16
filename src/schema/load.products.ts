// for all products

import { Product } from "@/@types/product.types";
import { productsSchema } from "./product.schema";
import raw from "../../public/product.json";
let cachedProducts: Product[] | null = null;

export function loadProducts(): Product[] {
  if (cachedProducts) return cachedProducts;

  const result = productsSchema.safeParse(raw);

  if (!result.success) {
    console.error("Invalid products.json:", result.error.format());
    throw new Error("Invalid product data");
  }

  cachedProducts = result.data;
  return cachedProducts;
}
