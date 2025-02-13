"use client";

import { Contact } from "@/components/sections/contact";
import { Section, SectionHeader } from "@/components/ui/section";
import { VideoPlayer } from "@/components/ui/video-player";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const timeline = [
  {
    year: "2023",
    title: "Naissance de MEMENTO",
    description:
      "Création de l'entreprise avec une vision claire : préserver les histoires de vie.",
  },
  {
    year: "2024",
    title: "Développement",
    description:
      "Expansion de nos services et partenariats avec des maisons de retraite.",
  },
];

const stats = [
  { value: "50+", label: "Histoires capturées" },
  { value: "100%", label: "Clients satisfaits" },
  { value: "4.9/5", label: "Note moyenne" },
  { value: "3", label: "Régions couvertes" },
];

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
            Une passion pour la préservation des souvenirs et la transmission
            intergénérationnelle
          </p>
        </motion.div>
      </motion.section>

      {/* Notre Mission avec Vidéo */}
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
              Chez MEMENTO, nous croyons que chaque histoire mérite d&apos;être
              préservée et transmise aux générations futures. Notre mission est
              de capturer ces moments précieux et de les transformer en
              héritages durables.
            </p>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Nous utilisons la puissance de la vidéo pour créer des capsules
              temporelles uniques, permettant à chacun de partager son histoire,
              ses expériences et sa sagesse avec ses proches.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 transition-colors"
              >
                Commencez votre histoire
                <span aria-hidden="true" className="ml-2">
                  →
                </span>
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative aspect-video rounded-2xl overflow-hidden shadow-xl"
          >
            <VideoPlayer
              src="/Grand pere video.mp4"
              className="w-full h-full"
              controls
              muted
            />
          </motion.div>
        </div>
      </Section>

      {/* Statistiques */}
      <Section variant="alternate">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-red-600 dark:text-red-400">
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Notre Histoire Timeline */}
      <Section>
        <SectionHeader
          title="Notre Parcours"
          description="L'évolution de MEMENTO depuis sa création"
        />
        <div className="mt-16 relative">
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-200 dark:bg-gray-800" />
          <div className="space-y-12">
            {timeline.map((event, index) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                <div className="flex items-center">
                  <div className="flex-1 text-right pr-8">
                    <div className="text-xl font-bold text-red-600 dark:text-red-400">
                      {event.year}
                    </div>
                  </div>
                  <div className="w-4 h-4 rounded-full bg-red-600 dark:bg-red-400 relative z-10">
                    <div className="w-4 h-4 rounded-full bg-red-600 dark:bg-red-400 animate-ping absolute" />
                  </div>
                  <div className="flex-1 pl-8">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {event.title}
                    </h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">
                      {event.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
            className="max-w-3xl mx-auto"
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
              <div className="relative h-64 sm:h-80">
                <Image
                  src="/gonzague suter.jpeg"
                  alt="Gonzague Suter"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Gonzague Suter
                </h3>
                <p className="mt-2 text-lg text-red-600 dark:text-red-400">
                  Fondateur & Réalisateur
                </p>
                <p className="mt-4 text-gray-600 dark:text-gray-300">
                  Passionné par le pouvoir des histoires et leur capacité à
                  connecter les générations, j&apos;ai créé MEMENTO pour offrir
                  un moyen unique de préserver les souvenirs les plus précieux
                  de nos aînés. Avec une formation en audiovisuel et une
                  expérience dans la réalisation de documentaires, je mets mes
                  compétences au service de la transmission
                  intergénérationnelle.
                </p>
                <div className="mt-6 flex justify-center space-x-4">
                  <a
                    href="https://linkedin.com/in/gonzague-suter"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-red-600 transition-colors"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
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
                "Nous capturons les histoires avec sincérité et respect, préservant l'essence unique de chaque témoignage. Chaque récit est une pièce unique qui mérite d'être préservée dans son authenticité la plus pure.",
              icon: "🎯",
            },
            {
              title: "Excellence",
              description:
                "Nous nous engageons à fournir une qualité exceptionnelle dans chaque aspect de notre service. De l'équipement professionnel au montage soigné, nous ne laissons rien au hasard.",
              icon: "⭐",
            },
            {
              title: "Empathie",
              description:
                "Nous créons un environnement bienveillant où chacun se sent à l'aise pour partager son histoire. Notre approche humaine et chaleureuse permet de capturer des moments d'une sincérité touchante.",
              icon: "💝",
            },
          ].map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-8 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all"
            >
              <div className="text-5xl mb-6">{value.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {value.title}
              </h3>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
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
