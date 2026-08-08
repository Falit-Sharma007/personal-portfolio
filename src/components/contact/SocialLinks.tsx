import Link from "next/link";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

import { personalInfo } from "@/data/personal";

export default function SocialLinks() {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {/* LinkedIn */}

      {personalInfo.linkedin && (
        <Link
          href={personalInfo.linkedin}
          target="_blank"
          className="
            flex items-center gap-2
            rounded-xl
            border border-white/10
            bg-white/5
            px-5
            py-3
            text-white
            transition-all
            duration-300
            hover:-translate-y-1
            hover:border-[var(--primary)]
            hover:text-[var(--primary)]
          "
        >
          <FaLinkedin size={20} />
          LinkedIn
        </Link>
      )}

      {/* GitHub */}

      {personalInfo.github && (
        <Link
          href={personalInfo.github}
          target="_blank"
          className="
            flex items-center gap-2
            rounded-xl
            border border-white/10
            bg-white/5
            px-5
            py-3
            text-white
            transition-all
            duration-300
            hover:-translate-y-1
            hover:border-[var(--primary)]
            hover:text-[var(--primary)]
          "
        >
          <FaGithub size={20} />
          GitHub
        </Link>
      )}

      {/* Email */}

      <Link
        href={`mailto:${personalInfo.email}`}
        className="
          flex items-center gap-2
          rounded-xl
          border border-white/10
          bg-white/5
          px-5
          py-3
          text-white
          transition-all
          duration-300
          hover:-translate-y-1
          hover:border-[var(--primary)]
          hover:text-[var(--primary)]
        "
      >
        <Mail size={20} />
        Email
      </Link>
    </div>
  );
}