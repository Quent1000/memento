import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/navigation/navbar";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MEMENTO - Votre Capsule Temporelle en Vidéo",
  description:
    "Capturez vos souvenirs les plus précieux en vidéo et transmettez votre histoire aux générations futures avec MEMENTO.",
  keywords: [
    "capsule temporelle",
    "vidéo souvenir",
    "héritage familial",
    "mémoire",
    "histoire de vie",
    "témoignage",
  ],
  authors: [{ name: "Gonzague Suter" }],
  creator: "Gonzague Suter",
  publisher: "MEMENTO",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.polymento.fr",
    title: "MEMENTO - Votre Capsule Temporelle en Vidéo",
    description:
      "Capturez vos souvenirs les plus précieux en vidéo et transmettez votre histoire aux générations futures.",
    siteName: "MEMENTO",
  },
  twitter: {
    card: "summary_large_image",
    title: "MEMENTO - Votre Capsule Temporelle en Vidéo",
    description:
      "Capturez vos souvenirs les plus précieux en vidéo et transmettez votre histoire aux générations futures.",
  },
  icons: {
    icon: [
      {
        url: "/images/logo.svg",
        type: "image/svg+xml",
      },
    ],
  },
  robots: "index, follow",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
