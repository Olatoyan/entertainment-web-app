import Heading from "../../ui/Heading";
import SearchBox from "../../ui/SearchBox";
import Movies from "./Movies";

function MovieDetail() {
  return (
    <>
      <SearchBox placeholder="Search for movies" />
      <Heading as="h1">Movies</Heading>
      <Movies />
    </>
  );
}

export default MovieDetail;
