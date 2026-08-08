import { cn } from "@/lib/utils";

interface HeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function Heading({
  title,
  subtitle,
  className,
}: HeadingProps) {
  return (
    <div className={cn("mb-14 text-center", className)}>
      <h2 className="font-heading text-4xl font-bold tracking-tight text-white md:text-5xl">
        {title}
      </h2>

      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--secondary-text)]">
          {subtitle}
        </p>
      )}

      <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-[var(--primary)]" />
    </div>
  );
}