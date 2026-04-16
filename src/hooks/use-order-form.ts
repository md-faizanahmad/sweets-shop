// features/order/hooks/use-order-form.ts

import { OrderField, OrderFormData } from "@/@types/order.types";
import { useState } from "react";

export function useOrderForm() {
  const [form, setForm] = useState<OrderFormData>({
    name: "",
    phone: "",
    quantity: "",
    address: "",
  });

  const updateField = (field: OrderField, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const isValid =
    form.name.trim() !== "" &&
    form.phone.trim() !== "" &&
    form.quantity.trim() !== "";

  return {
    form,
    updateField,
    isValid,
    setForm,
  };
}
