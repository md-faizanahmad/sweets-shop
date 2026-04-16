// features/order/components/order-form.tsx

import { OrderField, OrderFormData } from "@/@types/order.types";
import { ChangeEvent } from "react";

interface Props {
  form: OrderFormData;
  onChange: (field: OrderField, value: string) => void;
  onLocation: () => void;
}

export function OrderForm({ form, onChange, onLocation }: Props) {
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const field = e.target.name as OrderField;
    onChange(field, e.target.value);
  };

  return (
    <>
      <input
        name="name"
        placeholder="Your Name"
        value={form.name}
        onChange={handleInputChange}
        className="w-full border p-2 rounded"
      />

      <input
        name="phone"
        placeholder="Phone Number"
        value={form.phone}
        onChange={handleInputChange}
        className="w-full border p-2 rounded"
      />

      <input
        name="quantity"
        placeholder="Quantity (e.g. 1kg)"
        value={form.quantity}
        onChange={handleInputChange}
        className="w-full border p-2 rounded"
      />

      <textarea
        name="address"
        placeholder="Delivery Address"
        value={form.address}
        onChange={handleInputChange}
        className="w-full border p-2 rounded"
      />

      <button onClick={onLocation} className="text-sm text-blue-600">
        Use Current Location
      </button>
    </>
  );
}
