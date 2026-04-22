import Contact from "@/features/contact/Contact";
import { Metadata } from "next";

// 1. SEO Metadata (Server Side)
export const metadata: Metadata = {
  title: "Contact Us | Kaveri Sweets",
  description:
    "Get in touch with Kaveri Sweets for custom orders, bulk inquiries, or to find our boutique in Gaya, Bihar. We'd love to hear from you.",
  openGraph: {
    title: "Contact Kaveri Sweets",
    description:
      "Authentic Indian sweets made with love. Reach out for orders and inquiries.",
    images: [{ url: "/og-contact.jpg", width: 1200, height: 630 }],
  },
};

export default function ContactPage() {
  return <Contact />;
}
