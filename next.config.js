/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}
module.exports = nextConfig

module.exports = {
  images: {
    disableStaticImages: true,
    domains: ['arweave.net', 'metamural.io', 'metmuralnfts.s3.us-east-2.amazonaws.com', 'lh3.googleusercontent.com']
  },
}
