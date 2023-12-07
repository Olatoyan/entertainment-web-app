import styled from "styled-components";
import Heading from "../../ui/Heading";
import TrendingMovies from "./TrendingMovies";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  @media (max-width: 31.25em) {
    gap: 1.6rem;
  }
`;

function Trending() {
  return (
    <Section>
      <Heading as="h1">Trending</Heading>
      <TrendingMovies />
    </Section>
  );
}

export default Trending;
