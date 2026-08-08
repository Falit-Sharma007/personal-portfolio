"use client";

import { motion, type Variants } from "framer-motion";

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Heading from "@/components/ui/Heading";

import FeaturedProject from "@/components/projects/FeaturedProject";
import ProjectCard from "@/components/projects/ProjectCard";

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

const projectsContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const projectCardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.97,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function Projects() {
  const featuredProject = projects.find(
    (project) => project.featured
  );

  const otherProjects = projects.filter(
    (project) => !project.featured
  );

  return (
    <Section id="projects">
      <Container>
        {/* Main Heading */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUpVariants}
        >
          <Heading
            title="Featured Projects"
            subtitle="A selection of personal and professional projects showcasing my frontend development experience."
          />
        </motion.div>

        {/* Featured Project */}

        {featuredProject && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={fadeUpVariants}
          >
            <FeaturedProject project={featuredProject} />
          </motion.div>
        )}

        {/* Professional Projects */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariants}
          className="mt-20"
        >
          <Heading
            title="Professional Projects"
            subtitle="Projects I contributed to during my professional experience."
          />
        </motion.div>

        {/* Project Cards */}

        <motion.div
          variants={projectsContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-12 grid gap-8 lg:grid-cols-2"
        >
          {otherProjects.map((project) => (
            <motion.div
              key={project.title}
              variants={projectCardVariants}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}

