import styled from "styled-components";
import Heading from "../../ui/Heading";
import RecommendedMovies from "./RecommendedMovies";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

function Recommended() {
  return (
    <Section>
      <Heading as="h2">Recommended for you</Heading>
      <RecommendedMovies />
    </Section>
  );
}

export default Recommended;
