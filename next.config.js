/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "ddragon.leagueoflegends.com",
        pathname: "/cdn/**/img/profileicon/**",
      },
    ],
  },
};

module.exports = nextConfig;
