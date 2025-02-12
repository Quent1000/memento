"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  firstName: z.string().min(2, "Le prénom doit contenir au moins 2 caractères"),
  lastName: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Email invalide"),
  phone: z
    .string()
    .min(10, "Le numéro doit contenir au moins 10 chiffres")
    .regex(/^[0-9+\s-]+$/, "Numéro de téléphone invalide"),
  service: z.enum(["basic", "premium", "undecided"], {
    required_error: "Veuillez sélectionner une option",
  }),
  preferredTime: z.enum(["morning", "afternoon", "evening"], {
    required_error: "Veuillez sélectionner une plage horaire",
  }),
  isRetirementHome: z.boolean().default(false),
  message: z
    .string()
    .min(10, "Le message doit contenir au moins 10 caractères"),
});

type FormData = z.infer<typeof formSchema>;

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    // Simuler l'envoi du formulaire
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
    setTimeout(() => setIsSuccess(false), 3000);
  };

  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Réservez votre consultation gratuite
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Prenez rendez-vous pour un appel découverte de 15 minutes et
            discutons de votre projet
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-16 max-w-2xl mx-auto"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Prénom
                </label>
                <input
                  type="text"
                  {...register("firstName")}
                  className={`mt-1 block w-full rounded-md shadow-sm ${
                    errors.firstName
                      ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:border-red-500 focus:ring-red-500"
                  } dark:bg-gray-800 dark:border-gray-600`}
                />
                {errors.firstName && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.firstName.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Nom
                </label>
                <input
                  type="text"
                  {...register("lastName")}
                  className={`mt-1 block w-full rounded-md shadow-sm ${
                    errors.lastName
                      ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:border-red-500 focus:ring-red-500"
                  } dark:bg-gray-800 dark:border-gray-600`}
                />
                {errors.lastName && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.lastName.message}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  {...register("email")}
                  className={`mt-1 block w-full rounded-md shadow-sm ${
                    errors.email
                      ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:border-red-500 focus:ring-red-500"
                  } dark:bg-gray-800 dark:border-gray-600`}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Téléphone
                </label>
                <input
                  type="tel"
                  {...register("phone")}
                  className={`mt-1 block w-full rounded-md shadow-sm ${
                    errors.phone
                      ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:border-red-500 focus:ring-red-500"
                  } dark:bg-gray-800 dark:border-gray-600`}
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.phone.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="service"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Prestation souhaitée
              </label>
              <select
                {...register("service")}
                className={`mt-1 block w-full rounded-md shadow-sm ${
                  errors.service
                    ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:border-red-500 focus:ring-red-500"
                } dark:bg-gray-800 dark:border-gray-600`}
              >
                <option value="">Sélectionnez une option</option>
                <option value="basic">L'Art de la Mémoire (950€)</option>
                <option value="premium">
                  L'Art de la Mémoire Approfondie (1 100€)
                </option>
                <option value="undecided">Je ne sais pas encore</option>
              </select>
              {errors.service && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.service.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="preferredTime"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Moment préféré pour l'appel
              </label>
              <select
                {...register("preferredTime")}
                className={`mt-1 block w-full rounded-md shadow-sm ${
                  errors.preferredTime
                    ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:border-red-500 focus:ring-red-500"
                } dark:bg-gray-800 dark:border-gray-600`}
              >
                <option value="">Sélectionnez une plage horaire</option>
                <option value="morning">Matin (9h-12h)</option>
                <option value="afternoon">Après-midi (14h-17h)</option>
                <option value="evening">Soirée (17h-19h)</option>
              </select>
              {errors.preferredTime && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.preferredTime.message}
                </p>
              )}
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                {...register("isRetirementHome")}
                className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
              />
              <label
                htmlFor="isRetirementHome"
                className="ml-2 block text-sm text-gray-700 dark:text-gray-300"
              >
                Je représente une maison de retraite
              </label>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Message (facultatif)
              </label>
              <textarea
                {...register("message")}
                rows={4}
                className={`mt-1 block w-full rounded-md shadow-sm ${
                  errors.message
                    ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:border-red-500 focus:ring-red-500"
                } dark:bg-gray-800 dark:border-gray-600`}
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.message.message}
                </p>
              )}
            </div>

            <div className="flex justify-end">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
                className={`inline-flex justify-center rounded-md border border-transparent px-6 py-3 text-base font-medium text-white shadow-sm ${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                }`}
                type="submit"
              >
                {isSubmitting ? (
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                ) : (
                  "Réserver mon appel découverte"
                )}
              </motion.button>
            </div>

            {isSuccess && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="rounded-md bg-green-50 p-4"
              >
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-5 w-5 text-green-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-green-800">
                      Demande envoyée avec succès ! Nous vous recontacterons
                      très rapidement.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
