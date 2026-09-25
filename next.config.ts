import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: { root: process.cwd() },
  allowedDevOrigins: ["192.168.100.5"],
  async redirects() {
    return [
      { source: "/products/corporate-gift-sets", destination: "/products/gift-boxes", permanent: true },
      { source: "/products/ceramic-mugs", destination: "/products/bottles-mugs", permanent: true },
      { source: "/products/metal-drinkware", destination: "/products/bottles-mugs", permanent: true },
      { source: "/products/customized-water-bottles", destination: "/products/bottles-mugs", permanent: true },
      { source: "/products/technology-gifts", destination: "/products", permanent: true },
      { source: "/products/pens-stationery", destination: "/products", permanent: true },
      { source: "/products/customized-keychains", destination: "/products/keychains", permanent: true },
      { source: "/products/corporate-desk-accessories", destination: "/products", permanent: true },
      { source: "/products/promotional-mini-fans", destination: "/products/electronics-accessories", permanent: true },
      { source: "/products/table-flags-display", destination: "/products/office-gifts", permanent: true },
    ];
  },
};

export default nextConfig;
