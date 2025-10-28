import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.wixstatic.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.wixstatic.com",
        pathname: "/**",
      },
    ],
  },

  async redirects() {
    return [
      {
        source: "/shop",
        destination: "/all-products",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
