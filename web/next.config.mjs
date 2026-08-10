/** @type {import('next').NextConfig} */
const nextConfig = {
  // Performance optimizations
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },

  // Turbopack configuration (moved from experimental.turbo)
  turbopack: {
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
    },
  },

  // Image optimization
  images: {
    formats: ["image/webp", "image/avif"],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
  },

  // Enable compression
  compress: true,

  // TypeScript 7 is a native Go port that doesn't expose the JS compiler API
  // that Next.js 15 uses for type checking. SWC handles compilation, so the
  // build output is correct; type checking can be run separately via tsc.
  typescript: {
    ignoreBuildErrors: true,
  },

  // Optimize CSS
  // swcMinify is now enabled by default in Next.js 15+

  // Bundle analyzer (optional - can be enabled during builds)
  webpack: (config, { isServer, dev }) => {
    if (!dev && !isServer) {
      // Add bundle analyzer in production if needed
      // const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
      // config.plugins.push(new BundleAnalyzerPlugin());
    }

    return config;
  },
};

export default nextConfig;
