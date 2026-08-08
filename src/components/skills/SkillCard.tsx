import { IconType } from "react-icons";

interface SkillCardProps {
  name: string;
  icon: IconType;
  color?: string;
}

export default function SkillCard({
  name,
  icon: Icon,
  color = "var(--primary)",
}: SkillCardProps) {
  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        p-6
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-[var(--primary)]
        hover:shadow-[0_10px_40px_rgba(143,143,212,0.25)]
      "
    >
      {/* Glow */}

      <div
        className="
          absolute
          -top-10
          left-1/2
          h-28
          w-28
          -translate-x-1/2
          rounded-full
          opacity-0
          blur-3xl
          transition-opacity
          duration-500
          group-hover:opacity-30
        "
        style={{
          background: color,
        }}
      />

      <div className="relative z-10 flex flex-col items-center">
        <Icon
          size={52}
          style={{
            color,
          }}
          className="
            transition-all
            duration-500
            group-hover:scale-110
            group-hover:-rotate-6
          "
        />

        <h4 className="mt-5 font-semibold text-white">
          {name}
        </h4>
      </div>
    </div>
  );
}