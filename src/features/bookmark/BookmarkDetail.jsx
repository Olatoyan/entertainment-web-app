import { useQueryClient } from "@tanstack/react-query";
import Heading from "../../ui/Heading";
import SearchBox from "../../ui/SearchBox";
import BookmarkShows from "./BookmarkShows";
import { useEffect, useState } from "react";
import { Results, StyledMovie } from "../../ui/BoxStyles";
import RecommendedMovie from "../home/RecommendedMovie";

function BookmarkDetail() {
  const queryClient = useQueryClient();

  const [searchValue, setSearchValue] = useState("");
  const [movieData, setMovieData] = useState([]);
  const data = queryClient.getQueryData(["series", ""]);

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

      {(movieData?.length === 0 || !movieData) && (
        <>
          <Heading as="h1">Bookmarked Shows</Heading>
          <BookmarkShows />
        </>
      )}
    </>
  );
}

export default BookmarkDetail;
