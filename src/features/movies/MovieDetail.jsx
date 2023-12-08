import { useQueryClient } from "@tanstack/react-query";
import Heading from "../../ui/Heading";
import SearchBox from "../../ui/SearchBox";
import Movies from "./Movies";
import { useEffect, useState } from "react";
import RecommendedMovie from "../home/RecommendedMovie";
import { Results, StyledMovie } from "../../ui/BoxStyles";

function MovieDetail() {
  const queryClient = useQueryClient();

  const [searchValue, setSearchValue] = useState("");
  const [movieData, setMovieData] = useState([]);
  const data = queryClient.getQueryData(["movies", ""]);

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
      <SearchBox placeholder="Search for movies" onSearch={handleSearch} />

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
          <Heading as="h1">Movies</Heading>
          <Movies />
        </>
      )}
    </>
  );
}

export default MovieDetail;
