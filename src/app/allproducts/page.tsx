"use client";

import { ProductFilter } from "@/features/product/ProductFilter";
import { ProductGrid } from "@/features/product/ProductGrid";
import { ProductSearch } from "@/features/product/ProductSearch";
import { ProductSort } from "@/features/product/ProductSort";
import { loadProducts } from "@/schema/load.products";
import { useState, useMemo } from "react";

export default function ProductsPage() {
  const allProducts = loadProducts();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");

  const filteredProducts = useMemo(() => {
    let result = [...allProducts];

    // 🔍 Search
    if (search) {
      result = result.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase()),
      );
    }

    // 🏷️ Filter
    if (category) {
      result = result.filter((p) => p.category === category);
    }

    // 🔃 Sort
    if (sort === "price-low") {
      result.sort((a, b) => a.price.amount - b.price.amount);
    }

    if (sort === "price-high") {
      result.sort((a, b) => b.price.amount - a.price.amount);
    }

    return result;
  }, [allProducts, search, category, sort]);

  return (
    <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Controls */}
      <div className="flex flex-col md:flex-row gap-4 mb-8 items-center justify-between mt-10">
        <ProductSearch value={search} onChange={setSearch} />

        <div className="flex gap-3">
          <ProductFilter category={category} onChange={setCategory} />
          <ProductSort sort={sort} onChange={setSort} />
        </div>
      </div>

      {/* Grid */}
      <ProductGrid products={filteredProducts} />
    </section>
  );
}
