/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@truthmarket/shared-config", "@truthmarket/shared-types", "@truthmarket/shared-utils"],
};

module.exports = nextConfig;
