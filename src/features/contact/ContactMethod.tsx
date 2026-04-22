import React from "react";

// Types for the Contact Method component
interface ContactMethodProps {
  icon: React.ReactNode;
  title: string;
  detail: string;
  href: string;
}

export default function ContactMethod({
  icon,
  title,
  detail,
  href,
}: ContactMethodProps) {
  return (
    <a href={href} className="flex items-center gap-5 p-2 group">
      <div className="p-4 rounded-2xl bg-white shadow-sm border border-gray-100 text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300">
        {/* Cloning the icon to ensure it inherits the current color properly */}
        {React.isValidElement(icon)
          ? React.cloneElement(icon as React.ReactElement<any>, {
              className: "w-5 h-5",
            })
          : icon}
      </div>
      <div>
        <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-400">
          {title}
        </h4>
        <p className="text-sm md:text-base font-bold text-neutral-800">
          {detail}
        </p>
      </div>
    </a>
  );
}
