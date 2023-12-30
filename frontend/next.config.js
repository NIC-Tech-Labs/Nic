/** @type {import('next').NextConfig} */

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
    dirs: ['./src']
  }
}

module.exports = nextConfig
