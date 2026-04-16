import { Product } from "@/@types/product.types";
import { OrderFormData } from "@/features/orders/types";
import { formatPrice } from "@/helper/parse-quantity";

export function buildWhatsAppURL(
  phone: string,
  product: Product,
  form: OrderFormData,
  totalPrice: number | null,
): string {
  const message = `🛍️ *New Order Request*

━━━━━━━━━━━━━━━

📦 *Product:* ${product.name}
⚖️ *Quantity:* ${form.quantity}
💵 *Rate:* ${formatPrice(product)}
💰 *Total:* ${totalPrice ? `₹${totalPrice}` : "—"}

━━━━━━━━━━━━━━━

👤 *Customer Details*

• Name: ${form.name}
• Phone: ${form.phone}
• Address: ${form.address || "Not provided"}

━━━━━━━━━━━━━━━

📩 Please confirm availability and delivery time.`;

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
