import styled from "styled-components";
import { useMovies } from "./useMovies";
import Spinner from "../../ui/Spinner";
import MovieItem from "./MovieItem";

const StyledMovie = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;
  flex-wrap: wrap;
  margin-top: 3.8rem;
`;

function Movies() {
  const { movies, isLoading } = useMovies();

  if (isLoading) return <Spinner />;

  console.log(movies);

  return (
    <StyledMovie>
      {movies.map((movie) => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </StyledMovie>
  );
}

export default Movies;
