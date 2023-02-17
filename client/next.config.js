/** @type {import('next').NextConfig} */
const nextConfig = {
  staticPageGenerationTimeout: 240,
  experimental: {
    appDir: true,
    esmExternals: false,
  },
};

module.exports = nextConfig;
