/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Remove basePath if using custom domain, keep if using username.github.io/repo-name
  // basePath: '/junkyard-website',
  // assetPrefix: '/junkyard-website/',
}

module.exports = nextConfig
