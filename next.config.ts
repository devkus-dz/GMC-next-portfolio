import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.daisyui.com",
      },
      {
        protocol: "https",
        hostname: "a.storyblok.com",
      },
      {
        protocol: "https",
        hostname: "www.synergymktsolutions.com",
      },
      {
        protocol: "https",
        hostname: "images04.nicepage.com",
      },
      {
        protocol: "https",
        hostname: "play-lh.googleusercontent.com",
      },
    ],
  },

  reactStrictMode: true,

  webpack(config, { isServer }) {
    if (!isServer) {
      config.devtool = "source-map";
    }

    // Handle CSS imports
    config.module.rules.push({
      test: /\.css$/,
      use: [
        "style-loader", // Injects styles into the DOM
        "css-loader", // Translates CSS into CommonJS
        "postcss-loader", // Applies PostCSS transformations
      ],
    });

    console.log(config); // Log Webpack config for debugging
    return config;
  },
};

export default nextConfig;
