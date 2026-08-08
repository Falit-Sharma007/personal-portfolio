"use client";

import { motion } from "framer-motion";

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Heading from "@/components/ui/Heading";

import SkillCategory from "@/components/skills/SkillCategory";

import { skillCategories } from "@/data/skills";

export default function Skills() {
    return (
        <Section id="skills">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }} >
                    <Heading
                        title="Skills"
                        subtitle="Technologies I use to build modern, scalable and responsive web applications."
                    />
                </motion.div>

                <div className="space-y-16">
                    {skillCategories.map((category, index) => (
                        <motion.div key={category.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{
                                duration: 0.6, delay: index * 0.1,
                            }}
                        >
                            <SkillCategory
                                title={category.title}
                                skills={category.skills}
                            />
                        </motion.div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}