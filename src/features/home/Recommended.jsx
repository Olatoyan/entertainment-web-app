// import styled from "styled-components";
import Heading from "../../ui/Heading";
import RecommendedMovies from "./RecommendedMovies";

function Recommended() {
  return (
    <section>
      <Heading as="h2">Recommended for you</Heading>
      <RecommendedMovies />
    </section>
  );
}

export default Recommended;
