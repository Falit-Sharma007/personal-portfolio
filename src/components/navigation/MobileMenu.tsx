"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { AnimatePresence, motion, type Variants } from "framer-motion";

import { navItems } from "@/data/navigation";
import { personalInfo } from "@/data/personal";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const overlayVariants: Variants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
    transition: {
      duration: 0.25,
    },
  },

  exit: {
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
};

const drawerVariants: Variants = {
  hidden: {
    x: "100%",
  },

  visible: {
    x: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },

  exit: {
    x: "100%",
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  },
};

const navContainerVariants: Variants = {
  hidden: {},

  visible: {
    transition: {
      delayChildren: 0.15,
      staggerChildren: 0.08,
    },
  },
};

const navItemVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 20,
  },

  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

export default function MobileMenu({
  isOpen,
  onClose,
}: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50"
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {/* Overlay */}

          <motion.div
            variants={overlayVariants}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Drawer */}

          <motion.aside
            variants={drawerVariants}
            className="
              absolute
              right-0
              top-0
              flex
              h-screen
              w-80
              max-w-[85vw]
              flex-col
              border-l
              border-white/10
              bg-[#000000f5]
              p-6
              backdrop-blur-xl
              shadow-2xl
            "
          >
            {/* Close Button */}

            <div className="flex justify-end">
              <motion.button
                onClick={onClose}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                className="
                  rounded-lg
                  p-2
                  text-white
                  transition
                  hover:bg-white/10
                "
                aria-label="Close navigation menu"
              >
                <X size={28} />
              </motion.button>
            </div>

            {/* Navigation */}

            <nav className="mt-12">
              <motion.ul
                variants={navContainerVariants}
                className="space-y-8"
              >
                {navItems.map((item) => (
                  <motion.li
                    key={item.href}
                    variants={navItemVariants}
                  >
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className="
                        block
                        text-xl
                        font-medium
                        text-white
                        transition-colors
                        duration-300
                        hover:text-[var(--primary)]
                      "
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            </nav>

            {/* Bottom */}

            <motion.div
              variants={navItemVariants}
              className="mt-auto"
            >
              <a
                href={personalInfo.resume}
                download
                className="
                  flex
                  w-full
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-[var(--primary)]
                  py-3
                  font-medium
                  text-[var(--primary)]
                  transition-all
                  duration-300
                  hover:bg-[var(--primary)]
                  hover:text-white
                "
              >
                Download Resume
              </a>
            </motion.div>
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
