"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FileQuestion } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <div className="flex justify-center mb-6">
          <div className="rounded-full bg-red-100 p-4 dark:bg-red-900/20">
            <FileQuestion className="h-12 w-12 text-red-600 dark:text-red-400" />
          </div>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          Page introuvable
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Désolé, la page que vous recherchez n&apos;existe pas ou a été déplacée.
        </p>
        <div className="mt-8">
          <Button onClick={() => window.location.assign("/")}>
            Retour à l&apos;accueil
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
