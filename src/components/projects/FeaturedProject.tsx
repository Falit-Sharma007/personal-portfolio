"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Lock } from "lucide-react";

import { Project } from "@/data/projects";

import TechBadge from "./TechBadge";
import StatusBadge from "./StatusBadge";

interface FeaturedProjectProps {
  project: Project;
}

const screenshotContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const screenshotVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

export default function FeaturedProject({
  project,
}: FeaturedProjectProps) {
  return (
    <div
      className="
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
      "
    >
      {/* Main Project Preview */}

      {project.screenshots?.[0] && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="
            relative
            aspect-video
            overflow-hidden
            border-b
            border-white/10
            bg-[#050816]
          "
        >
          <Image
            src={project.screenshots[0].src}
            alt={project.screenshots[0].alt}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 1200px"
            className="
              object-cover
              object-top
              transition-transform
              duration-700
              hover:scale-[1.02]
            "
          />
        </motion.div>
      )}

      {/* Content */}

      <div className="p-6 sm:p-8 lg:p-10">
        {/* Header */}

        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-widest text-[var(--primary)]">
              {project.type}
            </p>

            <h3 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
              {project.title}
            </h3>
          </div>

          <StatusBadge status={project.status} />
        </div>

        {/* Description */}

        <p className="mt-8 max-w-3xl leading-8 text-[var(--secondary-text)]">
          {project.description}
        </p>

        {/* Features */}

        {project.features && (
          <div className="mt-10">
            <h4 className="mb-5 text-lg font-semibold text-white">
              Key Features
            </h4>

            <div className="grid gap-3 md:grid-cols-2">
              {project.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3"
                >
                  <div className="h-2 w-2 shrink-0 rounded-full bg-[var(--primary)]" />

                  <span className="text-[var(--secondary-text)]">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Additional Screenshots */}

        {project.screenshots &&
          project.screenshots.length > 1 && (
            <motion.div
              variants={screenshotContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="mt-14"
            >
              <h4 className="mb-6 text-lg font-semibold text-white">
                Product Preview
              </h4>

              <div className="grid gap-6 md:grid-cols-3">
                {project.screenshots
                  .slice(1)
                  .map((screenshot) => (
                    <motion.div
                      key={screenshot.src}
                      variants={screenshotVariants}
                      className="
                        group
                        overflow-hidden
                        rounded-2xl
                        border
                        border-white/10
                        bg-[#050816]
                      "
                    >
                      <div className="relative aspect-video overflow-hidden">
                        <Image
                          src={screenshot.src}
                          alt={screenshot.alt}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="
                            object-cover
                            object-top
                            transition-transform
                            duration-500
                            group-hover:scale-105
                          "
                        />
                      </div>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          )}

        {/* Tech Stack */}

        <div className="mt-12 flex flex-wrap gap-3">
          {project.technologies.map((tech) => (
            <TechBadge
              key={tech}
              tech={tech}
            />
          ))}
        </div>

        {/* Buttons */}

        <div className="mt-10 flex flex-wrap gap-4">
          {project.live ? (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="
                inline-flex
                items-center
                gap-2
                rounded-xl
                bg-[var(--primary)]
                px-6
                py-3
                font-medium
                text-white
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:shadow-[0_0_25px_rgba(143,143,212,0.35)]
              "
            >
              Live Demo

              <ArrowUpRight size={18} />
            </a>
          ) : (
            <button
              disabled
              className="
                rounded-xl
                bg-[var(--primary)]
                px-6
                py-3
                font-medium
                text-white
                opacity-70
              "
            >
              Coming Soon
            </button>
          )}

          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="
                inline-flex
                items-center
                gap-2
                rounded-xl
                border
                border-[var(--primary)]
                px-6
                py-3
                text-white
                transition-all
                duration-300
                hover:bg-[var(--primary)]
                hover:text-white
              "
            >
              GitHub

              <ArrowUpRight size={18} />
            </a>
          ) : (
            <button
              disabled
              className="
                inline-flex
                items-center
                gap-2
                rounded-xl
                border
                border-[var(--primary)]
                px-6
                py-3
                text-white
                opacity-80
              "
            >
              <Lock size={18} />

              Private Repository
            </button>
          )}
        </div>
      </div>
    </div>
  );
}