/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        // Cache static assets (JS, CSS, images) for 1 year
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Cache public static files (e.g., favicon, robots.txt) for 1 year
        source: '/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Disable caching for HTML files and API routes
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store, max-age=0',
          },
        ],
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.googleusercontent.com",
        port: "",
        pathname: "**",
      },
      {
        protocol: 'https',
        hostname: 'sharplogicians.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'sharplogicians.com',
        port: '',
        pathname: '/api/**',
      },
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        port: '8000',
        pathname: '/**',
      },
    ],
  },
  experimental: {
    workerThreads: true,
    cpus: 4,
  },
};

export default nextConfig;
  
