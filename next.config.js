/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
        pathname: '/viniciusferreira7.png',
      },
    ],
  },
}

module.exports = nextConfig
