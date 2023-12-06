import { createContext, useState } from "react";
import { useAllMovies } from "../features/home/useAllMovies";

const AllMovieContext = createContext();

function AllMovieProvider({ children }) {
  const [movies, setMovies] = useState([]);

  const { allMovies, isLoading } = useAllMovies();

  return (
    <AllMovieContext.Provider value={{}}>{children}</AllMovieContext.Provider>
  );
}
