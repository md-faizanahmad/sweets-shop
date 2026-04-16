// features/order/components/order-modal.tsx

"use client";

import { OrderModalProps } from "@/@types/order.types";
import { useOrderForm } from "@/hooks/use-order-form";
import {
  getAddressFromCoordinates,
  getCurrentPosition,
} from "@/utils/location";
import { buildWhatsAppURL } from "@/utils/whatsapp";
import { contactConfig } from "../layouts/config/contact.config";
import { OrderForm } from "@/features/orders/order-form";

export function OrderModal({ product, onClose }: OrderModalProps) {
  const { form, updateField, isValid, setForm } = useOrderForm();

  const handleLocation = async () => {
    try {
      const pos = await getCurrentPosition();
      const address = await getAddressFromCoordinates(
        pos.coords.latitude,
        pos.coords.longitude,
      );

      setForm((prev) => ({ ...prev, address }));
    } catch {
      alert("Unable to fetch location");
    }
  };

  const handleSubmit = () => {
    if (!isValid) {
      alert("Fill required fields");
      return;
    }

    const url = buildWhatsAppURL(contactConfig.phone, product, form);
    window.open(url, "_blank");
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-6 w-[90%] max-w-md space-y-4">
        <h2 className="text-lg font-bold">Order {product.name}</h2>

        <OrderForm
          form={form}
          onChange={updateField}
          onLocation={handleLocation}
        />

        <div className="flex gap-2">
          <button
            onClick={handleSubmit}
            className="flex-1 bg-green-600 text-white py-2 rounded"
          >
            Send via WhatsApp
          </button>

          <button onClick={onClose} className="flex-1 bg-gray-200 py-2 rounded">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
