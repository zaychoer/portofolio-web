/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['d1n6fa18ox4kyq.cloudfront.net'],
    formats: ['image/avif', 'image/webp'],
  },
};

module.exports = nextConfig;
