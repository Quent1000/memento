"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import * as React from "react";

const navigation = [
  { name: "Accueil", href: "/" },
  { name: "Prestations", href: "/prestations" },
  { name: "Témoignages", href: "/temoignages" },
  { name: "À propos", href: "/a-propos" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);
  const [isNavigating, setIsNavigating] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Gestion de la navigation
  const handleNavigation = (href: string) => {
    setIsNavigating(true);
    setIsMobileMenuOpen(false);
    router.push(href);
    setTimeout(() => setIsNavigating(false), 500);
  };

  if (!mounted) {
    return null;
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-lg dark:bg-gray-900/90"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center"
          >
            <button
              onClick={() => handleNavigation("/")}
              className="relative w-40 h-10 focus:outline-none"
            >
              <Image
                src={
                  isScrolled
                    ? "/images/logo-black.svg"
                    : "/images/logo-white.svg"
                }
                alt="MEMENTO"
                fill
                className="object-contain"
                priority
              />
            </button>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <button
                    key={item.name}
                    onClick={() => handleNavigation(item.href)}
                    className={cn(
                      "relative px-3 py-2 text-sm font-medium transition-colors duration-200 focus:outline-none",
                      isScrolled
                        ? isActive
                          ? "text-red-600 dark:text-red-400"
                          : "text-gray-900 hover:text-red-600 dark:text-gray-100 dark:hover:text-red-400"
                        : isActive
                        ? "text-white"
                        : "text-gray-100 hover:text-white"
                    )}
                  >
                    {item.name}
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className={cn(
                          "absolute -bottom-px left-0 right-0 h-0.5",
                          isScrolled ? "bg-red-600 dark:bg-red-400" : "bg-white"
                        )}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                "inline-flex items-center justify-center rounded-md p-2 transition-colors",
                isScrolled
                  ? "text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
                  : "text-gray-100 hover:text-white"
              )}
            >
              <span className="sr-only">Ouvrir le menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={
                    isMobileMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  }
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{
            height: isMobileMenuOpen ? "auto" : 0,
            opacity: isMobileMenuOpen ? 1 : 0,
          }}
          className={cn(
            "md:hidden overflow-hidden",
            isScrolled
              ? "bg-white dark:bg-gray-900"
              : "bg-black/50 backdrop-blur-md"
          )}
        >
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.href)}
                  className={cn(
                    "block w-full text-left rounded-md px-3 py-2 text-base font-medium transition-colors",
                    isActive
                      ? "bg-red-500/10 text-red-600 dark:text-red-400"
                      : "text-gray-900 hover:bg-gray-100 hover:text-red-600 dark:text-gray-100 dark:hover:bg-gray-800 dark:hover:text-red-400"
                  )}
                >
                  {item.name}
                </button>
              );
            })}
          </div>
        </motion.div>
      </nav>

      {/* Overlay de transition */}
      {isNavigating && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
        />
      )}
    </motion.header>
  );
}
