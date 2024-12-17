/** @type {import('next').NextConfig} */
const nextConfig = {
 
  basePath: '/new',

 
    images: {
      domains: [ "community-hazel.vercel.app","localhost:3000/new","localhost:3002","127.0.0.1", "127.0.0.1:8000","picsum.photos"],
      remotePatterns: [
        {
          protocol: "https",
          hostname: "*.googleusercontent.com",
          port: "",
          pathname: "**",
        },
      ],
    },
    experimental: {
      workerThreads: false,
      cpus: 1,
    },
    
  };
  
  export default nextConfig;
  