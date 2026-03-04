"use client";

import { motion } from "framer-motion";

interface CastListProps {
  cast: string[];
}

function initials(name: string): string {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0]?.toUpperCase())
    .join("");
}

export function CastList({ cast }: CastListProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {cast.map((name) => (
        <motion.div
          key={name}
          whileHover={{ y: -2 }}
          className="flex items-center gap-2 rounded-full border border-[#f5c518]/20 bg-[#1a1a1a] px-3 py-2"
        >
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#f5c518]/20 text-xs font-semibold text-[#f5c518]">
            {initials(name)}
          </div>
          <span className="text-sm text-slate-200">{name}</span>
        </motion.div>
      ))}
    </div>
  );
}
