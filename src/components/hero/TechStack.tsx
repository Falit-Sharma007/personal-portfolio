import { techStack } from "@/data/tech-stack";

export default function TechStack() {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {techStack.map((tech) => (
        <span
          key={tech}
          className="
            rounded-full
            border
            border-[var(--border)]
            bg-[var(--card)]
            px-4
            py-2
            text-sm
            text-[var(--secondary-text)]
            transition-all
            duration-300
            hover:border-[var(--primary)]
            hover:text-white
            hover:shadow-[0_0_18px_rgba(143,143,212,0.25)]
          "
        >
          {tech}
        </span>
      ))}
    </div>
  );
}