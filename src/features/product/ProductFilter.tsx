"use client";

export function ProductFilter({
  category,
  onChange,
}: {
  category: string;
  onChange: (v: string) => void;
}) {
  return (
    <select
      value={category}
      onChange={(e) => onChange(e.target.value)}
      className="px-4 py-2 rounded-xl border text-sm"
    >
      <option value="">All</option>
      <option value="sweets">Sweets</option>
    </select>
  );
}
