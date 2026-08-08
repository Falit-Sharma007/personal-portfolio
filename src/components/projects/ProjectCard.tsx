import { Project } from "@/data/projects";
import StatusBadge from "./StatusBadge";
import TechBadge from "./TechBadge";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({
  project,
}: ProjectCardProps) {
  return (
    <div
      className="
        group
        rounded-3xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        p-8
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-[var(--primary)]
        hover:shadow-[0_10px_40px_rgba(143,143,212,0.15)]
      "
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--primary)]">
            {project.type}
          </p>

          <h3 className="mt-2 text-2xl font-bold text-white">
            {project.title}
          </h3>
        </div>

        <StatusBadge status={project.status} />
      </div>

      <p className="mt-6 leading-7 text-[var(--secondary-text)]">
        {project.description}
      </p>

      {project.contributions && (
        <div className="mt-8">
          <h4 className="mb-3 font-semibold text-white">
            My Contributions
          </h4>

          <ul className="space-y-2">
            {project.contributions.map((item) => (
              <li
                key={item}
                className="flex gap-3"
              >
                <span className="mt-2 h-2 w-2 rounded-full bg-[var(--primary)]" />

                <span className="text-[var(--secondary-text)]">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-8 flex flex-wrap gap-3">
        {project.technologies.map((tech) => (
          <TechBadge
            key={tech}
            tech={tech}
          />
        ))}
      </div>
    </div>
  );
}