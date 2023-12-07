import { useQuery } from "@tanstack/react-query";
import { getAllMovies } from "../../utils/helpers";

export function useAllMovies(searchTerm = "") {
  const {
    data: allMovies,
    isLoading,
    status,
  } = useQuery({
    queryKey: ["allMovies", searchTerm],
    queryFn: () => getAllMovies(searchTerm),
  });

  return { allMovies, isLoading, status };
}
