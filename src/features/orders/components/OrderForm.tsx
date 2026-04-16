// features/order/components/OrderForm.tsx

"use client";

import { User, Phone } from "lucide-react";
import { InputField } from "./InputField";
import { QuantityField } from "./QuantityField";
import { useOrderForm } from "../hooks/useOrderForm";

export function OrderForm({
  totalPrice,
  onLocation,
}: {
  totalPrice: number | null;
  onLocation: () => void;
}) {
  const { form, errors, updateField, validate } = useOrderForm({
    name: "",
    phone: "",
    quantity: "",
    address: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    console.log("Submit:", form);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <InputField
        id="name"
        value={form.name}
        placeholder="Your Full Name"
        icon={User}
        error={errors.name}
        onChange={(v) => updateField("name", v)}
      />

      <InputField
        id="phone"
        value={form.phone}
        placeholder="Contact Number"
        icon={Phone}
        type="tel"
        error={errors.phone}
        onChange={(v) => updateField("phone", v)}
      />

      <QuantityField
        value={form.quantity}
        totalPrice={totalPrice}
        error={errors.quantity}
        onChange={(v) => updateField("quantity", v)}
      />

      <div className="relative">
        <textarea
          value={form.address}
          onChange={(e) => updateField("address", e.target.value)}
          placeholder="Delivery Address"
          className="w-full p-4 rounded-xl border"
        />

        <button
          type="button"
          onClick={onLocation}
          className="absolute right-3 bottom-3 text-xs"
        >
          Auto-fill
        </button>

        {errors.address && (
          <p className="text-xs text-red-500">{errors.address}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full py-3 bg-black text-white rounded-xl"
      >
        Place Order
      </button>
    </form>
  );
}
