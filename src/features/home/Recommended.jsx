// import styled from "styled-components";
import Heading from "../../ui/Heading";
import RecommendedMovies from "./RecommendedMovies";

function Recommended() {
  return (
    <div>
      <Heading as="h2">Recommended for you</Heading>
      <RecommendedMovies />
    </div>
  );
}

export default Recommended;
