interface AboutCardProps {
  title: string;
  value: string;
}

export default function AboutCard({
  title,
  value,
}: AboutCardProps) {
  return (
    <div
      className="
        group
        rounded-2xl
        border
        border-[var(--border)]
        bg-[var(--card)]
        p-6
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[var(--primary)]
        hover:bg-[var(--card-hover)]
        hover:shadow-[0_0_25px_rgba(143,143,212,0.15)]
      "
    >
      <p className="text-sm font-medium text-[var(--secondary-text)]">
        {title}
      </p>

      <h3 className="mt-3 font-heading text-xl font-bold text-white">
        {value}
      </h3>
    </div>
  );
}