"use client";

import { Contact } from "@/components/sections/contact";
import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

const contactInfo = [
  {
    icon: Phone,
    title: "Téléphone",
    description: "06 25 16 96 32",
    href: "tel:+33625169632",
  },
  {
    icon: Mail,
    title: "Email",
    description: "info@polymento.fr",
    href: "mailto:info@polymento.fr",
  },
  {
    icon: MapPin,
    title: "Adresse",
    description: "Région Lausannoise, Suisse",
    href: "https://goo.gl/maps/...",
  },
];

export default function ContactPage() {
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
            alt="Contactez MEMENTO"
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
            Contactez-nous
          </h1>
          <p className="mt-6 max-w-lg mx-auto text-xl text-gray-200 sm:max-w-3xl">
            Nous sommes là pour répondre à toutes vos questions et vous
            accompagner dans votre projet
          </p>
        </motion.div>
      </motion.section>

      {/* Contact Info */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactInfo.map((item, index) => (
            <motion.a
              key={item.title}
              href={item.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="p-3 bg-red-100 dark:bg-red-900 rounded-full">
                <item.icon className="w-6 h-6 text-red-600 dark:text-red-100" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                {item.description}
              </p>
            </motion.a>
          ))}
        </div>
      </Section>

      {/* Contact Form */}
      <Contact />
    </>
  );
}
