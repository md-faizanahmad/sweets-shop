"use client";

import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle } from "lucide-react";

import { useOrderForm } from "../hooks/useOrderForm";
import { OrderForm } from "./OrderForm";
import { OrderModalProps } from "@/@types/order-modal.types";

export function OrderModal({
  product,
  open,
  onClose,
  initialValues,
  onSubmit,
  onSuccess,
  onError,
  calculatePrice,
  onAutoFillLocation,
}: OrderModalProps) {
  const { form, errors, updateField, validate, setForm } = useOrderForm({
    name: "",
    phone: "",
    quantity: "",
    address: "",
    ...initialValues,
  });

  const [loading, setLoading] = useState(false);

  // derived state (no hardcoding)
  const totalPrice = useMemo(() => {
    return calculatePrice ? calculatePrice(form.quantity, product.price) : null;
  }, [form.quantity, product.price, calculatePrice]);

  // lock scroll only when open
  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  // auto-fill location (decoupled)
  const handleLocation = async () => {
    if (!onAutoFillLocation) return;

    try {
      const address = await onAutoFillLocation();
      if (address) {
        updateField("address", address);
      }
    } catch (err) {
      console.error(err);
    }
  };

  // submit handler (fully controlled)
  const handleSubmit = async () => {
    if (!validate()) return;

    if (!onSubmit) {
      console.warn("OrderModal: onSubmit not provided");
      return;
    }

    try {
      setLoading(true);
      await onSubmit(form, product);
      onSuccess?.();
      onClose();
    } catch (err) {
      onError?.(err);
    } finally {
      setLoading(false);
    }
  };

  // SSR safety
  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[999] flex items-end md:items-center justify-center">
          {/* BACKDROP */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-neutral-900/40 backdrop-blur-md"
          />

          {/* MODAL */}
          <motion.div
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-md bg-white rounded-t-[2.5rem] md:rounded-[2.5rem] shadow-2xl z-10 overflow-hidden flex flex-col"
          >
            {/* HEADER */}
            <div className="p-6 pb-4 flex items-center justify-between border-b border-neutral-100 bg-[#FAF9F6]">
              <div className="space-y-1">
                <span className="text-[10px] font-black uppercase tracking-widest text-neutral-400">
                  Confirm Order
                </span>
                <h2 className="text-xl font-black text-neutral-900 leading-none">
                  {product.name}
                </h2>
                <div className="text-sm text-neutral-900">₹{product.price}</div>
              </div>

              <button
                onClick={onClose}
                className="p-2 bg-white rounded-full shadow-sm border border-neutral-100 text-neutral-400 hover:text-neutral-900 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* BODY */}
            <div className="p-6 overflow-y-auto max-h-[65vh]">
              <OrderForm
                form={form}
                errors={errors}
                onChange={updateField}
                onLocation={handleLocation}
                totalPrice={totalPrice}
              />
            </div>

            {/* ACTIONS */}
            <div className="p-6 pt-2 space-y-3">
              <button
                onClick={handleSubmit}
                disabled={loading}
                className="w-full h-14 rounded-2xl flex items-center justify-center gap-3 font-black text-xs uppercase tracking-[0.2em] shadow-xl transition-all active:scale-95 disabled:opacity-50"
                style={{
                  backgroundColor: "var(--nav-cta-bg)",
                  color: "var(--nav-cta-text)",
                }}
              >
                <MessageCircle className="w-5 h-5" />
                {loading ? "Processing..." : "Confirm Order"}
              </button>

              <button
                onClick={onClose}
                className="w-full h-10 rounded-xl font-bold text-[10px] uppercase tracking-widest text-neutral-400 hover:text-neutral-600 transition-colors"
              >
                Cancel
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
