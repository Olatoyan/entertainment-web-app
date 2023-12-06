import { QueryClient } from "@tanstack/react-query";
import SearchBox from "../../ui/SearchBox";
import Recommended from "./Recommended";
import Trending from "./Trending";

const queryClient = new QueryClient();
function HomeDetail() {
  const handleSearch = (searchTerm) => {
    // Implement search logic based on the current page (HomeDetail)
    console.log(`Searching for: ${searchTerm}`);
    // Fetch data or update state based on the search term and current page
    console.log(queryClient);

    const allMovies = queryClient.getQueryData(["allMovies"]);
    console.log(allMovies);
  };

  return (
    <>
      <SearchBox
        placeholder={"Search for movies or TV series"}
        onSearch={handleSearch}
      />
      <Trending />
      <Recommended />
    </>
  );
}

export default HomeDetail;
