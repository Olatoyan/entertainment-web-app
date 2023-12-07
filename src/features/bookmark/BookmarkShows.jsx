import styled from "styled-components";
import { useBookmark } from "./useBookmark";
import Spinner from "../../ui/Spinner";
import BookmarkItem from "./BookmarkItem";

const StyledMovie = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;
  flex-wrap: wrap;
  margin-top: 3.8rem;
`;

function BookmarkShows() {
  const { bookmarkedShows, isLoading } = useBookmark();

  if (isLoading) return <Spinner />;

  console.log(bookmarkedShows);

  return (
    <StyledMovie>
      {bookmarkedShows.map((bookmark) => (
        <BookmarkItem key={bookmark.id} bookmarkShow={bookmark} />
      ))}
      <BookmarkItem bookmarkShow={bookmarkedShows[1]} />
    </StyledMovie>
  );
}

export default BookmarkShows;
