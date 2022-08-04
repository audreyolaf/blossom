/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  "frame-ancestors": "https://google.com",
  'X-Frame-Options': 'SAMEORIGIN',
}

const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self';
  child-src https://google.com;
`

module.exports = nextConfig, ContentSecurityPolicy
