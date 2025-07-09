import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    loader: "custom",
    loaderFile: "./imageLoader.js",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fruit-game-lading.sooyadev.com",
      },
    ],
  },
  trailingSlash: true,
};

export default nextConfig;
