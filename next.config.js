/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: 'akamai',
    path: ''
  },
  basePath: '/poc-nextjs-router',
  assetPrefix: '/poc-nextjs-router'
}

module.exports = nextConfig
