// features/order/types/order.types.ts

export interface OrderFormData {
  name: string;
  phone: string;
  quantity: string;
  address: string;
}

export type OrderField = keyof OrderFormData;

export interface OrderModalProps {
  product: {
    name: string;
    price: string;
  };
  onClose: () => void;
}
