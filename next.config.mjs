/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sotip.cybersecdigital.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};
export default nextConfig;
