"use client";

import { motion, type Variants } from "framer-motion";

const footerVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 15,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <motion.p
        variants={footerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        className="text-center text-sm text-[var(--secondary-text)]"
      >
        Designed & built with Next.js, TypeScript & Tailwind CSS.
      </motion.p>
    </footer>
  );
}