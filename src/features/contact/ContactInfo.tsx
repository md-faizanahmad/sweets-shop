"use client";
import { Mail, Phone, MapPin } from "lucide-react";
import { Location } from "@/components/ui/Location";
import ContactMethod from "./ContactMethod";
import { contactConfig } from "./contact.config";
import SocialLinks from "./SocialLinks";

export default function ContactInfo() {
  return (
    <div className="space-y-10 order-2 lg:order-1">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
        {contactConfig.methods.map((method, idx) => (
          <ContactMethod
            key={idx}
            icon={idx === 0 ? <Phone /> : idx === 1 ? <Mail /> : <MapPin />}
            {...method}
          />
        ))}
        <SocialLinks />
      </div>

      <div className="rounded-3xl overflow-hidden shadow-xl border border-white">
        <Location />
      </div>
    </div>
  );
}
