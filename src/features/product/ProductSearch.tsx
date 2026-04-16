"use client";

export function ProductSearch({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <input
      type="text"
      placeholder="Search sweets..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full md:w-64 px-4 py-2 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-(--nav-hover)"
    />
  );
}
