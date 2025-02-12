"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const offers = [
  {
    name: "L'Art de la Mémoire",
    price: "950€",
    description:
      "Une séance unique pour capturer l'essentiel de votre histoire",
    features: [
      "45 minutes d'interview vidéo",
      "Tournage chez vous ou en studio",
      "Captation multi-caméra professionnelle",
      "Son et image optimisés",
      "Stockage sécurisé sur cloud privé",
      "Remise sur clé USB personnalisée",
    ],
    cta: "Réserver une séance",
    href: "/contact",
    popular: false,
  },
  {
    name: "L'Art de la Mémoire Approfondie",
    price: "1 100€",
    description: "Une exploration complète de votre parcours de vie",
    features: [
      "Deux vidéos de 30 minutes",
      "Exploration thématique approfondie",
      "Montage en chapitres personnalisés",
      "Qualité cinématographique",
      "Sauvegarde cloud sécurisée",
      "Clé USB collector nominative",
      "Option de copies supplémentaires",
    ],
    cta: "Choisir cette offre",
    href: "/contact",
    popular: true,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function Pricing() {
  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Nos Offres
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Choisissez Votre Récit et Préservez Vos Souvenirs pour l'Éternité
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12"
        >
          {offers.map((offer) => (
            <motion.div
              key={offer.name}
              variants={item}
              className={`relative flex flex-col rounded-2xl ${
                offer.popular
                  ? "ring-2 ring-red-600 shadow-xl"
                  : "ring-1 ring-gray-200 dark:ring-gray-700"
              } p-8 shadow-sm hover:shadow-lg transition-shadow`}
            >
              {offer.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center rounded-full bg-red-100 px-4 py-1 text-xs font-medium text-red-600 ring-1 ring-inset ring-red-600/10">
                    Recommandé
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold leading-8 text-gray-900 dark:text-white">
                  {offer.name}
                </h3>
                <p className="mt-4 text-base leading-7 text-gray-600 dark:text-gray-300">
                  {offer.description}
                </p>
              </div>

              <div className="mb-6">
                <p className="flex items-baseline justify-center gap-x-2">
                  <span className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {offer.price}
                  </span>
                </p>
              </div>

              <ul role="list" className="mb-6 space-y-4 flex-1">
                {offer.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex gap-x-3 text-gray-600 dark:text-gray-300"
                  >
                    <svg
                      className="h-6 w-5 flex-none text-red-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href={offer.href}
                className={`mt-auto inline-flex w-full items-center justify-center rounded-md px-4 py-3 text-center text-base font-semibold leading-7 ${
                  offer.popular
                    ? "bg-red-600 text-white hover:bg-red-500 focus-visible:outline-red-600"
                    : "bg-red-50 text-red-600 hover:bg-red-100 dark:bg-red-900/10 dark:hover:bg-red-900/20"
                } transition-colors duration-200`}
              >
                {offer.cta}
                <span aria-hidden="true" className="ml-2">
                  →
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-base text-gray-600 dark:text-gray-300">
            Offre spéciale pour les maisons de retraite : réductions à partir de
            plusieurs participants.{" "}
            <Link
              href="/contact"
              className="font-semibold text-red-600 hover:text-red-500"
            >
              Contactez-nous
              <span aria-hidden="true"> →</span>
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
