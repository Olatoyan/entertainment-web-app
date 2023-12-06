import { useQuery } from "@tanstack/react-query";
import { getOnlySeries } from "../../utils/helpers";

export function useSeries(searchTerm = "") {
  const { data: series, isLoading } = useQuery({
    queryKey: ["series", searchTerm],
    queryFn: () => getOnlySeries(searchTerm),
  });

  return { series, isLoading };
}
