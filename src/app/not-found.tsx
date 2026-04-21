"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      {/* Animated 404 Text */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-9xl font-black tracking-tighter"
        style={{ color: "var(--nav-hover)" }}
      >
        404
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#4c4a4a] sm:text-5xl">
          Page not found
        </h2>
        <p className="mt-6 text-base leading-7 text-gray-600">
          Sorry, we couldn’t find the page you’re looking for. <br />
          It might have been moved or the link is broken.
        </p>
      </motion.div>

      {/* Action Buttons */}
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <Link
          href="/"
          className="group flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold uppercase tracking-widest shadow-lg transition-all duration-300"
          style={{
            backgroundColor: "var(--nav-cta-bg)",
            color: "var(--nav-cta-text)",
          }}
        >
          <Home className="h-4 w-4" />
          Back to Home
        </Link>

        <button
          onClick={() => window.history.back()}
          className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#4c4a4a] transition-colors hover:text-(--nav-hover)"
        >
          <ArrowLeft className="h-4 w-4" />
          Go Back
        </button>
      </div>

      {/* Decorative Background Element */}
      <div
        className="absolute -z-10 h-75 w-75 rounded-full blur-[120px] opacity-20"
        style={{ backgroundColor: "var(--nav-hover)" }}
      />
    </main>
  );
}
