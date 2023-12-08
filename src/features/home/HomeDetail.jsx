import { useEffect, useState } from "react";
import SearchBox from "../../ui/SearchBox";
import Recommended from "./Recommended";
import Trending from "./Trending";
import RecommendedMovie from "./RecommendedMovie";
import { Results, StyledMovie } from "../../ui/BoxStyles";
import { useQueryClient } from "@tanstack/react-query";

function HomeDetail() {
  const queryClient = useQueryClient();

  const [searchValue, setSearchValue] = useState("");
  const [movieData, setMovieData] = useState([]);
  const data = queryClient.getQueryData(["allMovies", ""]);

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
        placeholder={"Search for movies or TV series"}
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
          <Trending />
          <Recommended />
        </>
      )}
    </>
  );
}

export default HomeDetail;
