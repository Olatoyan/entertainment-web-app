import { useQuery } from "@tanstack/react-query";
import { getOnlyMovies } from "../../utils/helpers";

export function useMovies(searchTerm = "") {
  const { data: movies, isLoading } = useQuery({
    queryKey: ["movies", searchTerm],
    queryFn: () => getOnlyMovies(searchTerm),
  });

  return { movies, isLoading };
}
