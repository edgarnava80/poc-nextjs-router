/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // images: {
  //   loader: 'akamai',
  //   path: ''
  // },
  // basePath: '/poc-nextjs-router',
  // assetPrefix: '/poc-nextjs-router',
}

if (process.env.NODE_ENV === 'prod') {
  nextConfig.assetPrefix = '/poc-nextjs-router',
    nextConfig.images.loader = 'akamai',
    nextConfig.images.path = '',
    nextConfig.basePath = '/poc-nextjs-router'
}

module.exports = nextConfig
