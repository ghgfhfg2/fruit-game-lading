import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    loader: "custom",
    loaderFile: "./imageLoader.js",
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
