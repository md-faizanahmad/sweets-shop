// // for single product

import { Product } from "@/@types/product.types";
import { loadProducts } from "./load.products";

export function getProductBySlug(slug: string): Product | null {
  const products = loadProducts();
  return products.find((p) => p.slug === slug) ?? null;
}

export function getProductById(id: string): Product | null {
  const products = loadProducts();
  return products.find((p) => p.id === id) ?? null;
}
