"use client";

import { motion, type Variants } from "framer-motion";

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Heading from "@/components/ui/Heading";

import FeaturedProject from "@/components/projects/FeaturedProject";

import { projects } from "@/data/projects";

const fadeUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Projects() {
  const featuredProject = projects.find(
    (project) => project.featured
  );

  return (
    <Section id="projects">
      <Container>
        {/* Heading */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUpVariants}
        >
          <Heading
            title="Featured Project"
            subtitle="A personal product showcasing my frontend and full-stack development experience."
          />
        </motion.div>

        {/* Personal Project */}

        {featuredProject && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={fadeUpVariants}
            className="mt-12"
          >
            <FeaturedProject project={featuredProject} />
          </motion.div>
        )}
      </Container>
    </Section>
  );
}