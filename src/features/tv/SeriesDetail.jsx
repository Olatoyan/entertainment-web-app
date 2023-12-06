import Heading from "../../ui/Heading";
import SearchBox from "../../ui/SearchBox";
import Series from "./Series";

function SeriesDetail() {
  return (
    <>
      <SearchBox placeholder="Search for TV series" />
      <Heading as="h1">TV Series</Heading>
      <Series />
    </>
  );
}

export default SeriesDetail;
