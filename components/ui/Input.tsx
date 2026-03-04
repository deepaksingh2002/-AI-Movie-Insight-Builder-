import { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={cn(
        "w-full rounded-2xl border border-[#f5c518]/20 bg-[#1a1a1a] px-5 py-4 text-lg text-[#f9fafb]",
        "placeholder:text-slate-500 outline-none backdrop-blur-xl transition-all",
        "focus:border-[#f5c518]/80 focus:shadow-[0_0_24px_rgba(245,197,24,0.35)]",
        className
      )}
      {...props}
    />
  );
}
