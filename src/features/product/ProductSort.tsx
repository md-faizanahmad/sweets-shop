"use client";

export function ProductSort({
  sort,
  onChange,
}: {
  sort: string;
  onChange: (v: string) => void;
}) {
  return (
    <select
      value={sort}
      onChange={(e) => onChange(e.target.value)}
      className="px-4 py-2 rounded-xl border text-sm"
    >
      <option value="">Default</option>
      <option value="price-low">Price: Low to High</option>
      <option value="price-high">Price: High to Low</option>
    </select>
  );
}
