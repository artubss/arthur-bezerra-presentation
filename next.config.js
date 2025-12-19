/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [],
    unoptimized: false,
  },
  reactStrictMode: true,
  // Removido output: 'standalone' para evitar problemas no build
  // O Dockerfile agora funciona com build padrão
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
