"use client";

import { motion, type Variants } from "framer-motion";

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Heading from "@/components/ui/Heading";

import ContactCard from "@/components/contact/ContactCard";
import SocialLinks from "@/components/contact/SocialLinks";

import { contactInfo } from "@/data/contact";

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

export default function Contact() {
  return (
    <Section id="contact">
      <Container>
        {/* Heading */}

        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Heading
            title="Get In Touch"
            subtitle={contactInfo.description}
          />
        </motion.div>

        {/* Contact Card */}

        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.1 }}
          className="mx-auto mt-16 max-w-3xl"
        >
          <ContactCard />
        </motion.div>

        {/* Social Links */}

        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.2 }}
          className="mt-12"
        >
          <SocialLinks />
        </motion.div>
      </Container>
    </Section>
  );
}

