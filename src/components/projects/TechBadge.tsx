interface TechBadgeProps {
  tech: string;
}

export default function TechBadge({
  tech,
}: TechBadgeProps) {
  return (
    <span
      className="
        rounded-full
        border
        border-[var(--border)]
        bg-white/5
        px-4
        py-2
        text-sm
        font-medium
        text-[var(--primary)]
        transition-all
        duration-300
        hover:border-[var(--primary)]
        hover:bg-[rgba(143,143,212,0.12)]
      "
    >
      {tech}
    </span>
  );
}