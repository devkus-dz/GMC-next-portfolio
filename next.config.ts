import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    // ...
  },
  reactStrictMode: true,

  webpack(config, { isServer }) {
    if (!isServer) {
      config.devtool = "source-map";
    }

    // Handle CSS imports
    config.module.rules.push({
      test: /\.css$/,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    console.log(config); // Log Webpack config for debugging
    return config;
  },
};

export default nextConfig;