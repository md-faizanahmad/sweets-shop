import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org", // Often used for Unsplash+ images
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "googleusercontent.com", // Useful for logos/flags
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com", // Useful for logos/flags
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
