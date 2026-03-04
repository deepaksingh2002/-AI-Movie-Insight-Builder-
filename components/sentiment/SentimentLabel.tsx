import { SentimentLabel as Label } from "@/types/movie";
import { cn } from "@/lib/utils";

interface SentimentLabelProps {
  value: Label;
}

const styleMap: Record<Label, string> = {
  positive: "text-[#f5c518] shadow-[0_0_20px_rgba(245,197,24,0.4)] border-[#f5c518]/40",
  mixed: "text-[#d1d5db] shadow-[0_0_20px_rgba(209,213,219,0.2)] border-[#d1d5db]/35",
  negative: "text-[#ff6b6b] shadow-[0_0_20px_rgba(255,107,107,0.3)] border-[#ff6b6b]/40",
};

export function SentimentLabel({ value }: SentimentLabelProps) {
  return (
    <div
      className={cn(
        "rounded-full border px-4 py-1 text-sm font-bold uppercase tracking-wide",
        styleMap[value]
      )}
    >
      {value}
    </div>
  );
}
