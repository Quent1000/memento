"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Testimonial {
  content: string;
  author: string;
  role: string;
  image?: string;
}

const testimonials: Testimonial[] = [
  {
    content:
      "Ma grand-mère nous a quittés, mais grâce à MEMENTO, sa voix et son histoire restent présentes. C'est le plus beau cadeau que nous ayons reçu.",
    author: "Julie",
    role: "32 ans",
    // image: "/images/testimonials/julie.jpg" // À ajouter quand disponible
  },
  {
    content:
      "Un moment émouvant, un film magnifique, que mes petits-enfants regarderont encore dans 30 ans.",
    author: "Bernard",
    role: "74 ans",
    // image: "/images/testimonials/bernard.jpg" // À ajouter quand disponible
  },
  {
    content:
      "Une expérience unique qui nous a permis de capturer les souvenirs de notre père. Un trésor inestimable pour toute la famille.",
    author: "Marie",
    role: "45 ans",
    // image: "/images/testimonials/marie.jpg" // À ajouter quand disponible
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Ils en parlent...
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Découvrez ce que nos clients disent de leur expérience avec MEMENTO
          </p>
        </motion.div>

        <div className="relative">
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {testimonials.map((testimonial, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="w-full flex-shrink-0 px-4"
                >
                  <blockquote className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm">
                    <div className="relative text-lg font-medium text-gray-700 dark:text-gray-300">
                      <svg
                        className="absolute top-0 left-0 transform -translate-x-6 -translate-y-8 h-16 w-16 text-gray-100 dark:text-gray-700"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z"
                          fill="currentColor"
                        />
                      </svg>
                      <p className="relative text-xl md:text-2xl font-medium text-gray-900 dark:text-white">
                        {testimonial.content}
                      </p>
                    </div>
                    <footer className="mt-8">
                      <div className="flex items-center">
                        {testimonial.image ? (
                          <div className="flex-shrink-0 mr-4">
                            <Image
                              className="h-12 w-12 rounded-full"
                              src={testimonial.image}
                              alt={testimonial.author}
                              width={48}
                              height={48}
                            />
                          </div>
                        ) : (
                          <div className="flex-shrink-0 mr-4">
                            <div className="h-12 w-12 rounded-full bg-red-100 dark:bg-red-900 flex items-center justify-center">
                              <span className="text-xl font-semibold text-red-600 dark:text-red-100">
                                {testimonial.author[0]}
                              </span>
                            </div>
                          </div>
                        )}
                        <div>
                          <div className="text-base font-medium text-gray-900 dark:text-white">
                            {testimonial.author}
                          </div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">
                            {testimonial.role}
                          </div>
                        </div>
                      </div>
                    </footer>
                  </blockquote>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-8 flex justify-center gap-4">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setCurrentIndex(idx);
                  setIsAutoPlaying(false);
                }}
                className={`h-2 w-2 rounded-full transition-colors ${
                  idx === currentIndex
                    ? "bg-red-600"
                    : "bg-gray-300 hover:bg-red-400"
                }`}
                aria-label={`Voir le témoignage ${idx + 1}`}
              />
            ))}
          </div>

          {/* Arrows */}
          <div className="hidden md:block">
            <button
              onClick={() => {
                setCurrentIndex(
                  (current) =>
                    (current - 1 + testimonials.length) % testimonials.length
                );
                setIsAutoPlaying(false);
              }}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white dark:bg-gray-800 rounded-full p-2 shadow-md hover:shadow-lg transition-shadow"
              aria-label="Témoignage précédent"
            >
              <svg
                className="h-6 w-6 text-gray-600 dark:text-gray-300"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <button
              onClick={() => {
                setCurrentIndex(
                  (current) => (current + 1) % testimonials.length
                );
                setIsAutoPlaying(false);
              }}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white dark:bg-gray-800 rounded-full p-2 shadow-md hover:shadow-lg transition-shadow"
              aria-label="Témoignage suivant"
            >
              <svg
                className="h-6 w-6 text-gray-600 dark:text-gray-300"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
