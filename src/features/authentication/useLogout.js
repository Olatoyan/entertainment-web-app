import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Logout } from "../../utils/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useLogout() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: logout, isLoading } = useMutation({
    mutationFn: Logout,
    onSuccess: () => {
      toast.success("Logged out successfully, see you soon!");
      queryClient.removeQueries();
      navigate("/login", { replace: true });
    },
  });

  return { logout, isLoading };
}
