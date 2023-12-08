import { useMutation } from "@tanstack/react-query";
import { Signup } from "../../utils/apiAuth";
import toast from "react-hot-toast";

export function useSignup() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: Signup,
    onSuccess: () => {
      toast.success("Account created successfully");
    },
    onError: (error, data) => {
      toast.error(
        `An account with the email "${data.email}" already exists. Please log in or use a different email.`
      );
    },
  });

  return { signup, isLoading };
}
