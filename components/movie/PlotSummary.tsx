interface PlotSummaryProps {
  text: string;
}

export function PlotSummary({ text }: PlotSummaryProps) {
  const safeText = text?.trim() ? text : "Plot summary is not available for this movie.";
  return (
    <blockquote className="rounded-2xl border-l-4 border-[#f5c518]/80 bg-[#1a1a1a] p-5 text-slate-200">
      {safeText}
    </blockquote>
  );
}
