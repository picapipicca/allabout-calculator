/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // webpack: (config, { isServer }) => {
  //   if (!isServer) {
  //     config.resolve.fallback = {
  //       fs: false,
  //       tls:false,
  //       net:false,
  //     };
  //   }

  //   return config;
  // },
};

module.exports = nextConfig;
