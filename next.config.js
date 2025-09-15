/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  // images: {
  //   remotePatterns: [
  //     // { protocol: 'https', hostname: 'images.unsplash.com' },
  //   ],
  // },

  // async redirects() {
  //   return [{ source: '/home', destination: '/', permanent: true }];
  // },

  // async headers() {
  //   return [{
  //     source: '/(.*)',
  //     headers: [{ key: 'X-Frame-Options', value: 'SAMEORIGIN' }],
  //   }];
  // },

  // output: 'standalone', // only if you self-host (not required on Vercel)
};

module.exports = nextConfig;
