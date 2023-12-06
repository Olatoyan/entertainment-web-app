// import { useEffect, useState } from "react";
// import { getAllMovies } from "../../utils/helpers";

import styled from "styled-components";
import RecommendedMovie from "./RecommendedMovie";
import Spinner from "../../ui/Spinner";
import { useAllMovie } from "./useAllMovies";

const StyledMovie = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;
  flex-wrap: wrap;
`;

function RecommendedMovies() {
  const { allMovie, isLoading } = useAllMovie();

  if (isLoading) return <Spinner />;
  console.log(allMovie);

  return (
    <StyledMovie>
      {allMovie.map((movie) => (
        <RecommendedMovie key={movie.title} movie={movie} />
      ))}
    </StyledMovie>
  );
}

export default RecommendedMovies;
