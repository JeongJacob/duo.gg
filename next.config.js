/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ddragon.leagueoflegends.com",
        pathname: "/cdn/13.3.1/img/profileicon/**",
      },
    ],
  },
};

module.exports = nextConfig;
