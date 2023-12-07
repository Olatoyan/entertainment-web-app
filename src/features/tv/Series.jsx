import styled from "styled-components";
import Spinner from "../../ui/Spinner";
import SeriesItem from "./SeriesItem";
import { useSeries } from "./useSeries";

const StyledMovie = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;
  flex-wrap: wrap;
  margin-top: 3.8rem;
`;

function Series() {
  const { series, isLoading } = useSeries();

  if (isLoading) return <Spinner />;

  return (
    <StyledMovie>
      {series.map((movie) => (
        <SeriesItem key={movie.id} series={movie} />
      ))}
    </StyledMovie>
  );
}

export default Series;
