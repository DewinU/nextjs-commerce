/** @type {import('next').NextConfig} */
module.exports = {
  experimental: {
    reactCompiler: true
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.shopify.com',
        pathname: '/s/files/**'
      }
    ]
  },

  logging: {
    fetches: {
      fullUrl: true
    }
  }
};
