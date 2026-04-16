"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { X, MessageCircle } from "lucide-react";
import { OrderModalProps } from "@/@types/order.types";
import { useOrderForm } from "@/hooks/use-order-form";
import {
  getAddressFromCoordinates,
  getCurrentPosition,
} from "@/utils/location";
import { buildWhatsAppURL } from "@/utils/whatsapp";
import { contactConfig } from "../layouts/config/contact.config";
import { OrderForm } from "@/features/orders/order-form";
import { calculateTotalPrice } from "@/utils/price";

export function OrderModal({ product, onClose }: OrderModalProps) {
  const { form, updateField, isValid, setForm } = useOrderForm();
  const totalPrice = calculateTotalPrice(form.quantity, product.price);
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);
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
  if (typeof document === "undefined") return null;

  return createPortal(
    <div className="fixed inset-0 z-999 flex items-end md:items-center justify-center">
      {/* --- BACKDROP WITH BLUR --- */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-neutral-900/40 backdrop-blur-md"
      />

      {/* --- MODAL CONTAINER --- */}
      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: "100%", opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative w-full max-w-md bg-white rounded-t-[2.5rem] md:rounded-[2.5rem] shadow-2xl z-10 overflow-hidden flex flex-col"
      >
        {/* Compact Header */}
        <div className="p-6 pb-4 flex items-center justify-between border-b border-neutral-50 bg-[#FAF9F6]">
          <div className="space-y-1">
            <span className="text-[10px] font-black uppercase tracking-widest text-neutral-400">
              Confirm Order
            </span>
            <h2 className="text-xl font-black text-neutral-900 leading-none">
              {product.name}
            </h2>
            <div className="text-sm  text-neutral-900 leading-none">
              {product.price}
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 bg-white rounded-full shadow-sm border border-neutral-100 text-neutral-400 hover:text-neutral-900 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body - Scrollable on small devices */}
        <div className="p-6 overflow-y-auto max-h-[65vh] custom-scrollbar">
          <OrderForm
            form={form}
            onChange={updateField}
            onLocation={handleLocation}
            totalPrice={totalPrice}
          />
        </div>

        {/* Action Buttons */}
        <div className="p-6 pt-2 space-y-3">
          <button
            onClick={handleSubmit}
            className="w-full h-14 rounded-2xl flex items-center justify-center gap-3 font-black text-xs uppercase tracking-[0.2em] shadow-xl transition-all active:scale-95"
            style={{
              backgroundColor: "var(--nav-cta-bg)",
              color: "var(--nav-cta-text)",
            }}
          >
            <MessageCircle className="w-5 h-5" />
            Send via WhatsApp
          </button>

          <button
            onClick={onClose}
            className="w-full h-10 rounded-xl font-bold text-[10px] uppercase tracking-widest text-neutral-400 hover:text-neutral-600 transition-colors"
          >
            Cancel Order
          </button>
        </div>
      </motion.div>
    </div>,
    document.body,
  );
}
