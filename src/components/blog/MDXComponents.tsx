import { ReactNode } from "react";

interface CalloutProps {
  type?: "info" | "key" | "warning";
  children: ReactNode;
}

export function Callout({ type = "info", children }: CalloutProps) {
  const styles = {
    info: "bg-agri-blue-50 border-agri-blue-200 text-agri-blue-900",
    key: "bg-agri-green-50 border-agri-green-200 text-agri-green-900",
    warning: "bg-amber-50 border-amber-200 text-amber-900",
  };

  const icons = {
    info: "ℹ",
    key: "★",
    warning: "⚠",
  };

  return (
    <div className={`flex gap-3 rounded-xl border px-5 py-4 my-6 text-sm leading-relaxed ${styles[type]}`}>
      <span className="mt-0.5 shrink-0 text-base">{icons[type]}</span>
      <div className="[&_strong]:font-semibold [&_p]:m-0">{children}</div>
    </div>
  );
}

interface PopulationCardProps {
  title: string;
  weight?: string;
  dangers: string;
  exposure: string;
}

export function PopulationCard({ title, weight, dangers, exposure }: PopulationCardProps) {
  const dangerList = dangers.split(",").map((d) => d.trim()).filter(Boolean);

  return (
    <div className="rounded-xl border border-agri-green-200 bg-white overflow-hidden my-4">
      <div className="flex items-center justify-between bg-agri-green-600 px-4 py-3">
        <span className="font-semibold text-white text-sm">{title}</span>
        {weight && (
          <span className="rounded-full bg-white/20 px-2.5 py-0.5 text-xs font-bold text-white">
            {weight} de la note
          </span>
        )}
      </div>
      <div className="p-4 space-y-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-text-muted mb-2">Dangers évalués</p>
          <ul className="space-y-1">
            {dangerList.map((d) => (
              <li key={d} className="flex items-center gap-2 text-sm text-text-secondary">
                <span className="h-1.5 w-1.5 rounded-full bg-agri-green-400 shrink-0" />
                {d}
              </li>
            ))}
          </ul>
        </div>
        <div className="pt-2 border-t border-agri-green-100">
          <p className="text-xs font-semibold uppercase tracking-wide text-text-muted mb-1">Facteur d&apos;exposition</p>
          <p className="text-sm text-text-secondary">{exposure}</p>
        </div>
      </div>
    </div>
  );
}
