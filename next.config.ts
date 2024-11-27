import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  webpack(config, { isServer }) {
    if (!isServer) {
      // Ici, on indique à Webpack d'ignorer child_process côté client
      config.resolve.fallback = {
        ...config.resolve.fallback,
        child_process: false, // Ignore `child_process` côté client
      };
    }
    return config;
  },
};

export default nextConfig;



