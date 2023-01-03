/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "https://static.licdn.com",
      "static.licdn.com",
      "https://github.githubassets.com",
      "github.githubassets.com",
      "ssl.gstatic.com"
    ],
  },
};

module.exports = nextConfig;
