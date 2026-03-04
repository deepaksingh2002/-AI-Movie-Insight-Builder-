"use client";

import { motion } from "framer-motion";
import { RatingBadge } from "@/components/movie/RatingBadge";

interface MoviePosterProps {
  title: string;
  poster: string;
  imdbRating: string;
}

export function MoviePoster({ title, poster, imdbRating }: MoviePosterProps) {
  return (
    <motion.div
      whileHover={{ y: -6, rotateX: 2, rotateY: -2 }}
      transition={{ type: "spring", stiffness: 180, damping: 18 }}
      className="relative mx-auto w-full max-w-sm [transform-style:preserve-3d]"
    >
      <img
        src={poster !== "N/A" ? poster : "https://via.placeholder.com/300x450?text=No+Poster"}
        alt={title}
        className="w-full rounded-2xl border border-[#f5c518]/20 object-cover shadow-2xl"
      />
      <div className="absolute right-3 top-3">
        <RatingBadge rating={imdbRating} />
      </div>
    </motion.div>
  );
}
