/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    experimental: {
      outputFileTracingRoot: undefined,
    },
    assetPrefix: process.env.CNC_ENVIRONMENT_DOMAIN ? `https://${process.env.CNC_ENVIRONMENT_DOMAIN}` : undefined,
  };
  
  export default nextConfig;