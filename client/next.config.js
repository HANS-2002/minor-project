/** @type {import('next').NextConfig} */
const nextConfig = {
  staticPageGenerationTimeout: 240,
  experimental: {
    appDir: true,
    esmExternals: false,
  },
  images: {
    domains: ['source.unsplash.com'],
  }
}

module.exports = nextConfig;
