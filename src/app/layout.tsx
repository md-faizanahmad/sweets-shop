import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layouts/navbar";
import { Footer } from "@/components/layouts/footer";
import { localBusinessSchema } from "@/lib/schema";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sweets-shop-theta.vercel.app"),

  title: {
    default: "Khus Sweets | Fresh Mithai & Cakes",
    template: "%s | Khus Sweets",
  },

  description:
    "Khus Sweets offers freshly made mithai, premium cakes, bakery items, and traditional Indian sweets. Visit us for authentic taste and quality.",

  keywords: [
    "Khus Sweets",
    "Mithai Shop",
    "Indian sweets",
    "Cake shop",
    "Bakery",
  ],

  authors: [{ name: "Khus Sweets" }],
  creator: "Khus Sweets",
  publisher: "Khus Sweets",
  category: "Food & Restaurant",

  manifest: "/manifest.json",

  openGraph: {
    title: "Khus Sweets | Fresh Mithai & Cakes",
    description: "Fresh sweets, cakes and authentic mithai made daily.",
    url: "/",
    siteName: "Khus Sweets",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Khus Sweets",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Khus Sweets",
    description: "Fresh mithai and cakes made daily.",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
