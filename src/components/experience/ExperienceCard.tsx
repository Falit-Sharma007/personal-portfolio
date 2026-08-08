import ExperienceProjectCard from "./ExperienceProjectCard";

interface Project {
  title: string;
  tech: string[];
  achievements: string[];
}

interface ExperienceCardProps {
  company: string;
  role: string;
  location: string;
  duration: string;
  summary: string;
  technologies: string[];
  projects: Project[];
}

export default function ExperienceCard({
  company,
  role,
  location,
  duration,
  summary,
  technologies,
  projects,
}: ExperienceCardProps) {
  return (
    <div
      className="
        relative
        rounded-3xl
        border border-white/10
        bg-white/5
        p-8
        backdrop-blur-xl
      "
    >
      {/* Header */}

      <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
        <div>
          <h3 className="text-3xl font-bold text-white">
            {role}
          </h3>

          <p className="mt-1 text-lg text-[var(--primary)]">
            {company}
          </p>

          <p className="text-sm text-[var(--secondary-text)]">
            {location}
          </p>
        </div>

        <span
          className="
            rounded-full
            border border-[var(--border)]
            bg-white/5
            px-4
            py-2
            text-sm
            text-[var(--secondary-text)]
          "
        >
          {duration}
        </span>
      </div>

      {/* Summary */}

      <p className="mt-8 leading-8 text-[var(--secondary-text)]">
        {summary}
      </p>

      {/* Tech Stack */}

      <div className="mt-8 flex flex-wrap gap-3">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="
              rounded-full
              border border-[var(--border)]
              bg-[var(--card)]
              px-4
              py-2
              text-sm
              text-[var(--primary)]
            "
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Projects */}

      <div className="mt-10 space-y-6">
        {projects.map((project) => (
          <ExperienceProjectCard
            key={project.title}
            title={project.title}
            tech={project.tech}
            achievements={project.achievements}
          />
        ))}
      </div>
    </div>
  );
}