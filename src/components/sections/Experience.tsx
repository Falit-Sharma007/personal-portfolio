"use client";

import { motion, type Variants } from "framer-motion";

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Heading from "@/components/ui/Heading";

import ExperienceCard from "@/components/experience/ExperienceCard";

import { experiences } from "@/data/experience";


const experienceContainerVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const experienceCardVariants: Variants = {
    hidden: {
        opacity: 0,
        x: -40,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },
};

const timelineDotVariants: Variants = {
    hidden: {
        opacity: 0,
        scale: 0,
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.4,
            ease: "easeOut",
        },
    },
};

export default function Experience() {
    return (
        <Section id="experience">
            <Container>
                <motion.div 
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true, amount: 0.3 }} 
                transition={{ duration: 0.6 }} >
                <Heading
                    title="Experience"
                    subtitle="My professional journey and the products I've contributed to."
                />
                </motion.div>

                <motion.div 
                variants={experienceContainerVariants} 
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true, amount: 0.15 }}
                className="relative mt-16">
                    {/* Timeline Line */}

                    <div className="absolute left-5 top-0 hidden h-full w-px bg-[var(--border)] lg:block" />

                    <div className="space-y-14">
                        {experiences.map((experience) => (
                            <motion.div
                                key={`${experience.company}-${experience.role}`}
                                variants={experienceCardVariants}
                                className="relative"
                            >
                                {/* Timeline Dot */}

                                <motion.div
                                variants={timelineDotVariants}
                                    className="
                                            absolute
                                            left-[11px]
                                            top-10
                                            hidden
                                            h-5
                                            w-5
                                            rounded-full
                                            border-4
                                            border-[var(--background)]
                                            bg-[var(--primary)]
                                            shadow-[0_0_20px_rgba(143,143,212,0.6)]
                                            lg:block
                                        "
                                />

                                <div className="lg:ml-16">
                                    <ExperienceCard
                                        company={experience.company}
                                        role={experience.role}
                                        location={experience.location}
                                        duration={experience.duration}
                                        summary={experience.summary}
                                        technologies={experience.technologies}
                                        projects={experience.projects}
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </Container>
        </Section>
    );
}