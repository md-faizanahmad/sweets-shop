import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layouts/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kaverisweets.com"), // change to real domain

  title: {
    default: "Kaveri Sweets | Fresh Mithai & Cakes",
    template: "%s | Kaveri Sweets",
  },

  description:
    "Kaveri Sweets offers freshly made mithai, premium cakes, and traditional Indian sweets. Order online or visit our shop for authentic taste and quality.",

  keywords: [
    "Kaveri Sweets",
    "Sweet shop",
    "Mithai",
    "Indian sweets",
    "Cakes",
    "Bakery",
    "Fresh sweets",
  ],

  authors: [{ name: "Kaveri Sweets" }],
  creator: "Kaveri Sweets",
  publisher: "Kaveri Sweets",

  openGraph: {
    title: "Kaveri Sweets | Fresh Mithai & Cakes",
    description:
      "Premium sweets and cakes made fresh daily. Experience authentic taste at Kaveri Sweets.",
    url: "https://kaverisweets.com",
    siteName: "Kaveri Sweets",
    images: [
      {
        url: "/og-image.jpg", // MUST exist in public folder
        width: 1200,
        height: 630,
        alt: "Kaveri Sweets",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Kaveri Sweets | Fresh Mithai & Cakes",
    description:
      "Order fresh sweets and cakes from Kaveri Sweets. Authentic taste, premium quality.",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },

  alternates: {
    canonical: "https://kaverisweets.com",
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
      </body>
    </html>
  );
}
