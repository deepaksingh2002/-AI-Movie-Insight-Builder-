"use client";

import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

export function Button({ className, loading, children, ...props }: ButtonProps) {
  return (
    <motion.div whileTap={{ scale: 0.98 }} whileHover={{ scale: 1.01 }}>
      <button
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 font-semibold",
          "bg-[#f5c518] text-black hover:bg-[#ffd84d] transition-all disabled:opacity-60",
          "shadow-[0_0_20px_rgba(245,197,24,0.35)]",
          className
        )}
        disabled={loading || props.disabled}
        {...props}
      >
        {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
        {children}
      </button>
    </motion.div>
  );
}
