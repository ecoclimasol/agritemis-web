"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const cardVariants = cva(
  "rounded-xl overflow-hidden transition-shadow duration-300",
  {
    variants: {
      variant: {
        feature:
          "bg-white border border-border shadow-sm hover:shadow-lg cursor-pointer",
        indicator:
          "bg-white border border-border shadow-sm hover:shadow-lg cursor-pointer",
        product:
          "bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 cursor-pointer",
        elevated:
          "bg-white shadow-lg",
      },
    },
    defaultVariants: {
      variant: "feature",
    },
  }
);

/* ---------------------------------- Card ---------------------------------- */

interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(cardVariants({ variant, className }))}
        {...props}
      >
        {children}
        {variant === "indicator" && (
          <div className="h-1 w-full bg-agri-green-600" />
        )}
      </div>
    );
  }
);

Card.displayName = "Card";

/* ------------------------------- CardHeader ------------------------------- */

type CardHeaderProps = React.HTMLAttributes<HTMLDivElement>;

const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("px-6 pt-6", className)}
        {...props}
      />
    );
  }
);

CardHeader.displayName = "CardHeader";

/* ------------------------------ CardContent ------------------------------- */

type CardContentProps = React.HTMLAttributes<HTMLDivElement>;

const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("px-6 py-4", className)}
        {...props}
      />
    );
  }
);

CardContent.displayName = "CardContent";

/* ------------------------------- CardFooter ------------------------------- */

type CardFooterProps = React.HTMLAttributes<HTMLDivElement>;

const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "px-6 py-4 border-t border-border flex items-center",
          className
        )}
        {...props}
      />
    );
  }
);

CardFooter.displayName = "CardFooter";

/* ------------------------------- CardTitle -------------------------------- */

type CardTitleProps = React.HTMLAttributes<HTMLHeadingElement>;

const CardTitle = React.forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ className, ...props }, ref) => {
    return (
      <h3
        ref={ref}
        className={cn(
          "text-lg font-semibold leading-tight tracking-tight",
          className
        )}
        {...props}
      />
    );
  }
);

CardTitle.displayName = "CardTitle";

/* ----------------------------- CardDescription ---------------------------- */

type CardDescriptionProps = React.HTMLAttributes<HTMLParagraphElement>;

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  CardDescriptionProps
>(({ className, ...props }, ref) => {
  return (
    <p
      ref={ref}
      className={cn("text-sm text-text-secondary leading-relaxed", className)}
      {...props}
    />
  );
});

CardDescription.displayName = "CardDescription";

/* -------------------------------- Exports --------------------------------- */

export {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
  CardDescription,
  cardVariants,
};

export type { CardProps };
