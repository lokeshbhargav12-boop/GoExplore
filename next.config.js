/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // Remove output: 'export' to enable proper client-side routing
}

module.exports = nextConfig
