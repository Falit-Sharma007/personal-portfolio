"use client";

import Link from "next/link";

import { navItems } from "@/data/navigation";

interface DesktopNavProps {
    activeSection: string;
}

export default function DesktopNav({
    activeSection,
}: DesktopNavProps) {
    return (
        <ul className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => {
                const isActive = activeSection === item.href.slice(1);

                return (
                    <li key={item.href}>
                        <Link
                            href={item.href}
                            className=" group relative text-sm font-medium text-white "
                        >
                            {item.label}

                            <span className={` absolute -bottom-2 left-0 h-0.5 w-full origin-left rounded-full bg-[var(--primary)] transition-transform duration-300 ease-out ${isActive ? "scale-x-100" : "scale-x-0"} `} />
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
}