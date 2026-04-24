"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Star, MapPin, ExternalLink, Phone } from "lucide-react";

export default function GoogleBusinessShowcase() {
  const businessData = {
    name: "Royal Mithai & Restaurant",
    rating: 4.8,
    reviews: 328,
    address: "Main Road, Gaya, Bihar",
    phone: "+91 98765 43210",
    googleProfile: "https://g.page/r/your-google-business-link", // replace with actual link
  };

  return (
    <section className="py-14 md:py-20 bg-[#faf8f3]">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 items-center"
        >
          {/* Left */}
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-red-100 text-red-600 text-sm font-semibold mb-4">
              Trusted on Google
            </span>

            <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 leading-tight">
              Find Us on Google <br />
              Business Profile
            </h2>

            <p className="mt-4 text-neutral-600 text-base md:text-lg leading-relaxed">
              Check reviews, directions, timings, photos and contact details
              directly on our official Google Business listing.
            </p>

            <div className="mt-6 space-y-3 text-neutral-700">
              <div className="flex items-center gap-3">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <span>
                  {businessData.rating} Rating ({businessData.reviews}+ Reviews)
                </span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-red-500" />
                <span>{businessData.address}</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-green-600" />
                <span>{businessData.phone}</span>
              </div>
            </div>

            <Link
              href={businessData.googleProfile}
              target="_blank"
              className="inline-flex items-center gap-2 mt-7 px-6 py-3 rounded-xl bg-black text-white font-semibold hover:bg-neutral-800 transition"
            >
              View Google Profile
              <ExternalLink className="w-4 h-4" />
            </Link>
          </div>

          {/* Right */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-3xl shadow-xl border border-neutral-100 p-5 md:p-6"
          >
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-red-600 text-white flex items-center justify-center font-bold text-xl">
                RM
              </div>

              <div>
                <h3 className="text-xl font-bold text-neutral-900">
                  {businessData.name}
                </h3>

                <div className="flex items-center gap-1 mt-1">
                  {[1, 2, 3, 4, 5].map((item) => (
                    <Star
                      key={item}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                  <span className="text-sm text-neutral-500 ml-2">
                    {businessData.rating}
                  </span>
                </div>

                <p className="text-sm text-neutral-500 mt-2">
                  Sweets • Restaurant • Bakery
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-2xl overflow-hidden border">
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
                alt="shop"
                className="w-full h-60 object-cover"
              />
            </div>

            <div className="grid grid-cols-2 gap-3 mt-5">
              <div className="bg-neutral-50 rounded-xl p-4">
                <p className="text-sm text-neutral-500">Open Now</p>
                <p className="font-semibold">8:00 AM - 11:00 PM</p>
              </div>

              <div className="bg-neutral-50 rounded-xl p-4">
                <p className="text-sm text-neutral-500">Directions</p>
                <p className="font-semibold">Quick Navigation</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
