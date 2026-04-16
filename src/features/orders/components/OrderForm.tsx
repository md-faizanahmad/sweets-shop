"use client";

import { User, Phone } from "lucide-react";
import { InputField } from "./InputField";
import { QuantityField } from "./QuantityField";
import { OrderFormData, OrderField } from "@/features/orders/types";

export function OrderForm({
  form,
  onChange,
  totalPrice,
  onLocation,
}: {
  form: OrderFormData;
  onChange: (field: OrderField, value: string) => void;
  totalPrice: number | null;
  onLocation: () => void;
}) {
  const isValid =
    form.name.trim() !== "" &&
    form.phone.trim() !== "" &&
    form.quantity.trim() !== "";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;

    console.log("Submit:", form);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <InputField
        id="name"
        value={form.name}
        placeholder="Your Full Name"
        icon={User}
        onChange={(v) => onChange("name", v)}
      />

      <InputField
        id="phone"
        value={form.phone}
        placeholder="Contact Number"
        icon={Phone}
        type="tel"
        onChange={(v) => onChange("phone", v)}
      />

      <QuantityField
        value={form.quantity}
        totalPrice={totalPrice}
        onChange={(v) => onChange("quantity", v)}
      />
      <div className="relative group">
        {/* 1. The Compact Textarea */}
        <textarea
          value={form.address}
          onChange={(e) => onChange("address", e.target.value)}
          placeholder="Delivery Address (House No, Street, Landmark...)"
          rows={3}
          className="w-full bg-neutral-50 border border-neutral-100 px-4 py-4 pr-12 rounded-2xl text-sm font-medium placeholder:text-neutral-400 focus:bg-white focus:border-(--nav-hover) focus:ring-4 focus:ring-(--nav-hover)/5 outline-hidden transition-all duration-200 resize-none"
        />

        {/* 2. Enhanced Location Action */}
        <div className="absolute right-3 bottom-3 flex items-center">
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              onLocation();
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-neutral-100 text-[10px] font-black uppercase tracking-wider text-(--footer-accent) shadow-sm hover:bg-neutral-50 hover:border-(--nav-hover) active:scale-95 transition-all group/loc"
            title="Use Live Location"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            <span className="hidden sm:inline">Live Location</span>
            <span className="sm:hidden">GPS</span>
          </button>
        </div>
      </div>
    </form>
  );
}
