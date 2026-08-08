"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Download, Eye } from "lucide-react";

import { Button } from "@/components/ui/button";
import { personalInfo } from "@/data/personal";
import TechStack from "./TechStack";

export default function HeroContent() {
    return (
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
            {/* Greeting */}

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-4 text-lg font-medium text-[var(--primary)]">
                👋 {personalInfo.greeting}
            </motion.p>

            {/* Name */}

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="font-heading text-5xl font-black tracking-tight text-white md:text-7xl">
                {personalInfo.name}
            </motion.h1>

            {/* Title */}

            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="font-heading mt-4 text-2xl font-semibold text-[var(--primary)] md:text-4xl">
                {personalInfo.title}
            </motion.h2>

            {/* Description */}

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-8 max-w-2xl text-lg leading-8 text-[var(--secondary-text)]">
                {personalInfo.tagline}
            </motion.p>

            {/* Buttons */}

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
                <Link href="#projects">
                    <Button>
                        View Projects
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </Link>

                <a
                    href={personalInfo.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Button variant="outline">
                        View Resume
                        <Eye className="ml-2 h-4 w-4" />
                    </Button>
                </a>

                <a
                    href={personalInfo.resume}
                    download
                >
                    <Button variant="outline">
                        Download Resume
                        <Download className="ml-2 h-4 w-4" />
                    </Button>
                </a>
            </motion.div>

            {/* Tech Stack */}

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-16">
                <TechStack />
            </motion.div>
        </div>
    );
}