/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["octet-v2.saturnwp.link"]
 }
}

module.exports = nextConfig
