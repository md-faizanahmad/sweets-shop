"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, MapPin, ExternalLink, Phone } from "lucide-react";
import { googleBusinessConfig } from "./googlebusiness.config";

export default function GoogleBusinessShowcase() {
  const data = googleBusinessConfig;

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
              {data.badge}
            </span>

            <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 leading-tight">
              {data.title.line1}
              <br />
              {data.title.line2}
            </h2>

            <p className="mt-4 text-neutral-600 text-base md:text-lg leading-relaxed">
              {data.description}
            </p>

            <div className="mt-6 space-y-3 text-neutral-700">
              <div className="flex items-center gap-3">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <span>
                  {data.rating} Rating ({data.totalReviews}+ Reviews)
                </span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-red-500" />
                <span>{data.address}</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-green-600" />
                <span>{data.phone}</span>
              </div>
            </div>

            <Link
              href={data.profileUrl}
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
                {data.shortName}
              </div>

              <div>
                <h3 className="text-xl font-bold text-neutral-900">
                  {data.name}
                </h3>

                <div className="flex items-center gap-1 mt-1">
                  {[1, 2, 3, 4, 5].map((item) => (
                    <Star
                      key={item}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                  <span className="text-sm text-neutral-500 ml-2">
                    {data.rating}
                  </span>
                </div>

                <p className="text-sm text-neutral-500 mt-2">{data.category}</p>
              </div>
            </div>

            <div className="mt-6 rounded-2xl overflow-hidden border">
              <Image
                src={data.image.src}
                alt={data.image.alt}
                width={data.image.width}
                height={data.image.height}
                className="w-full h-60 object-cover"
              />
            </div>

            <div className="grid grid-cols-2 gap-3 mt-5">
              <div className="bg-neutral-50 rounded-xl p-4">
                <p className="text-sm text-neutral-500">Open Now</p>
                <p className="font-semibold">{data.openHours}</p>
              </div>

              <div className="bg-neutral-50 rounded-xl p-4">
                <p className="text-sm text-neutral-500">Directions</p>
                <p className="font-semibold">{data.directionText}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
