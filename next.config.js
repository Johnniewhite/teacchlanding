/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  distDir: '.next',  // Default Next.js build directory
};

module.exports = nextConfig;
