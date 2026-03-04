"use client";

import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { SentimentLabel } from "@/components/sentiment/SentimentLabel";
import { SentimentMeter } from "@/components/sentiment/SentimentMeter";
import { SentimentData } from "@/types/movie";

interface SentimentCardProps {
  sentiment: SentimentData;
}

export function SentimentCard({ sentiment }: SentimentCardProps) {
  const [visibleText, setVisibleText] = useState("");
  const text = useMemo(
    () => sentiment.aiSummary || "AI summary is unavailable for this movie right now.",
    [sentiment.aiSummary]
  );

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      i += 1;
      setVisibleText(text.slice(0, i));
      if (i >= text.length) clearInterval(timer);
    }, 10);
    return () => clearInterval(timer);
  }, [text]);

  return (
    <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}>
      <Card className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold">Audience Sentiment</h3>
          <SentimentLabel value={sentiment.classification} />
        </div>
        <SentimentMeter classification={sentiment.classification} />
        <p className="min-h-20 leading-relaxed text-slate-200">{visibleText || text}</p>
        <Badge className="bg-[#1a1a1a] text-[#f5c518] border-[#f5c518]/25">Powered by AI</Badge>
      </Card>
    </motion.div>
  );
}
