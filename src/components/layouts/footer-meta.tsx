"use client";

export function FooterMeta() {
  return (
    <p className="text-small text-(--muted)">
      © {new Date().getFullYear()} SweetShop. All rights reserved.
    </p>
  );
}
