"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  Heart,
  Info,
  LucideIcon,
  Mail,
  MapPin,
  Phone,
  User,
} from "lucide-react";
import { useEffect, useState } from "react";
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
  preferredDate: z.string().min(1, "Veuillez sélectionner une date"),
  preferredTime: z.enum(["morning", "afternoon", "evening"], {
    required_error: "Veuillez sélectionner une plage horaire",
  }),
  isRetirementHome: z.boolean().default(false),
  numberOfParticipants: z.string().optional(),
  message: z
    .string()
    .min(10, "Le message doit contenir au moins 10 caractères")
    .max(1000, "Le message ne doit pas dépasser 1000 caractères"),
  howDidYouHearAboutUs: z.enum(
    ["search", "social", "recommendation", "other"],
    {
      required_error: "Veuillez nous indiquer comment vous nous avez connu",
    }
  ),
});

type FormData = z.infer<typeof formSchema>;

const InputWrapper = ({
  children,
  label,
  error,
  icon: Icon,
  required = false,
}: {
  children: React.ReactNode;
  label: string;
  error?: string;
  icon?: LucideIcon;
  required?: boolean;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="relative"
  >
    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <div className="relative group">
      {Icon && (
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Icon className="h-5 w-5 text-gray-400 group-focus-within:text-red-500 transition-colors" />
        </div>
      )}
      {children}
    </div>
    {error && (
      <motion.p
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        className="mt-1 text-sm text-red-600 flex items-center gap-1"
      >
        <Info className="h-4 w-4" />
        {error}
      </motion.p>
    )}
  </motion.div>
);

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showRetirementHomeFields, setShowRetirementHomeFields] =
    useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  useEffect(() => {
    const isRetirementHome = watch("isRetirementHome");
    setShowRetirementHomeFields(isRetirementHome);
  }, [watch]);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    // Simuler l'envoi du formulaire
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="inline-flex items-center justify-center p-2 bg-red-100 dark:bg-red-900/30 rounded-full text-red-600 dark:text-red-400 mb-4">
            <Heart className="h-6 w-6" />
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Commencez votre histoire
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Prenez rendez-vous pour un appel découverte gratuit et sans
            engagement. Nous prendrons le temps d&apos;échanger sur votre projet
            et de répondre à toutes vos questions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-16 max-w-3xl mx-auto"
        >
          <div className="bg-white dark:bg-gray-900/50 rounded-2xl shadow-xl p-8 md:p-12">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                <InputWrapper
                  label="Prénom"
                  error={errors.firstName?.message}
                  icon={User}
                  required
                >
                  <input
                    type="text"
                    {...register("firstName")}
                    className="pl-10 block w-full rounded-lg border-gray-300 bg-white shadow-sm focus:border-red-500 focus:ring-red-500 dark:bg-gray-900/50 dark:border-gray-600 dark:text-white dark:placeholder-gray-400 transition-colors"
                    placeholder="Jean"
                  />
                </InputWrapper>

                <InputWrapper
                  label="Nom"
                  error={errors.lastName?.message}
                  icon={User}
                  required
                >
                  <input
                    type="text"
                    {...register("lastName")}
                    className="pl-10 block w-full rounded-lg border-gray-300 bg-white shadow-sm focus:border-red-500 focus:ring-red-500 dark:bg-gray-900/50 dark:border-gray-600 dark:text-white dark:placeholder-gray-400 transition-colors"
                    placeholder="Dupont"
                  />
                </InputWrapper>
              </div>

              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                <InputWrapper
                  label="Email"
                  error={errors.email?.message}
                  icon={Mail}
                  required
                >
                  <input
                    type="email"
                    {...register("email")}
                    className="pl-10 block w-full rounded-lg border-gray-300 bg-white shadow-sm focus:border-red-500 focus:ring-red-500 dark:bg-gray-900/50 dark:border-gray-600 dark:text-white dark:placeholder-gray-400 transition-colors"
                    placeholder="jean.dupont@example.com"
                  />
                </InputWrapper>

                <InputWrapper
                  label="Téléphone"
                  error={errors.phone?.message}
                  icon={Phone}
                  required
                >
                  <input
                    type="tel"
                    {...register("phone")}
                    className="pl-10 block w-full rounded-lg border-gray-300 bg-white shadow-sm focus:border-red-500 focus:ring-red-500 dark:bg-gray-900/50 dark:border-gray-600 dark:text-white dark:placeholder-gray-400 transition-colors"
                    placeholder="06 12 34 56 78"
                  />
                </InputWrapper>
              </div>

              <InputWrapper
                label="Prestation souhaitée"
                error={errors.service?.message}
                icon={Heart}
                required
              >
                <select
                  {...register("service")}
                  className="pl-10 block w-full rounded-lg border-gray-300 bg-white shadow-sm focus:border-red-500 focus:ring-red-500 dark:bg-gray-900/50 dark:border-gray-600 dark:text-white dark:placeholder-gray-400 transition-colors"
                >
                  <option value="">Sélectionnez une option</option>
                  <option value="basic">Capsule Essentielle (950€)</option>
                  <option value="premium">Capsule Premium (1450€)</option>
                  <option value="undecided">Je ne sais pas encore</option>
                </select>
              </InputWrapper>

              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                <InputWrapper
                  label="Date souhaitée"
                  error={errors.preferredDate?.message}
                  icon={Calendar}
                  required
                >
                  <input
                    type="date"
                    {...register("preferredDate")}
                    className="pl-10 block w-full rounded-lg border-gray-300 bg-white shadow-sm focus:border-red-500 focus:ring-red-500 dark:bg-gray-900/50 dark:border-gray-600 dark:text-white dark:placeholder-gray-400 transition-colors"
                  />
                </InputWrapper>

                <InputWrapper
                  label="Moment préféré"
                  error={errors.preferredTime?.message}
                  icon={Clock}
                  required
                >
                  <select
                    {...register("preferredTime")}
                    className="pl-10 block w-full rounded-lg border-gray-300 bg-white shadow-sm focus:border-red-500 focus:ring-red-500 dark:bg-gray-900/50 dark:border-gray-600 dark:text-white dark:placeholder-gray-400 transition-colors"
                  >
                    <option value="">Sélectionnez une plage horaire</option>
                    <option value="morning">Matin (9h-12h)</option>
                    <option value="afternoon">Après-midi (14h-17h)</option>
                    <option value="evening">Soirée (17h-19h)</option>
                  </select>
                </InputWrapper>
              </div>

              <div className="space-y-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    {...register("isRetirementHome")}
                    onChange={(e) =>
                      setShowRetirementHomeFields(e.target.checked)
                    }
                    className="h-5 w-5 text-red-600 focus:ring-red-500 border-gray-300 rounded transition-colors"
                  />
                  <label className="ml-3 block text-sm text-gray-700 dark:text-gray-300">
                    Je représente une maison de retraite
                  </label>
                </div>

                {showRetirementHomeFields && (
                  <InputWrapper
                    label="Nombre de participants potentiels"
                    error={errors.numberOfParticipants?.message}
                    icon={User}
                  >
                    <input
                      type="number"
                      {...register("numberOfParticipants")}
                      className="pl-10 block w-full rounded-lg border-gray-300 bg-white shadow-sm focus:border-red-500 focus:ring-red-500 dark:bg-gray-900/50 dark:border-gray-600 dark:text-white dark:placeholder-gray-400 transition-colors"
                      placeholder="Estimation du nombre de participants"
                    />
                  </InputWrapper>
                )}
              </div>

              <InputWrapper
                label="Comment nous avez-vous connu ?"
                error={errors.howDidYouHearAboutUs?.message}
                icon={Info}
                required
              >
                <select
                  {...register("howDidYouHearAboutUs")}
                  className="pl-10 block w-full rounded-lg border-gray-300 bg-white shadow-sm focus:border-red-500 focus:ring-red-500 dark:bg-gray-900/50 dark:border-gray-600 dark:text-white dark:placeholder-gray-400 transition-colors"
                >
                  <option value="">Sélectionnez une option</option>
                  <option value="search">Recherche sur internet</option>
                  <option value="social">Réseaux sociaux</option>
                  <option value="recommendation">Recommandation</option>
                  <option value="other">Autre</option>
                </select>
              </InputWrapper>

              <InputWrapper
                label="Message (facultatif)"
                error={errors.message?.message}
                icon={Mail}
              >
                <textarea
                  {...register("message")}
                  rows={4}
                  className="pl-10 block w-full rounded-lg border-gray-300 bg-white shadow-sm focus:border-red-500 focus:ring-red-500 dark:bg-gray-900/50 dark:border-gray-600 dark:text-white dark:placeholder-gray-400 transition-colors resize-none"
                  placeholder="Partagez-nous vos questions ou besoins spécifiques..."
                />
              </InputWrapper>

              <div className="flex flex-col items-center space-y-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                  className={`w-full sm:w-auto inline-flex justify-center items-center rounded-lg px-8 py-4 text-base font-medium text-white shadow-lg ${
                    isSubmitting
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                  } transition-all duration-200`}
                  type="submit"
                >
                  {isSubmitting ? (
                    <>
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
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Heart className="mr-2 h-5 w-5" />
                      Réserver mon appel découverte
                    </>
                  )}
                </motion.button>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  En soumettant ce formulaire, vous acceptez d&apos;être
                  recontacté(e) par notre équipe.
                </p>
              </div>

              {isSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="rounded-lg bg-green-50 dark:bg-green-900/30 p-4"
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
                      <p className="text-sm font-medium text-green-800 dark:text-green-200">
                        Merci ! Votre demande a été envoyée avec succès. Nous
                        vous recontacterons dans les plus brefs délais.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
            <motion.a
              href="tel:+33625169632"
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all"
            >
              <div className="p-3 bg-red-100 dark:bg-red-900/30 rounded-full">
                <Phone className="h-6 w-6 text-red-600 dark:text-red-400" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">
                Téléphone
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                06 25 16 96 32
              </p>
            </motion.a>

            <motion.a
              href="mailto:info@polymento.fr"
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all"
            >
              <div className="p-3 bg-red-100 dark:bg-red-900/30 rounded-full">
                <Mail className="h-6 w-6 text-red-600 dark:text-red-400" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">
                Email
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                info@polymento.fr
              </p>
            </motion.a>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all"
            >
              <div className="p-3 bg-red-100 dark:bg-red-900/30 rounded-full">
                <MapPin className="h-6 w-6 text-red-600 dark:text-red-400" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">
                Zone d&apos;intervention
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Région Lausannoise
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
