/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimisations de performance
  poweredByHeader: false,
  compress: true,
  reactStrictMode: true,

  // Configuration du cache et de la navigation
  experimental: {
    // Amélioration de la restauration du défilement
    scrollRestoration: true,
    // Optimisation des packages
    optimizePackageImports: [
      "@vercel/analytics",
      "framer-motion",
      "lucide-react",
    ],
    // Optimisation des actions serveur
    serverActions: {
      bodySizeLimit: "2mb",
    },
  },

  // Configuration du cache des pages
  staticPageGenerationTimeout: 120,

  // Optimisation des images
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Optimisation de la compilation
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  // Configuration des en-têtes HTTP pour le cache
  async headers() {
    return [
      {
        source: "/:all*(svg|jpg|png)",
        locale: false,
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, must-revalidate",
          },
        ],
      },
      {
        source: "/fonts/:all*",
        locale: false,
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, must-revalidate",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
