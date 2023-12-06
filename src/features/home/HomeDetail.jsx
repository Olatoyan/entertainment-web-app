import SearchBox from "../../ui/SearchBox";
import Recommended from "./Recommended";
import Trending from "./Trending";

function HomeDetail() {
  return (
    <div>
      <SearchBox placeholder={"Search for movies or TV series"} />
      <Trending />
      <Recommended />
    </div>
  );
}

export default HomeDetail;
