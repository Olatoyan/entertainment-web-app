import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../utils/apiAuth";

export function useUser() {
  const { data: user, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });

  console.log(user);
  return { isLoading, user, isAuthenticated: user?.role === "authenticated" };
}
