/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: "/dashboard/items/:path*",
        destination: "http://localhost:3001/dashboard/items/:path*",
      },
    ];
  },
};

export default nextConfig;
