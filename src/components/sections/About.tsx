"use client";

import AboutCard from "@/components/about/AboutCard";
import Container from "@/components/layout/Container";
import Heading from "@/components/ui/Heading";
import Section from "@/components/layout/Section";

import { aboutInfo } from "@/data/about";
import { motion } from "framer-motion";

export default function About() {

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 30,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
            },
        },
    };
    return (
        <Section id="about">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }} >
                    <Heading
                        title="About Me"
                        subtitle="A quick introduction about me and my professional journey."
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="mx-auto mt-12 max-w-3xl">
                    <p className="text-center text-lg leading-8 text-[var(--secondary-text)]">
                        {aboutInfo.description}
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
                >
                    {aboutInfo.highlights.map((item) => (
                        <motion.div key={item.title} variants={cardVariants}>
                            <AboutCard
                                title={item.title}
                                value={item.value}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </Container>
        </Section>
    );
}