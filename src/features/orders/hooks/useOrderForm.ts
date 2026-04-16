// features/order/hooks/useOrderForm.ts

import { useState, useCallback } from "react";
import { OrderFormData, OrderField } from "../types";
import { orderSchema } from "../schema";

export function useOrderForm(initial: OrderFormData) {
  const [form, setForm] = useState<OrderFormData>(initial);
  const [errors, setErrors] = useState<Partial<Record<OrderField, string>>>({});

  const updateField = useCallback((field: OrderField, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  }, []);

  const validate = useCallback(() => {
    const result = orderSchema.safeParse(form);

    if (!result.success) {
      const fieldErrors: Partial<Record<OrderField, string>> = {};

      result.error.issues.forEach((err) => {
        const field = err.path[0] as OrderField;
        fieldErrors[field] = err.message;
      });

      setErrors(fieldErrors);
      return false;
    }

    setErrors({});
    return true;
  }, [form]);

  return {
    form,
    errors,
    updateField,
    validate,
  };
}
