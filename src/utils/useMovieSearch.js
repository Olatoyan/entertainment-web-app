import { useQuery } from "@tanstack/react-query";
import { getAllMovies } from "./helpers";

export function useMovieSearch(searchTerm) {
  const { data: searchResults, isLoading } = useQuery({
    queryKey: ["movieSearch", searchTerm],
    queryFn: () => getAllMovies(searchTerm),
  });

  return { searchResults, isLoading };
}
