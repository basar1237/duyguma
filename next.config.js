/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  images: {
    domains: ['images.unsplash.com'],
  },
}

module.exports = nextConfig
