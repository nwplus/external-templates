import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Must disable for output: "export"
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
