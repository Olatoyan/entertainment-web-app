import styled from "styled-components";
import Spinner from "../../ui/Spinner";
import TrendingMovie from "./TrendingMovie";
import { useTrendingMovies } from "./useTrendingMovies";

const StyledMovie = styled.div`
  display: flex;
  gap: 4rem;
  width: 100%;
  overflow-x: auto;
  margin-bottom: 4rem;
`;

function TrendingMovies() {
  const { trendingMovies, isLoading } = useTrendingMovies();

  if (isLoading) return <Spinner />;

  return (
    <StyledMovie>
      {trendingMovies.map((movie) => (
        <TrendingMovie key={movie.title} movie={movie} />
      ))}
    </StyledMovie>
  );
}

export default TrendingMovies;
