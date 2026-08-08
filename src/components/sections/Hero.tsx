import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";

import HeroContent from "@/components/hero/HeroContent";

export default function Hero() {
  return (
    <Section
      id="home"
      className="flex min-h-screen items-center"
    >
      <Container>
        <HeroContent />

      </Container>
    </Section>
  );
}