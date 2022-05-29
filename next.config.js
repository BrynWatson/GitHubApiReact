/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // github api
    domains: ["github.com", "avatars.githubusercontent.com"],
  },
};

module.exports = nextConfig;
