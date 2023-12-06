import styled from "styled-components";
import Spinner from "../../ui/Spinner";
// import Heading from "../../ui/Heading";
import TrendingMovie from "./TrendingMovie";
// import { useEffect, useState } from "react";
// import { getTrendingMovies } from "../../utils/helpers";
import { useTrendingMovies } from "./useTrendingMovies";

const StyledMovie = styled.div`
  display: flex;
  gap: 4rem;
  width: 100%;
  overflow-x: scroll;
  scrollbar-width: 2rem;
  margin-bottom: 4rem;
`;

function TrendingMovies() {
  // const [movies, setMovies] = useState([]);
  // const [bookm, setBookm] = useState([]);

  const { trendingMovies, isLoading } = useTrendingMovies();

  if (isLoading) return <Spinner />;
  // useEffect(() => {
  //   async function bookmark(title) {
  //     const data = await toggleBookmark(title);
  //     setBookm(data);
  //   }
  //   bookmark("Bottom Gear");
  // }, []);
  // console.log(bookm);

  // if (!movies.length) return <Spinner />;

  return (
    <StyledMovie>
      {trendingMovies.map((movie) => (
        <TrendingMovie key={movie.title} movie={movie} />
      ))}
    </StyledMovie>
  );
}

export default TrendingMovies;
