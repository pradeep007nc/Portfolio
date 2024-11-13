import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ensuring Next.js works in static export mode
  output: "export",
  images: {
    unoptimized: true, // Disables image optimization
  },
};

export default nextConfig;
