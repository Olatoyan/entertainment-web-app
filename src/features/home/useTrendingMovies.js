import { useQuery } from "@tanstack/react-query";
import { getTrendingMovies } from "../../utils/helpers";

export function useTrendingMovies() {
  const {
    data: trendingMovies,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["trendingMovies"],
    queryFn: getTrendingMovies,
  });

  return { trendingMovies, isLoading, error };
}
