import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "http",
        hostname: "**",
      },
    ],
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.resolve.alias["msw/browser"] = false;
    } else {
      config.resolve.alias["msw/node"] = false;
    }
    return config;
  },
};

export default nextConfig;
