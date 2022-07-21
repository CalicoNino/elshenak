/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/elshenak",
  assetPrefix: "/elshenak",
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    images: {
      unoptimized: true,
    },
  },
};

module.exports = nextConfig;
