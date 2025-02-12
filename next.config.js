/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimisation du cache et de la navigation
  experimental: {
    scrollRestoration: true,
  },
  // Configuration du cache pour les pages
  staticPageGenerationTimeout: 1000,
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  // Optimisation des images
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
};

module.exports = nextConfig;
