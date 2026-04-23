// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { MessageCircle } from "lucide-react";
// import { MobileMenu } from "./MobileMenu";
// import { motion } from "framer-motion";
// import { NAV_LINKS } from "@/@types/nav";

// export default function Navbar() {
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header
//       className={`fixed top-0 z-50 w-full transition-all duration-500 ${
//         isScrolled
//           ? "py-3 backdrop-blur-md border-b"
//           : "py-5 bg-transparent border-transparent"
//       }`}
//       style={{
//         backgroundColor: isScrolled ? "var(--nav-bg)" : "transparent",
//         borderColor: isScrolled ? "var(--nav-border)" : "transparent",
//       }}
//     >
//       <nav className="container mx-auto flex items-center justify-between px-6">
//         {/* Logo Section */}
//         <Link
//           href="/"
//           className="flex items-center gap-3 group transition-opacity hover:opacity-90"
//         >
//           <div className="relative p-1.5 rounded-lg group-hover:rotate-12 transition-transform duration-500 ease-out">
//             <Image
//               src="/brandIcon.png"
//               alt="SweetShop Logo"
//               width={32}
//               height={32}
//               className="object-contain rounded-full bg-white/20"
//               priority
//             />
//           </div>
//           <span
//             className="text-xl font-bold tracking-tight transition-colors duration-300"
//             style={{ color: isScrolled ? "var(--nav-text)" : "#4c4a4a" }}
//           >
//             Khus<span style={{ color: "var(--nav-hover)" }}>Shop</span>
//           </span>
//         </Link>

//         {/* Desktop Nav */}
//         <div className="hidden md:flex items-center gap-8">
//           <ul className="flex items-center gap-7">
//             {NAV_LINKS.map((link) => (
//               <li key={link.href}>
//                 <Link
//                   href={link.href}
//                   className="text-sm font-bold tracking-wide transition-all duration-300 uppercase opacity-90 hover:opacity-100"
//                   style={{
//                     color: isScrolled ? "var(--nav-text-muted)" : "#4c4a4a",
//                   }}
//                   onMouseEnter={(e) =>
//                     (e.currentTarget.style.color = "var(--nav-hover)")
//                   }
//                   onMouseLeave={(e) =>
//                     (e.currentTarget.style.color = isScrolled
//                       ? "var(--nav-text-muted)"
//                       : "#4c4a4a")
//                   }
//                 >
//                   {link.label}
//                 </Link>
//               </li>
//             ))}
//           </ul>

//           <motion.a
//             whileHover={{ y: -2 }}
//             whileTap={{ scale: 0.98 }}
//             href="https://wa.me/919999999999"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-flex items-center gap-2 rounded-full px-6 py-2 text-xs font-black uppercase tracking-widest shadow-lg transition-all duration-300"
//             style={{
//               backgroundColor: "var(--nav-cta-bg)",
//               color: "var(--nav-cta-text)",
//             }}
//           >
//             <MessageCircle className="h-4 w-4" />
//             Order
//           </motion.a>
//         </div>

//         <MobileMenu />
//       </nav>
//     </header>
//   );
// }
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation"; // Import usePathname
import { MessageCircle } from "lucide-react";
import { MobileMenu } from "./MobileMenu";
import { motion } from "framer-motion";
import { NAV_LINKS } from "@/@types/nav";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname(); // Get current route

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        isScrolled
          ? "py-3 backdrop-blur-md border-b"
          : "py-5 bg-transparent border-transparent"
      }`}
      style={{
        backgroundColor: isScrolled ? "var(--nav-bg)" : "transparent",
        borderColor: isScrolled ? "var(--nav-border)" : "transparent",
      }}
    >
      <nav className="container mx-auto flex items-center justify-between px-6">
        {/* Logo Section */}
        <Link
          href="/"
          className="flex items-center gap-3 group transition-opacity hover:opacity-90"
        >
          <div className="relative p-1.5 rounded-lg group-hover:rotate-12 transition-transform duration-500 ease-out">
            <Image
              src="/brandIcon.png"
              alt="SweetShop Logo"
              width={32}
              height={32}
              className="object-contain rounded-full bg-white/20"
              priority
            />
          </div>
          <span
            className="text-xl font-bold tracking-tight transition-colors duration-300"
            style={{ color: isScrolled ? "var(--nav-text)" : "#4c4a4a" }}
          >
            Khus<span style={{ color: "var(--nav-hover)" }}>Shop</span>
            <span style={{ color: "var(--footer-accent)" }}>.</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-7">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href; // Check if active

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-bold tracking-wide transition-all duration-300 uppercase opacity-90 hover:opacity-100"
                    style={{
                      color: isActive
                        ? "var(--nav-hover)" // Active Color
                        : isScrolled
                          ? "var(--nav-text-muted)"
                          : "#4c4a4a",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "var(--nav-hover)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = isActive
                        ? "var(--nav-hover)"
                        : isScrolled
                          ? "var(--nav-text-muted)"
                          : "#4c4a4a")
                    }
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <motion.a
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-6 py-2 text-xs font-black uppercase tracking-widest shadow-lg transition-all duration-300"
            style={{
              backgroundColor: "var(--nav-cta-bg)",
              color: "var(--nav-cta-text)",
            }}
          >
            <MessageCircle className="h-4 w-4" />
            Order
          </motion.a>
        </div>

        <MobileMenu />
      </nav>
    </header>
  );
}
