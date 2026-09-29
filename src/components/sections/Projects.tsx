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

    const otherProjects = projects.filter(
        (project) => !project.featured && project.type === "Personal Project"
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
                        title="Personal Projects"
                        subtitle="A selection of products and applications I've built to explore ideas, solve practical problems, and strengthen my development skills."
                    />
                </motion.div>

                {/* Featured Project */}

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

                {/* Other Personal Projects */}

                {otherProjects.length > 0 && (
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.15 }}
                        variants={fadeUpVariants}
                        className="mt-12"
                    >
                        {otherProjects.map((project) => (
                            <FeaturedProject
                                key={project.title}
                                project={project}
                            />
                        ))}
                    </motion.div>
                )}
            </Container>
        </Section>
    );
}