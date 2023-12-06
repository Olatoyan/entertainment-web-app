import { useQuery } from "@tanstack/react-query";
import { getAllMovie, getAllMovies } from "../../utils/helpers";

export function useAllMovies() {
  const { data: allMovies, isLoading } = useQuery({
    queryKey: ["allMovies"],
    queryFn: getAllMovies,
  });

  return { allMovies, isLoading };
}

export function useAllMovie() {
  const { data: allMovie, isLoading } = useQuery({
    queryKey: ["allMovie"],
    queryFn: getAllMovie,
  });

  return { allMovie, isLoading };
}
