/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
        hostname: "user-images.githubusercontent.com",
      },
    ],
  },
};

module.exports = nextConfig;
