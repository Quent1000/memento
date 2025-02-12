"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background avec effet parallaxe */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/80 z-10" />
        <Image
          src="/famille-grand-pere.png"
          alt="Grand-père partageant des souvenirs avec sa famille"
          fill
          className="object-cover"
          priority
          quality={100}
        />
      </div>

      {/* Contenu */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl"
          >
            <span className="block">
              <Image
                src="/images/logo.svg"
                alt="MEMENTO"
                width={300}
                height={75}
                className="mx-auto dark:invert"
              />
            </span>
            <span className="block text-3xl sm:text-4xl md:text-5xl mt-3 text-red-400">
              Votre Capsule Temporelle en Vidéo
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-6 max-w-lg mx-auto text-xl text-gray-200 sm:max-w-3xl"
          >
            Capturez un Instant, Transmettez une Vie. Des souvenirs précieux qui
            traverseront le temps.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center gap-4"
          >
            <Link
              href="/contact"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 md:py-4 md:text-lg md:px-10 transition-all duration-200 transform hover:scale-105"
            >
              Réserver une séance
            </Link>
            <Link
              href="/prestations"
              className="mt-3 sm:mt-0 w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-red-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10 transition-all duration-200 transform hover:scale-105"
            >
              Découvrir nos offres
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
          >
            <motion.div className="w-1 h-2 bg-white rounded-full mt-2" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
