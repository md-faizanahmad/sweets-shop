"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const socials = [
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: "https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg",
    color: "hover:bg-pink-50",
  },
  {
    name: "Facebook",
    href: "https://facebook.com",
    icon: "https://upload.wikimedia.org/wikipedia/commons/b/b9/2023_Facebook_icon.svg",
    color: "hover:bg-blue-50",
  },
  {
    name: "YouTube",
    href: "https://youtube.com",
    icon: "https://upload.wikimedia.org/wikipedia/commons/2/20/YouTube_2024.svg",
    color: "hover:bg-red-50",
  },
];

export default function SocialLinks() {
  return (
    <div className="pt-6 border-t border-gray-200">
      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-6">
        Connect with us
      </p>
      <div className="grid grid-cols-1 gap-3">
        {socials.map((social) => (
          <motion.a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ x: 5 }}
            className={`flex items-center justify-between p-4 rounded-2xl bg-white border border-gray-100 shadow-sm transition-all duration-300 ${social.color} group`}
          >
            <div className="flex items-center gap-4">
              <div className="relative w-6 h-6 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-300">
                <Image
                  src={social.icon}
                  alt={`${social.name} icon`}
                  fill
                  className="object-contain"
                  sizes="24px"
                />
              </div>
              <span className="font-bold text-sm uppercase tracking-wider text-neutral-700">
                {social.name}
              </span>
            </div>
            <ArrowUpRight
              size={16}
              className="text-gray-300 group-hover:text-neutral-900 transition-colors"
            />
          </motion.a>
        ))}
      </div>
    </div>
  );
}
