import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  width?: number;
  className?: string;
}

export default function Logo({ width = 160, className }: LogoProps) {
  return (
    <Image
      src="/logo_agritemis.png"
      alt="Agritemis"
      width={3514}
      height={512}
      className={cn("h-auto", className)}
      style={{ width: `${width}px`, objectFit: "contain" }}
      priority
    />
  );
}
