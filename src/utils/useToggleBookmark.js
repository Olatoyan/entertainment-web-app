import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toggleBookmark as toggleBookmarkApi } from "./helpers";
import toast from "react-hot-toast";

export function useToggleBookmark() {
  const queryClient = useQueryClient();
  const { mutate: toggleBookmark, isLoading: isToggling } = useMutation({
    mutationFn: ({ id, bookmark }) =>
      toggleBookmarkApi(id, { isBookmarked: bookmark }),

    onSuccess: (data) => {
      const updatedData = data[0];

      const action = updatedData.isBookmarked ? "added to" : "removed from";
      const bookmarkMessage = `${updatedData.title} has been ${action} bookmarks`;

      queryClient.invalidateQueries();
      toast.success(bookmarkMessage);
    },

    onError: (error) => {
      console.error("Toggle Bookmark Error:", error);
      toast.error("Failed to toggle bookmark");
    },
  });

  return { toggleBookmark, isToggling };
}
