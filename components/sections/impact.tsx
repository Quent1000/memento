"use client";

import { Section, SectionHeader } from "@/components/ui/section";
import { VideoPlayer } from "@/components/ui/video-player";
import { motion } from "framer-motion";
import { Heart, Star, Users } from "lucide-react";
import Link from "next/link";

const stats = [
  {
    number: "100%",
    label: "Satisfaction client",
    icon: Star,
    description:
      "Toutes nos familles sont pleinement satisfaites de leur expérience",
  },
  {
    number: "50+",
    label: "Histoires préservées",
    icon: Heart,
    description: "Plus de 50 familles nous ont déjà fait confiance",
  },
  {
    number: "200+",
    label: "Héritiers touchés",
    icon: Users,
    description: "L'impact de nos vidéos s'étend sur plusieurs générations",
  },
];

export function Impact() {
  return (
    <Section variant="alternate">
      <SectionHeader
        title="Notre Impact"
        description="Chaque histoire préservée est un héritage pour les générations futures"
      />

      {/* Vidéo de présentation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="mt-16 max-w-4xl mx-auto"
      >
        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
          <VideoPlayer
            src="/Grand pere video.mp4"
            className="w-full h-full"
            autoPlay
            loop
            muted
            hideControls
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <p className="text-xl font-medium italic">
              &ldquo;Les souvenirs sont le trésor le plus précieux que nous pouvons
              léguer à nos enfants&rdquo;
            </p>
          </div>
        </div>
      </motion.div>

      {/* Statistiques */}
      <div className="mt-24 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative flex flex-col items-center p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-100 transform -translate-y-12 shadow-lg">
              <stat.icon className="h-8 w-8" />
            </div>
            <h3 className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">
              {stat.number}
            </h3>
            <p className="mt-2 text-lg font-semibold text-gray-700 dark:text-gray-200">
              {stat.label}
            </p>
            <p className="mt-2 text-base text-gray-600 dark:text-gray-300 text-center">
              {stat.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-24 text-center"
      >
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
          Prêt à créer votre héritage familial ?
        </h3>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Rejoignez les familles qui ont choisi de préserver leurs histoires
          pour les générations futures
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md shadow-lg text-white bg-red-600 hover:bg-red-700 transform hover:scale-105 transition-all duration-200"
          >
            Commencer mon histoire
          </Link>
          <Link
            href="/temoignages"
            className="inline-flex items-center px-8 py-4 border-2 border-red-600 text-lg font-medium rounded-md text-red-600 bg-transparent hover:bg-red-50 transform hover:scale-105 transition-all duration-200"
          >
            Voir plus de témoignages
          </Link>
        </div>
      </motion.div>
    </Section>
  );
}
