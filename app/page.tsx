"use client";

import { Contact } from "@/components/sections/contact";
import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Impact } from "@/components/sections/impact";
import { Offers } from "@/components/sections/offers";
import { motion } from "framer-motion";

const MotionWrapper = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.div>
);

export default function Home() {
  return (
    <>
      <Hero />

      <MotionWrapper>
        <Impact />
      </MotionWrapper>

      <MotionWrapper>
        <HowItWorks />
      </MotionWrapper>

      <MotionWrapper>
        <Offers />
      </MotionWrapper>

      <MotionWrapper>
        <Contact />
      </MotionWrapper>
    </>
  );
}
