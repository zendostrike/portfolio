/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    // domains: ["blogger.googleusercontent.com", "zendostrike.blogspot.com/"],
  },
};

module.exports = nextConfig;
