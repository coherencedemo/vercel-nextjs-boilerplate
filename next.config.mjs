/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    reactStrictMode: true,
    swcMinify: true,
    assetPrefix: process.env.NODE_ENV === 'production' 
      ? `https://${process.env.CNC_ENVIRONMENT_DOMAIN}` 
      : '',
    publicRuntimeConfig: {
      applicationName: process.env.CNC_APPLICATION_NAME,
      environmentName: process.env.CNC_ENVIRONMENT_NAME,
      environmentDomain: process.env.CNC_ENVIRONMENT_DOMAIN,
      environmentRegion: process.env.CNC_ENVIRONMENT_REGION,
    },
    serverRuntimeConfig: {
      instanceName: process.env.CNC_INSTANCE_NAME,
    },
  };
  
  export default nextConfig;