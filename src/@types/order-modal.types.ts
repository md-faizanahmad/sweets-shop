// features/order/types/order-modal.types.ts

import { OrderFormData } from "@/features/orders/types";

export interface Product {
  id: string;
  name: string;
  price: number; // keep it number, not string garbage like "₹900/kg"
}

export interface OrderModalProps {
  // core
  product: Product;
  open: boolean;
  onClose: () => void;

  // optional form control
  initialValues?: Partial<OrderFormData>;

  // behavior injection
  onSubmit?: (data: OrderFormData, product: Product) => void | Promise<void>;
  onSuccess?: () => void;
  onError?: (error: unknown) => void;

  // logic injection
  calculatePrice?: (quantity: string, price: number) => number | null;
  onAutoFillLocation?: () => Promise<string>;
}
