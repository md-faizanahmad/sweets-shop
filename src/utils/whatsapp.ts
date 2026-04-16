import { OrderFormData } from "@/@types/order-modal.types";

export function buildWhatsAppURL(
  phone: string,
  product: { name: string; price: string },
  form: OrderFormData,
): string {
  const message = `🛍️ *New Order*

📦 Product: ${product.name}
⚖️ Quantity: ${form.quantity}
💰 Price: ${product.price}

👤 Name: ${form.name}
📞 Phone: ${form.phone}
📍 Address: ${form.address}`;

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
