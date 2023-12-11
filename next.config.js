/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  output: 'export',
  assetPrefix: 'https://kaorutakasu.github.io/examination/out',
};

module.exports = nextConfig;
