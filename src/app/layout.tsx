import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layouts/navbar";
import { Footer } from "@/components/layouts/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://khussweets.com"), // change to real domain

  title: {
    default: "Khus Sweets | Fresh Mithai & Cakes",
    template: "%s | Khus Sweets",
  },

  description:
    "Khus Sweets offers freshly made mithai, premium cakes, and traditional Indian sweets. Order online or visit our shop for authentic taste and quality.",

  keywords: [
    "Khus Sweets",
    "Sweet shop",
    "Mithai",
    "Indian sweets",
    "Cakes",
    "Bakery",
    "Fresh sweets",
  ],

  authors: [{ name: "Khus Sweets" }],
  creator: "Khus Sweets",
  publisher: "Khus Sweets",

  openGraph: {
    title: "Khus Sweets | Fresh Mithai & Cakes",
    description:
      "Premium sweets and cakes made fresh daily. Experience authentic taste at Khus Sweets.",
    url: "https://kaverisweets.com",
    siteName: "Khus Sweets",
    images: [
      {
        url: "/og-image.jpg", // MUST exist in public folder
        width: 1200,
        height: 630,
        alt: "Khus Sweets",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Khus Sweets | Fresh Mithai & Cakes",
    description:
      "Order fresh sweets and cakes from Khus Sweets. Authentic taste, premium quality.",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },

  alternates: {
    canonical: "https://khussweets.com",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
