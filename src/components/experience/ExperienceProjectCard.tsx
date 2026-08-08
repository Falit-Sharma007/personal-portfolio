interface ProjectCardProps {
  title: string;
  tech: string[];
  achievements: string[];
}

export default function ExperienceProjectCard ({
  title,
  tech,
  achievements,
}: ProjectCardProps) {
  return (
    <div
      className="
        rounded-2xl
        border
        border-white/10
        bg-black/20
        p-6
        transition-all
        duration-300
        hover:border-[var(--primary)]
        hover:bg-white/[0.04]
      "
    >
      {/* Project Title */}

      <h4 className="text-xl font-semibold text-white">
        {title}
      </h4>

      {/* Tech Stack */}

      <div className="mt-4 flex flex-wrap gap-2">
        {tech.map((item) => (
          <span
            key={item}
            className="
              rounded-full
              bg-[var(--primary)]/10
              px-3
              py-1
              text-xs
              font-medium
              text-[var(--primary)]
            "
          >
            {item}
          </span>
        ))}
      </div>

      {/* Achievements */}

      <ul className="mt-6 space-y-3">
        {achievements.map((achievement) => (
          <li
            key={achievement}
            className="flex items-start gap-3 text-[var(--secondary-text)]"
          >
            <span className="mt-2 h-2 w-2 rounded-full bg-[var(--primary)]" />

            <span>{achievement}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}