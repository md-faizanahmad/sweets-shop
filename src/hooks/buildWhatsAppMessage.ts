import { Product } from "@/features/home/config/product.config";

export const buildWhatsAppMessage = (product: Product) => {
  return `🛍️ *Order Request*

📦 Product: ${product.name}
💰 Price: ${product.price}

📍 Please share delivery details.

Thank you!


Please confirm availability.`;
};
