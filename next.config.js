/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: { ssr: true },
  },
  images: {
    domains: ["avatars.githubusercontent.com", "github.com", 'devtools.com.br'],
  },
};

module.exports = nextConfig;
