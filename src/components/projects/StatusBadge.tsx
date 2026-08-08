interface StatusBadgeProps {
  status: string;
}

export default function StatusBadge({
  status,
}: StatusBadgeProps) {
  const isActive =
    status === "Active Development";

  return (
    <span
      className={`
        rounded-full
        px-4
        py-2
        text-sm
        font-semibold
        ${
          isActive
            ? "bg-green-500/15 text-green-400"
            : "bg-[var(--primary)]/15 text-[var(--primary)]"
        }
      `}
    >
      {status}
    </span>
  );
}