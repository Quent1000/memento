"use client";

import { Contact } from "@/components/sections/contact";
import { Section, SectionHeader } from "@/components/ui/section";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AProposPage() {
  return (
    <>
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative py-32 px-4 sm:px-6 lg:px-8 min-h-[60vh] flex items-center"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/80 z-10" />
          <Image
            src="/capsulle.png"
            alt="MEMENTO - Notre histoire"
            fill
            priority
            className="object-cover"
            quality={90}
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative z-20 max-w-7xl mx-auto text-center"
        >
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            Notre Histoire
          </h1>
          <p className="mt-6 max-w-lg mx-auto text-xl text-gray-200 sm:max-w-3xl">
            Découvrez l'histoire de MEMENTO et notre mission de préservation des
            souvenirs
          </p>
        </motion.div>
      </motion.section>

      {/* Notre Mission */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Notre Mission
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Chez MEMENTO, nous croyons que chaque histoire mérite d'être
              préservée et transmise aux générations futures. Notre mission est
              de capturer ces moments précieux et de les transformer en
              héritages durables.
            </p>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Nous utilisons la puissance de la vidéo pour créer des capsules
              temporelles uniques, permettant à chacun de partager son histoire,
              ses expériences et sa sagesse avec ses proches.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative aspect-square rounded-2xl overflow-hidden"
          >
            <Image
              src="/souvenir grand pere.png"
              alt="Notre mission"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </Section>

      {/* Notre Équipe */}
      <Section variant="alternate">
        <SectionHeader
          title="Notre Équipe"
          description="Des professionnels passionnés par la préservation des souvenirs"
        />

        <div className="mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden">
              <Image
                src="/gonzague.jpg"
                alt="Gonzague Suter"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="mt-6 text-2xl font-bold text-gray-900 dark:text-white">
              Gonzague Suter
            </h3>
            <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
              Fondateur & Réalisateur
            </p>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Passionné par le pouvoir des histoires et leur capacité à
              connecter les générations, j'ai créé MEMENTO pour offrir un moyen
              unique de préserver les souvenirs les plus précieux de nos aînés.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Nos Valeurs */}
      <Section>
        <SectionHeader
          title="Nos Valeurs"
          description="Les principes qui guident notre travail au quotidien"
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Authenticité",
              description:
                "Nous capturons les histoires avec sincérité et respect, préservant l'essence unique de chaque témoignage.",
              icon: "🎯",
            },
            {
              title: "Excellence",
              description:
                "Nous nous engageons à fournir une qualité exceptionnelle dans chaque aspect de notre service.",
              icon: "⭐",
            },
            {
              title: "Empathie",
              description:
                "Nous créons un environnement bienveillant où chacun se sent à l'aise pour partager son histoire.",
              icon: "💝",
            },
          ].map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm"
            >
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {value.title}
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Contact Section */}
      <Contact />
    </>
  );
}
