import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Login } from "../../utils/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: login, isLoading } = useMutation({
    mutationFn: Login,
    onSuccess: (user) => {
      toast.success("Logged in successfully, enjoy!");
      queryClient.setQueryData(["user"], user.user);

      navigate("/all", { replace: true });
    },
    onError: (error, data) => {
      console.log(error, data);

      toast.error(`Invalid email or password. Please try again.`);
    },
  });

  return { login, isLoading };
}
