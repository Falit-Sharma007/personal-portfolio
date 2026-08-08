import { ReactNode } from "react";

interface ContactItemProps {
  icon: ReactNode;
  title: string;
  value: string;
}

export default function ContactItem({
  icon,
  title,
  value,
}: ContactItemProps) {
  return (
    <div className="flex items-start gap-4">
      <div
        className="
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-xl
          bg-[var(--card)]
          text-[var(--primary)]
        "
      >
        {icon}
      </div>

      <div>
        <p className="text-sm text-[var(--secondary-text)]">
          {title}
        </p>

        <p className="mt-1 font-medium text-white">
          {value}
        </p>
      </div>
    </div>
  );
}