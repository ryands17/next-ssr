const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  experimental: { esmExternals: true },
  reactStrictMode: true,
}

module.exports = withBundleAnalyzer(nextConfig)
