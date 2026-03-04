export type SentimentLabel = "positive" | "mixed" | "negative";

export interface MovieData {
  id: string;
  title: string;
  poster: string;
  castList: string[];
  releaseYear: string;
  rating: string;
  genre: string[];
  plotSummary: string;
  imdbRating: string;
}

export interface SentimentData {
  aiSummary: string;
  classification: SentimentLabel;
}

export interface MovieApiResponse {
  movie: MovieData;
  reviews: string[];
}

export interface SentimentApiResponse {
  sentiment: SentimentData;
}
