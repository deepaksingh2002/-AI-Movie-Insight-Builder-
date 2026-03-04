import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-[#f5c518]/25 bg-[#1a1a1a] px-3 py-1 text-xs font-medium text-[#f5c518]",
        className
      )}
    >
      {children}
    </span>
  );
}
