import { useQuery } from "@tanstack/react-query";
import { getBookmarkedShows } from "../../utils/helpers";

export function useBookmark() {
  const { data: bookmarkedShows, isLoading } = useQuery({
    queryKey: ["bookmark"],
    queryFn: getBookmarkedShows,
  });

  return { bookmarkedShows, isLoading };
}
