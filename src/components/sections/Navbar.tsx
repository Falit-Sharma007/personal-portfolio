"use client";

import Link from "next/link";

import { Menu } from "lucide-react";

import Container from "@/components/layout/Container";
import { personalInfo } from "@/data/personal";
import DesktopNav from "@/components/navigation/DesktopNav";
import { useState } from "react";
import MobileMenu from "@/components/navigation/MobileMenu";
import useActiveSection from "@/hooks/useActiveSection";


export default function Navbar() {

    const activeSection = useActiveSection();

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header
            className="
                fixed
                top-0
                left-0
                z-50
                w-full
                border-b
                border-white/5
                bg-[#000000cc]
                backdrop-blur-xl
            "
        >
            <Container>
                <nav className="flex h-20 items-center justify-between">
                    {/* Logo */}

                    <Link
                        href="#home"
                        className="flex items-center gap-3"
                    >
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--card)] text-lg font-bold text-[var(--primary)] transition-all duration-300 hover:border-[var(--primary)] hover:shadow-[0_0_20px_rgba(143,143,212,0.35)]">
                            FS
                        </div>

                        <span className="text-lg font-semibold text-white">
                            {personalInfo.name}
                        </span>
                    </Link>

                    {/* Desktop Navigation */}

                    <DesktopNav activeSection={activeSection} />

                    {/* Resume Button */}

                    <div className="hidden md:block">
                        <button
                            className="rounded-xl border border-[var(--primary)] px-5 py-2 text-sm font-medium text-[var(--primary)] transition-all duration-300 hover:bg-[var(--primary)] hover:text-white hover:shadow-[0_0_25px_rgba(143,143,212,0.4)]
                            "
                        >
                            Resume
                        </button>
                    </div>

                    {/* Mobile Button */}

                    <button className="text-white md:hidden" onClick={() => setIsMenuOpen(true)}>
                        <Menu size={28} />
                    </button>

                    <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
                </nav>
            </Container>
        </header>
    );
}