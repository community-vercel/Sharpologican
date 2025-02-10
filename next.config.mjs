/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return getHeaders();
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "*.googleusercontent.com", pathname: "/**" },
      { protocol: "https", hostname: "sharplogicians.com", pathname: "/**" },
      { protocol: "https", hostname: "sharplogicians.com", pathname: "/api/**" },
      { protocol: "http", hostname: "127.0.0.1", port: "8000", pathname: "/**" },
    ],
  },
  experimental: {
    workerThreads: true,
    cpus: 4,
  },
};

function getHeaders() {
  return [
    {
      source: "/_next/static/(.*)",
      headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
    },
    {
      source: "/static/(.*)",
      headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
    },
    {
      source: "/:path*",
      headers: [{ key: "Cache-Control", value: "no-store, max-age=0" }],
    },
  ];
}

export default nextConfig;