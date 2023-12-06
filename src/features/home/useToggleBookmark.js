import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toggleBookmark as toggleBookmarkApi } from "../../utils/helpers";
import toast from "react-hot-toast";

export function useToggleBookmark() {
  const queryClient = useQueryClient();
  const { mutate: toggleBookmark, isLoading: isToggling } = useMutation({
    mutationFn: ({ id, bookmark }) =>
      toggleBookmarkApi(id, { isBookmarked: bookmark }),

    onSuccess: (data) => {
      console.log(data);
      queryClient.invalidateQueries({ queryKey: ["allMovie"] });
      toast.success("yay");
    },
  });

  return { toggleBookmark, isToggling };
}
