import { useQueryClient } from "@tanstack/react-query";
import Heading from "../../ui/Heading";
import SearchBox from "../../ui/SearchBox";
import BookmarkShows from "./BookmarkShows";
import { useEffect, useState } from "react";
import { Results, StyledMovie } from "../../ui/BoxStyles";
import RecommendedMovie from "../home/RecommendedMovie";
import { useBookmark } from "./useBookmark";

function BookmarkDetail() {
  const queryClient = useQueryClient();
  const { bookmarkedShows } = useBookmark();

  const [searchValue, setSearchValue] = useState("");
  const [movieData, setMovieData] = useState([]);
  const data = queryClient.getQueryData(["bookmark"]);

  useEffect(() => {
    const filteredData = data?.filter((movie) => {
      if (searchValue.trim() === "") return;
      return movie.title
        .toLowerCase()
        .includes(searchValue.toLowerCase().trim());
    });
    setMovieData(filteredData);
  }, [data, searchValue]);

  const handleSearch = async (searchTerm) => {
    setSearchValue(searchTerm.trim());
  };

  return (
    <>
      <SearchBox
        placeholder="Search for bookmarked shows"
        onSearch={handleSearch}
      />
      {movieData?.length > 0 && (
        <>
          <Results>
            Found {movieData?.length} results for {searchValue}
          </Results>
          <StyledMovie>
            {movieData?.length > 0 &&
              movieData?.map((movie) => (
                <RecommendedMovie
                  key={movie.title}
                  movie={movie}
                  search="search"
                />
              ))}
          </StyledMovie>
        </>
      )}

      {(movieData?.length === 0 || !movieData) &&
        bookmarkedShows.length > 0 && (
          <>
            <Heading as="h1">Bookmarked Shows</Heading>
            <BookmarkShows />
          </>
        )}

      {bookmarkedShows.length === 0 && (
        <div>
          <Heading as="h1">No Bookmarked Shows Found.</Heading>
          <Heading as="h4">
            Looks like your watchlist is feeling a bit lonely! 🍿
          </Heading>
          <Heading as="h4">
            Why not explore our library and add some shows to your bookmarks?
          </Heading>
          <Heading as="h4">
            Go ahead, discover your next favorite and bring it here!
          </Heading>
        </div>
      )}
    </>
  );
}

export default BookmarkDetail;
