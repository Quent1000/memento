import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/navigation/navbar";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap", // Optimisation pour le chargement des polices
});

const siteConfig = {
  name: "MEMENTO",
  description:
    "Capturez vos souvenirs les plus précieux en vidéo et transmettez votre histoire aux générations futures.",
  url: "https://www.polymento.fr",
  ogImage: "/images/og-image.jpg", // À créer : une image optimisée pour les réseaux sociaux
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} - Votre Capsule Temporelle en Vidéo`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "capsule temporelle",
    "vidéo souvenir",
    "héritage familial",
    "mémoire",
    "histoire de vie",
    "témoignage",
    "transmission",
    "souvenirs",
    "interview",
    "biographie filmée",
    "vidéaste lausanne",
    "mémoire familiale",
  ],
  authors: [
    {
      name: "Gonzague Suter",
      url: "https://www.linkedin.com/in/gonzague-suter",
    },
  ],
  creator: "Gonzague Suter",
  publisher: siteConfig.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteConfig.url,
    title: {
      default: `${siteConfig.name} - Votre Capsule Temporelle en Vidéo`,
      template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/logo.svg",
        width: 300,
        height: 60,
        alt: "MEMENTO Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: {
      default: `${siteConfig.name} - Votre Capsule Temporelle en Vidéo`,
      template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    images: ["/images/logo.svg"],
    creator: "@memento",
    site: "@memento",
  },
  icons: {
    icon: "/images/logo.svg",
    shortcut: "/images/logo.svg",
    apple: "/images/logo.svg",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/images/logo.svg",
    },
  },
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteConfig.url,
  },
  category: "technology",
  verification: {
    google: "à_remplir", // Ajouter l'ID de vérification Google Search Console
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5, // Permettre le zoom pour l'accessibilité
  userScalable: true, // Important pour l'accessibilité
  themeColor: "#ef4444",
  colorScheme: "light dark",
};

// Configuration pour désactiver le cache statique et forcer le rendu dynamique
export const dynamic = "force-dynamic";
export const revalidate = 0;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/images/logo.svg" type="image/svg+xml" />
        <meta name="theme-color" content="#ef4444" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="msapplication-TileColor" content="#ef4444" />
        <link rel="mask-icon" href="/images/logo.svg" color="#ef4444" />
      </head>
      <body
        className={`${inter.className} antialiased min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
