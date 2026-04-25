"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageSquare, Send } from "lucide-react";
import FormInput from "./FormInput";

export default function ContactForm({ onSuccess }: { onSuccess: () => void }) {
  const [method, setMethod] = useState<"email" | "whatsapp">("email");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    if (method === "whatsapp") {
      const text = `Hello! Name: ${data.name}. Message: ${data.message}`;
      const whatsNo = +917563092029;
      window.open(
        `https://wa.me/${whatsNo}?text=${encodeURIComponent(text)}`,
        "_blank",
      );
    }

    onSuccess();
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-white rounded-[2.5rem] p-6 md:p-10 shadow-2xl border border-gray-50 order-1 lg:order-2"
    >
      {/* Tab Switcher */}
      <div className="flex bg-gray-100 p-1 rounded-2xl mb-8">
        <button
          onClick={() => setMethod("email")}
          className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-xs uppercase tracking-widest transition-all ${
            method === "email"
              ? "bg-white shadow-sm text-neutral-900"
              : "text-gray-400"
          }`}
        >
          <Mail className="w-4 h-4" /> Email
        </button>
        <button
          onClick={() => setMethod("whatsapp")}
          className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-xs uppercase tracking-widest transition-all ${
            method === "whatsapp"
              ? "bg-green-500 text-white shadow-sm"
              : "text-gray-400"
          }`}
        >
          <MessageSquare className="w-4 h-4" /> WhatsApp
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <FormInput name="name" label="Name" placeholder="John Doe" required />
          <FormInput
            name="email"
            label="Email"
            type="email"
            placeholder="john@example.com"
            required
          />
        </div>
        <FormInput name="subject" label="Subject" placeholder="Inquiry" />
        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">
            Message
          </label>
          <textarea
            name="message"
            rows={4}
            required
            className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-orange-500 outline-none transition-all resize-none text-sm"
            placeholder="How can we help?"
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className={`w-full flex items-center justify-center gap-3 py-5 rounded-2xl font-black uppercase tracking-widest text-white shadow-xl transition-all ${
            method === "email"
              ? "bg-neutral-900 hover:bg-black"
              : "bg-green-600 hover:bg-green-700"
          }`}
        >
          {method === "email" ? (
            <Send className="w-4 h-4" />
          ) : (
            <MessageSquare className="w-4 h-4" />
          )}
          {method === "email" ? "Send Email" : "Send WhatsApp"}
        </motion.button>
      </form>
    </motion.div>
  );
}
