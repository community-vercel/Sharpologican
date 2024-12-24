/** @type {import('next').NextConfig} */
const nextConfig = {
 
  // basePath: '/new', 
    images: {
      // domains: [ "community-hazel.vercel.app","sharplogicians.com","sharplogicians.com/new","sharplogicians.comundefined","localhost:3000/new","localhost:3002","127.0.0.1", "127.0.0.1:8000","picsum.photos"],
      remotePatterns: [
        {
          protocol: "https",
          hostname: "*.googleusercontent.com",
          port: "",
          pathname: "**",
        },
 
            {
              protocol: 'https', // Specify protocol (e.g., 'http' or 'https')
              hostname: 'sharplogicians.com', // Specify domain name
              port: '', // Leave empty for default port
              pathname: '/**', // Allow all paths under this domain
            },
            
            {
              protocol: 'https', // Specify protocol (e.g., 'http' or 'https')
              hostname: 'sharplogicians.com/new', // Specify domain name
              port: '', // Leave empty for default port
              pathname: '/**', // Allow all paths under this domain
            },
            
            {
              protocol: 'https', // Specify protocol (e.g., 'http' or 'https')
              hostname: 'sharplogicians.com/api', // Specify domain name
              port: '', // Leave empty for default port
              pathname: '/**', // Allow all paths under this domain
            },
            
            {
              protocol: 'https', // Specify protocol (e.g., 'http' or 'https')
              hostname: 'sharplogicians.com"', // Specify domain name
              port: '', // Leave empty for default port
              pathname: '/**', // Allow all paths under this domain
            },
      ],
      
    },  
    async headers() {
      return [
        {
          source: "/:path*", // Apply to all paths
          headers: [
            
            {
              key: "Content-Security-Policy",
              value: `default-src 'self';
                      style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
                      script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com;
                      img-src 'self' https://www.google-analytics.com;`,
            },
          ],
        },
      ];
    },
  
    experimental: {
      workerThreads: false,
      cpus: 1,
    },
    
  };
  
  export default nextConfig;
  
