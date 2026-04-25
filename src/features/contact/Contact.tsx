"use client";
import { useState } from "react";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import SuccessModal from "./SuccessModal";
import ContactHeader from "./ContactHeader";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSuccess = () => {
    setIsSubmitted(true);
    // Auto-close modal after 4 seconds
    setTimeout(() => setIsSubmitted(false), 4000);
  };

  return (
    <main className="min-h-screen pt-24 md:pt-22 pb-16 px-4 md:px-6 bg-[#FAF9F6]">
      <div className="container mx-auto max-w-6xl">
        {/* Part 1: Header */}
        <ContactHeader />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-start">
          {/* Part 2: Left Side (Info & Map) */}
          <ContactInfo />

          {/* Part 3: Right Side (Tabbed Form) */}
          <ContactForm onSuccess={handleSuccess} />
        </div>
      </div>

      {/* Part 4: Success Modal Overlay */}
      <SuccessModal
        isOpen={isSubmitted}
        onClose={() => setIsSubmitted(false)}
      />
    </main>
  );
}
