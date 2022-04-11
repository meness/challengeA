/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV !== 'development',
  },
  // pageExtensions: [
  //   'page.tsx',
  // ],
};

module.exports = nextConfig;
