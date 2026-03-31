import { cn } from "@/lib/utils";

const bgMap = {
  white: "bg-white",
  surface: "bg-surface",
  green: "bg-agri-green-600 text-white",
  dark: "bg-agri-green-900 text-white",
} as const;

const spacingMap = {
  default: "py-16 md:py-20 lg:py-24",
  compact: "py-8 md:py-12",
  none: "",
} as const;

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: keyof typeof bgMap;
  container?: boolean;
  divider?: boolean;
  spacing?: keyof typeof spacingMap;
}

export default function Section({
  children,
  className,
  id,
  background = "white",
  container = true,
  divider = false,
  spacing = "default",
}: SectionProps) {
  const bgClasses = bgMap[background];
  const spacingClasses = spacingMap[spacing];

  return (
    <section
      id={id}
      className={cn(bgClasses, spacingClasses, className)}
    >
      {divider && (
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="border-t border-border" />
        </div>
      )}
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
