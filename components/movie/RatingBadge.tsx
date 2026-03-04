import { Badge } from "@/components/ui/Badge";

interface RatingBadgeProps {
  rating: string;
}

export function RatingBadge({ rating }: RatingBadgeProps) {
  return (
    <Badge className="bg-black/80 text-[#f5c518] shadow-[0_0_16px_rgba(245,197,24,0.35)]">
      IMDb {rating || "N/A"}
    </Badge>
  );
}
