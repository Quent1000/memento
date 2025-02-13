"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <div className="flex justify-center mb-6">
          <div className="rounded-full bg-red-100 p-4 dark:bg-red-900/20">
            <AlertCircle className="h-12 w-12 text-red-600 dark:text-red-400" />
          </div>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          Une erreur est survenue
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Nous nous excusons pour ce désagrément. Notre équipe a été notifiée.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button onClick={reset}>Réessayer</Button>
          <Button variant="outline" onClick={() => window.location.assign("/")}>
            Retour à l&apos;accueil
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
