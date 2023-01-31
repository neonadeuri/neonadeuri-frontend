/** @type {import('next').NextConfig} */
const backendUrl = process.env.BACKEND_URL;
const nextConfig = {
  reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
  experimental: {
    appDir: true,
    esmExternals: 'loose',
  },
  rewrites: async () => [
    { source: '/api/:path*', destination: `${backendUrl}/:path*` },
  ],
};

module.exports = nextConfig;
