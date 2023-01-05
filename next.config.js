/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "https://static.licdn.com",
      "static.licdn.com",
      "https://github.githubassets.com",
      "github.githubassets.com",
      "ssl.gstatic.com",
      "dev-to-uploads.s3.amazonaws.com",
    ],
  },
};

module.exports = nextConfig;
