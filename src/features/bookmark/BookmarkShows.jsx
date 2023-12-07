import styled from "styled-components";
import { useBookmark } from "./useBookmark";
import Spinner from "../../ui/Spinner";
import BookmarkItem from "./BookmarkItem";
import { motion } from "framer-motion";

const StyledMovie = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;
  flex-wrap: wrap;
  margin-top: 3.8rem;

  @media (max-width: 31.25em) {
    gap: 1.6rem;
  }
`;

function BookmarkShows() {
  const listItemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: -50 },
    visible: { opacity: 1, scale: 1, y: 0 },
    transition: { type: "spring", damping: 15, stiffness: 300 },
  };

  const staggerContainerVariants = {
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const staggeredChildrenTransition = {
    variants: staggerContainerVariants,
    initial: "hidden",
    animate: "visible",
  };

  const { bookmarkedShows, isLoading } = useBookmark();

  if (isLoading) return <Spinner />;

  console.log(bookmarkedShows);

  return (
    <motion.div {...staggeredChildrenTransition}>
      <StyledMovie>
        {bookmarkedShows.map((bookmark) => (
          <BookmarkItem
            key={bookmark.id}
            bookmarkShow={bookmark}
            variant={listItemVariants}
          />
        ))}
        <BookmarkItem bookmarkShow={bookmarkedShows[1]} />
      </StyledMovie>
    </motion.div>
  );
}

export default BookmarkShows;
