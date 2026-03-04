"use client";

import { motion } from "framer-motion";
import { SentimentLabel } from "@/types/movie";

interface SentimentMeterProps {
  classification: SentimentLabel;
}

const scoreMap: Record<SentimentLabel, number> = {
  positive: 86,
  mixed: 55,
  negative: 28,
};

const colorMap: Record<SentimentLabel, string> = {
  positive: "bg-[#f5c518]",
  mixed: "bg-[#9ca3af]",
  negative: "bg-[#ff6b6b]",
};

export function SentimentMeter({ classification }: SentimentMeterProps) {
  const score = scoreMap[classification];

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-xs text-slate-400">
        <span>Sentiment Meter</span>
        <span>{score}%</span>
      </div>
      <div className="h-3 overflow-hidden rounded-full bg-[#2a2a2a]">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${score}%` }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className={`h-full ${colorMap[classification]}`}
        />
      </div>
    </div>
  );
}
