import { cn } from "@/lib/utils";

const bgMap = {
  white: "bg-white",
  surface: "bg-surface",
  green: "bg-agri-green-600 text-white",
  dark: "bg-agri-green-900 text-white",
} as const;

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: keyof typeof bgMap;
  container?: boolean;
}

export default function Section({
  children,
  className,
  id,
  background = "white",
  container = true,
}: SectionProps) {
  const bgClasses = bgMap[background];

  return (
    <section
      id={id}
      className={cn(bgClasses, "py-16 md:py-20 lg:py-24", className)}
    >
      {container ? (
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          {children}
        </div>
      ) : (
        children
      )}
    </section>
  );
}
