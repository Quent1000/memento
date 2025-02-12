"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col items-center"
      >
        <div className="relative">
          <div className="h-16 w-16 rounded-full border-4 border-gray-200 dark:border-gray-700" />
          <div className="absolute top-0 left-0 h-16 w-16 rounded-full border-4 border-red-600 dark:border-red-400 border-t-transparent animate-spin" />
        </div>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Chargement...
        </p>
      </motion.div>
    </div>
  );
}
