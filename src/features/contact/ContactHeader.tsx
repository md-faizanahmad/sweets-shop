"use client";
import { motion } from "framer-motion";
import { contactConfig } from "./contact.config";

export default function ContactHeader() {
  return (
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
  );
}
