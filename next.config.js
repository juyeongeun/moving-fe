const nextConfig = {
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
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `https://52.78.245.231.nip.io/:path*`,
      },
    ];
  },
};

export default nextConfig;
