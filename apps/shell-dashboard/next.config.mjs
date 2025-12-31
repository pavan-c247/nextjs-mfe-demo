/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      // Pages
      {
        source: "/dashboard/items",
        destination: "http://localhost:3001/dashboard/items",
      },
      {
        source: "/dashboard/items/:path*",
        destination: "http://localhost:3001/dashboard/items/:path*",
      },

      // CRITICAL: Next.js chunks & assets
      {
        source: "/_next/:path*",
        destination: "http://localhost:3001/_next/:path*",
      },
    ];
  },
};

export default nextConfig;
