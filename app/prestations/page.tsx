"use client";

import { Contact } from "@/components/sections/contact";
import { VideoPlayer } from "@/components/ui/video-player";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function PrestationsPage() {
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
            src="/souvenir grand pere.png"
            alt="Grand-père partageant des souvenirs"
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
            Nos Prestations
          </h1>
          <p className="mt-6 max-w-lg mx-auto text-xl text-gray-200 sm:max-w-3xl">
            Des solutions sur mesure pour capturer et transmettre vos souvenirs
            les plus précieux
          </p>
        </motion.div>
      </motion.section>

      {/* Comment ça marche */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={stagger}
        className="py-24 bg-white dark:bg-gray-900"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeIn} className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Comment ça marche ?
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Un processus simple en quatre étapes pour créer votre capsule
              temporelle
            </p>
          </motion.div>

          <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "1. Premier Contact",
                description:
                  "Nous discutons de votre projet et de vos attentes lors d'un appel découverte gratuit",
                icon: "📞",
              },
              {
                title: "2. Préparation",
                description:
                  "Nous organisons la séance selon vos préférences et planifions les thèmes à aborder",
                icon: "📝",
              },
              {
                title: "3. Tournage",
                description:
                  "La séance se déroule dans un cadre confortable, à votre rythme",
                icon: "🎥",
              },
              {
                title: "4. Livraison",
                description:
                  "Vous recevez votre capsule temporelle sur une clé USB personnalisée",
                icon: "📦",
              },
            ].map((step) => (
              <motion.div
                key={step.title}
                variants={fadeIn}
                className="relative p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Exemples de Réalisations */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={stagger}
        className="py-24 bg-gray-50 dark:bg-gray-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeIn} className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Exemples de Réalisations
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Découvrez quelques extraits de nos capsules temporelles
            </p>
          </motion.div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                type: "video",
                title: "Interview Grand-Père",
                description: "Un grand-père partage son histoire de vie",
                src: "/Grand pere video.mp4",
              },
              {
                type: "image",
                title: "Souvenirs de Famille",
                image: "/souvenir grand mere.png",
                description: "Une grand-mère partage ses souvenirs d'enfance",
              },
              {
                type: "image",
                title: "Capsule Temporelle",
                image: "/capsulle.png",
                description: "Un message pour les générations futures",
              },
            ].map((example) => (
              <motion.div
                key={example.title}
                variants={fadeIn}
                whileHover={{ scale: 1.02 }}
                className="overflow-hidden rounded-lg bg-white dark:bg-gray-900 shadow-sm hover:shadow-md transition-all"
              >
                <div className="relative aspect-[16/9]">
                  {example.type === "video" ? (
                    <VideoPlayer
                      src={example.src!}
                      className="w-full h-full"
                      controls
                      muted
                    />
                  ) : (
                    <Image
                      src={example.image || ""}
                      alt={example.title}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    />
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {example.title}
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    {example.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* FAQ */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={stagger}
        className="py-24 bg-white dark:bg-gray-900"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeIn} className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Questions Fréquentes
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Tout ce que vous devez savoir sur nos prestations
            </p>
          </motion.div>

          <div className="mt-16 max-w-3xl mx-auto">
            {[
              {
                question: "Combien de temps dure une séance ?",
                answer:
                  "Une séance standard dure environ 1h30, dont 45 minutes d'interview. Ce temps permet de s'installer confortablement et de prendre le temps nécessaire pour partager vos souvenirs.",
              },
              {
                question: "Où se déroule le tournage ?",
                answer:
                  "Le tournage peut se dérouler à votre domicile, en maison de retraite ou dans notre studio. Nous nous adaptons à vos préférences pour vous garantir le meilleur confort.",
              },
              {
                question: "Comment préparer la séance ?",
                answer:
                  "Nous vous guidons dans la préparation avec un questionnaire et un appel préparatoire. Vous pouvez aussi rassembler des photos ou objets que vous souhaitez montrer.",
              },
              {
                question: "Quel est le délai de livraison ?",
                answer:
                  "Le montage de votre capsule temporelle est réalisé dans les 3 semaines suivant le tournage. Vous recevez ensuite votre clé USB personnalisée par courrier recommandé.",
              },
            ].map((faq) => (
              <motion.div
                key={faq.question}
                variants={fadeIn}
                className="mt-10"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {faq.question}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Contact />
      </motion.div>
    </>
  );
}
