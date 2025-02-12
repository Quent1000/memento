"use client";

import { Section, SectionHeader } from "@/components/ui/section";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";

const offers = [
  {
    name: "Capsule Essentielle",
    price: "950€",
    description: "L'essentiel pour préserver vos souvenirs",
    features: [
      "Interview professionnelle de 45 minutes",
      "Montage soigné avec transitions",
      "Musique d'ambiance personnalisée",
      "Clé USB personnalisée",
      "Accès cloud sécurisé à vie",
      "2 copies numériques HD",
    ],
  },
  {
    name: "Capsule Premium",
    price: "1450€",
    description: "L'expérience complète pour un héritage parfait",
    features: [
      "Tout ce qui est inclus dans l'Essentielle",
      "Séquences bonus avec la famille",
      "Photos d'archives intégrées",
      "Chapitrage thématique",
      "5 copies numériques HD",
      "Version courte pour les réseaux",
    ],
    popular: true,
  },
];

export function Offers() {
  return (
    <Section>
      <SectionHeader
        title="Nos Offres"
        description="Choisissez la formule qui vous correspond le mieux"
      />

      <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
        {offers.map((offer, index) => (
          <motion.div
            key={offer.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`relative flex flex-col rounded-2xl ${
              offer.popular
                ? "border-2 border-red-500 shadow-xl"
                : "border border-gray-200 dark:border-gray-700"
            } bg-white dark:bg-gray-800 p-8`}
          >
            {offer.popular && (
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-4 py-1 bg-red-500 text-white text-sm font-medium rounded-full">
                Recommandée
              </div>
            )}

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              {offer.name}
            </h3>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              {offer.description}
            </p>
            <p className="mt-8 flex items-baseline">
              <span className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                {offer.price}
              </span>
            </p>

            <ul className="mt-8 space-y-4">
              {offer.features.map((feature) => (
                <li key={feature} className="flex items-start">
                  <div className="flex-shrink-0">
                    <Check className="h-6 w-6 text-red-500" />
                  </div>
                  <p className="ml-3 text-base text-gray-600 dark:text-gray-300">
                    {feature}
                  </p>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Link
                href="/contact"
                className={`w-full flex items-center justify-center px-6 py-3 border text-base font-medium rounded-md transition-all duration-200 ${
                  offer.popular
                    ? "border-transparent text-white bg-red-600 hover:bg-red-700"
                    : "border-red-600 text-red-600 hover:bg-red-50"
                }`}
              >
                Choisir cette offre
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Note spéciale pour les maisons de retraite */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-12 text-center"
      >
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Vous êtes une maison de retraite ?{" "}
          <Link
            href="/contact"
            className="text-red-600 hover:text-red-700 font-medium"
          >
            Contactez-nous pour des tarifs préférentiels
          </Link>
        </p>
      </motion.div>
    </Section>
  );
}
