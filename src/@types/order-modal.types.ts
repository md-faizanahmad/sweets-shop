// features/order/types/order-modal.types.ts

import { OrderFormData } from "@/features/orders/types";
import { Product } from "./product.types";

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
