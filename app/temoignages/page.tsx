"use client";

import { Contact } from "@/components/sections/contact";
import { Section, SectionHeader } from "@/components/ui/section";
import { VideoPlayer } from "@/components/ui/video-player";
import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    content:
      "Ma grand-mère nous a quittés, mais grâce à MEMENTO, sa voix et son histoire restent présentes. C'est le plus beau cadeau que nous ayons reçu.",
    author: "Julie",
    role: "32 ans",
    type: "image",
    media: "/souvenir grand mere.png",
  },
  {
    content:
      "Un moment émouvant, un film magnifique, que mes petits-enfants regarderont encore dans 30 ans.",
    author: "Bernard",
    role: "74 ans",
    type: "video",
    media: "/Grand pere video.mp4",
  },
  {
    content:
      "Une expérience unique qui nous a permis de capturer les souvenirs de notre père. Un trésor inestimable pour toute la famille.",
    author: "Marie",
    role: "45 ans",
    type: "image",
    media: "/capsulle.png",
  },
];

export default function TemoignagesPage() {
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
            src="/souvenir grand mere.png"
            alt="Grand-mère partageant ses souvenirs"
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
            Témoignages
          </h1>
          <p className="mt-6 max-w-lg mx-auto text-xl text-gray-200 sm:max-w-3xl">
            Découvrez les histoires touchantes de nos clients et leurs
            expériences avec MEMENTO
          </p>
        </motion.div>
      </motion.section>

      {/* Testimonials Grid */}
      <Section>
        <SectionHeader
          title="Ils nous font confiance"
          description="Des moments précieux capturés pour l'éternité"
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col bg-white dark:bg-gray-800 rounded-2xl shadow-sm overflow-hidden"
            >
              <div className="relative aspect-video">
                {testimonial.type === "video" ? (
                  <VideoPlayer
                    src={testimonial.media}
                    className="w-full h-full"
                    controls
                    muted
                  />
                ) : (
                  <Image
                    src={testimonial.media}
                    alt={`Photo de ${testimonial.author}`}
                    fill
                    className="object-cover"
                  />
                )}
              </div>
              <div className="flex-1 p-6">
                <blockquote className="mt-3 text-gray-700 dark:text-gray-300">
                  "{testimonial.content}"
                </blockquote>
                <div className="mt-6 flex items-center gap-x-4">
                  <div className="text-sm">
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.author}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Contact Section */}
      <Contact />
    </>
  );
}
