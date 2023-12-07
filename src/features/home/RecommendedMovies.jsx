// import { useEffect, useState } from "react";
// import { getAllMovies } from "../../utils/helpers";

import RecommendedMovie from "./RecommendedMovie";
import Spinner from "../../ui/Spinner";
import { useAllMovies } from "./useAllMovies";
import { StyledMovie } from "../../ui/BoxStyles";

function RecommendedMovies() {
  const { allMovies, isLoading } = useAllMovies();

  if (isLoading) return <Spinner />;

  return (
    <StyledMovie>
      {allMovies.map((movie) => (
        <RecommendedMovie key={movie.title} movie={movie} />
      ))}
    </StyledMovie>
  );
}

export default RecommendedMovies;
