import * as React from "react";

import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <input
        className={cn(
          "w-full px-4 py-3 border border-border rounded-lg bg-white text-text-primary placeholder:text-text-muted",
          "focus:ring-2 focus:ring-agri-green-600 focus:border-transparent focus:outline-none",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          error && "border-error focus:ring-error",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export { Input };
export type { InputProps };
