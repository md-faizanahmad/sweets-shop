"use client";

import { Product } from "@/features/home/config/product.config";
import { useState } from "react";
import { contactConfig } from "../layouts/config/contact.config";

type Props = {
  product: Product;
  onClose: () => void;
};

export function OrderModal({ product, onClose }: Props) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    quantity: "",
    address: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation not supported");
      return;
    }

    navigator.geolocation.getCurrentPosition(async (pos) => {
      const { latitude, longitude } = pos.coords;

      // Convert lat/lng → address (reverse geocoding)
      try {
        const res = await fetch(
          `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`,
        );
        const data = await res.json();

        setForm((prev) => ({
          ...prev,
          address: data.display_name || `${latitude}, ${longitude}`,
        }));
      } catch {
        setForm((prev) => ({
          ...prev,
          address: `${latitude}, ${longitude}`,
        }));
      }
    });
  };

  const handleSubmit = () => {
    if (!form.name || !form.phone || !form.quantity) {
      alert("Fill required fields");
      return;
    }

    const message = `🛍️ *New Order*

📦 Product: ${product.name}
⚖️ Quantity: ${form.quantity}
💰 Price: ${product.price}

👤 Name: ${form.name}
📞 Phone: ${form.phone}
📍 Address: ${form.address}`;

    const url = `https://wa.me/${contactConfig.phone}?text=${encodeURIComponent(
      message,
    )}`;

    window.open(url, "_blank");
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-6 w-[90%] max-w-md space-y-4">
        <h2 className="text-lg font-bold">Order {product.name}</h2>

        <input
          name="name"
          placeholder="Your Name"
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <input
          name="phone"
          placeholder="Phone Number"
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <input
          name="quantity"
          placeholder="Quantity (e.g. 1kg)"
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <textarea
          name="address"
          placeholder="Delivery Address"
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <button onClick={handleLocation} className="text-sm text-blue-600">
          Use Current Location
        </button>

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
