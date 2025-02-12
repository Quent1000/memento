import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Nos Prestations | MEMENTO - Votre Capsule Temporelle en Vidéo",
  description:
    "Découvrez nos offres de capsules temporelles vidéo pour préserver vos souvenirs les plus précieux. Des solutions adaptées à vos besoins.",
  openGraph: {
    title: "Nos Prestations | MEMENTO",
    description:
      "Découvrez nos offres de capsules temporelles vidéo pour préserver vos souvenirs les plus précieux.",
  },
};

export default function PrestationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
