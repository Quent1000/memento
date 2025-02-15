"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock, Heart, Shield } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const highlights = [
  {
    icon: Clock,
    text: "Séance de 45 minutes seulement",
  },
  {
    icon: Shield,
    text: "Conservation sécurisée à vie",
  },
  {
    icon: Heart,
    text: "100% des familles satisfaites",
  },
];

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
            {/* <span className="block [&_.logo-me]:fill-white">
              <Image
                src="/images/logo-white.svg"
                alt="MEMENTO"
                width={300}
                height={75}
                className="mx-auto"
              />
            </span> */}
            <span className="block text-3xl sm:text-4xl md:text-5xl mt-3 text-red-400">
              Transformez vos Souvenirs en Héritage
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-6 max-w-lg mx-auto text-xl text-gray-200 sm:max-w-3xl"
          >
            Capturez les histoires de vie de vos proches en vidéo et créez un
            héritage émotionnel unique qui traversera les générations.
          </motion.p>

          {/* Points clés */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-8 flex flex-wrap justify-center gap-4 text-white"
          >
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 bg-black/20 rounded-full px-4 py-2"
              >
                <highlight.icon className="h-5 w-5" />
                <span className="text-sm">{highlight.text}</span>
              </div>
            ))}
          </motion.div>

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
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/prestations"
              className="mt-3 sm:mt-0 w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-red-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10 transition-all duration-200 transform hover:scale-105"
            >
              Découvrir nos offres
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>

          {/* Prix à partir de */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mt-8 text-center"
          >
            <p className="text-white text-sm">
              À partir de{" "}
              <span className="font-bold text-red-400 text-lg">950€</span>
              <span className="block text-xs mt-1">
                Réduction pour les maisons de retraite
              </span>
            </p>
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
