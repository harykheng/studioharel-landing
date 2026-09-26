import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // 90 keeps the text in work screenshots crisp; 75 stays the default for everything else
    qualities: [75, 90],
  },
};

export default nextConfig;
