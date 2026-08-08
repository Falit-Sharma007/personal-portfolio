"use client";

import { motion, type Variants } from "framer-motion";
import SkillCard from "./SkillCard";

import { IconType } from "react-icons";

interface Skill {
    name: string;
    icon: IconType;
    color: string;
}

interface SkillCategoryProps {
    title: string;
    skills: Skill[];
}

const skillsContainerVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.08,
        },
    },
};

const skillCardVariants: Variants = {
    hidden: {
        opacity: 0, y: 20, scale: 0.95,
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.4,
            ease: "easeOut",
        },
    },
};

export default function SkillCategory({
    title,
    skills,
}: SkillCategoryProps) {
    return (
        <div>
            {/* Category Heading */}

            <h3 className="mb-8 text-2xl font-semibold text-white">
                {title}
            </h3>

            {/* Skills Grid */}

            <motion.div
                variants={skillsContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="
                    grid
                    grid-cols-2
                    gap-5
                    sm:grid-cols-3
                    lg:grid-cols-4
                    xl:grid-cols-5
                    "
            >
                {skills.map((skill) => (
                    <motion.div
                        key={skill.name}
                        variants={skillCardVariants}
                    >
                        <SkillCard
                            name={skill.name}
                            icon={skill.icon}
                            color={skill.color}
                        />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}