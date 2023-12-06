import Heading from "../../ui/Heading";
import SearchBox from "../../ui/SearchBox";
import BookmarkShows from "./BookmarkShows";

function BookmarkDetail() {
  return (
    <>
      <SearchBox placeholder="Search for bookmarked shows" />
      <Heading as="h1">Bookmarked Movies</Heading>
      <BookmarkShows />
    </>
  );
}

export default BookmarkDetail;
