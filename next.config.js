/** @type {import('next').NextConfig} */
const withPWA = require('@imbios/next-pwa')({
  dest: 'public',
  buildExcludes: [/app-build-manifest\.json$/]
});

const nextConfig = {};

module.exports = withPWA(nextConfig);
