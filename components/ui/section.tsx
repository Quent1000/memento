"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "alternate";
  withContainer?: boolean;
}

export function Section({
  children,
  className,
  variant = "default",
  withContainer = true,
}: SectionProps) {
  const variants = {
    default: "bg-white dark:bg-gray-900",
    alternate: "bg-gray-50 dark:bg-gray-800",
  };

  const content = (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className={cn("py-24", variants[variant], className)}
    >
      {withContainer ? (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
      ) : (
        children
      )}
    </motion.section>
  );

  return content;
}

interface SectionHeaderProps {
  title: string;
  description?: string;
  className?: string;
}

export function SectionHeader({
  title,
  description,
  className,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn("text-center max-w-3xl mx-auto", className)}
    >
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          {description}
        </p>
      )}
    </motion.div>
  );
}
