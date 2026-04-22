"use client";

import { MessageCircle, MapPin } from "lucide-react";

interface FooterActionsProps {
  phone: string; // e.g., "+919876543210"
  address: string; // e.g., "123 Sweet Lane, Mumbai"
}

export function FooterActions({ phone, address }: FooterActionsProps) {
  const handleMapClick = () => {
    const encodedAddress = encodeURIComponent(address);
    // Detects iOS to open Apple Maps specifically
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

    if (isIOS) {
      window.open(`maps://maps.apple.com/?q=${encodedAddress}`, "_blank");
    } else {
      window.open(
        `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`,
        "_blank",
      );
    }
  };

  const handleWhatsApp = () => {
    // Removes non-numeric characters for the API link
    const cleanNumber = phone.replace(/\D/g, "");
    window.open(
      `https://wa.me/${cleanNumber}?text=Hi! I'd like to place an order.`,
      "_blank",
    );
  };

  return (
    <div className="flex flex-col gap-3 mt-8 w-full max-w-60 mx-auto md:mx-0">
      {/* WhatsApp Order Button */}
      <button
        onClick={handleWhatsApp}
        className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white py-2.5 px-4 rounded-xl text-xs font-bold transition-all active:scale-95 shadow-md"
      >
        <MessageCircle className="w-4 h-4" strokeWidth={2.5} />
        ORDER ON WHATSAPP
      </button>

      {/* Map Directions Button */}
      <button
        onClick={handleMapClick}
        className="flex items-center justify-center gap-2 bg-white border border-neutral-200 text-neutral-900 py-2.5 px-4 rounded-xl text-xs font-bold transition-all active:scale-95 shadow-sm"
      >
        <MapPin className="w-4 h-4 text-orange-600" strokeWidth={2.5} />
        GET DIRECTIONS
      </button>
    </div>
  );
}
