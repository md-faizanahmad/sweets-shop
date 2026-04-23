"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { Location } from "@/components/ui/Location"; // Using your previous map logic
import FormInput from "./FormInput";
import ContactMethod from "./ContactMethod";
import { contactConfig } from "./contact.config";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Auto-close modal after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <main className="min-h-screen pt-24 md:pt-32 pb-16 px-4 md:px-6 bg-[#FAF9F6]">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-12 md:mb-16 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-[#4c4a4a]"
          >
            {contactConfig.title}{" "}
            <span className="text-orange-600">{contactConfig.titleAccent}</span>
          </motion.h1>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto font-medium">
            {contactConfig.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-start">
          {/* Left Side: Info & Map */}
          <div className="space-y-10 order-2 lg:order-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
              {contactConfig.methods.map((method, idx) => (
                <ContactMethod
                  key={idx}
                  icon={
                    idx === 0 ? <Phone /> : idx === 1 ? <Mail /> : <MapPin />
                  }
                  {...method}
                />
              ))}
            </div>

            {/* Injected your Location component here */}
            <div className="rounded-3xl overflow-hidden shadow-xl border border-white">
              <Location />
            </div>
          </div>

          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-[2.5rem] p-6 md:p-10 shadow-2xl shadow-gray-200/50 border border-gray-50 order-1 lg:order-2"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <FormInput label="Name" placeholder="John Doe" required />
                <FormInput
                  label="Email"
                  type="email"
                  placeholder="john@example.com"
                  required
                />
              </div>
              <FormInput label="Subject" placeholder="Bulk Order Inquiry" />
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">
                  Message
                </label>
                <textarea
                  rows={4}
                  required
                  className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-orange-500 outline-none transition-all resize-none text-sm"
                  placeholder="Tell us what's on your mind..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full flex items-center justify-center gap-3 py-5 rounded-2xl font-black uppercase tracking-widest bg-neutral-900 text-white shadow-xl hover:bg-black transition-all"
              >
                <Send className="w-4 h-4" />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Success Modal */}
      <AnimatePresence>
        {isSubmitted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 flex items-center justify-center bg-black/60 backdrop-blur-sm px-6"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-[3rem] p-10 max-w-sm w-full text-center shadow-2xl"
            >
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-black text-neutral-900 mb-2">
                Sweet Success!
              </h3>
              <p className="text-gray-500 font-medium">
                Your message has been sent. We&apos;ll get back to you shortly.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
