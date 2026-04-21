"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-32 pb-16 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Header Section */}
        <div className="mb-16 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-[#4c4a4a]"
          >
            Get In <span style={{ color: "var(--nav-hover)" }}>Touch</span>
          </motion.h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Have a question about our sweets or want to place a custom order?
            We&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side: Contact Info & Socials */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-10"
          >
            {/* Contact Details */}
            <div className="space-y-6">
              <ContactMethod
                icon={<Phone className="w-5 h-5" />}
                title="Call Us"
                detail="+91 99999 99999"
              />
              <ContactMethod
                icon={<Mail className="w-5 h-5" />}
                title="Email Us"
                detail="hello@khusshop.com"
              />
              <ContactMethod
                icon={<MapPin className="w-5 h-5" />}
                title="Visit Us"
                detail="123 Sweet Street, Dessert Lane, Jaipur, Rajasthan"
              />
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-sm font-black uppercase tracking-widest text-[#4c4a4a] mb-4">
                Follow the sweetness
              </h3>
              <div className="flex gap-4">
                {/* <SocialIcon icon={<Instagram />} link="#" /> */}
                {/* <SocialIcon icon={<Facebook />} link="#" /> */}
                {/* <SocialIcon icon={<Twitter />} link="#" /> */}
              </div>
            </div>

            {/* Embed Google Map (Optional) */}
            <div className="rounded-2xl overflow-hidden h-64 bg-gray-200 shadow-inner">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.0123456789!2d75.7872!3d26.9124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDU0JzQ0LjYiTiA3NcKwNDcnMTMuOSJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-3xl p-8 shadow-2xl shadow-gray-200/50 border border-gray-100"
          >
            <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:ring-2 focus:ring-(--nav-hover) outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:ring-2 focus:ring-(--nav-hover) outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-500">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:ring-2 focus:ring-(--nav-hover) outline-none transition-all"
                  placeholder="Bulk Order Inquiry"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-500">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:ring-2 focus:ring-(--nav-hover) outline-none transition-all resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full flex items-center justify-center gap-3 py-4 rounded-xl font-black uppercase tracking-widest shadow-lg transition-all"
                style={{
                  backgroundColor: "var(--nav-cta-bg)",
                  color: "var(--nav-cta-text)",
                }}
              >
                <Send className="w-4 h-4" />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </main>
  );
}

// Helper Components for clean code
function ContactMethod({
  icon,
  title,
  detail,
}: {
  icon: React.ReactNode;
  title: string;
  detail: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div
        className="p-3 rounded-xl"
        style={{
          backgroundColor: "rgba(var(--nav-hover-rgb), 0.1)",
          color: "var(--nav-hover)",
        }}
      >
        {icon}
      </div>
      <div>
        <h4 className="text-sm font-bold uppercase tracking-tight text-[#4c4a4a]">
          {title}
        </h4>
        <p className="text-gray-600">{detail}</p>
      </div>
    </div>
  );
}

function SocialIcon({ icon, link }: { icon: React.ReactNode; link: string }) {
  return (
    <a
      href={link}
      className="p-3 rounded-full bg-gray-100 text-[#4c4a4a] hover:bg-(--nav-hover) hover:text-white transition-all duration-300"
    >
      {icon}
    </a>
  );
}
