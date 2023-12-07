import styled from "styled-components";
import { useMovies } from "./useMovies";
import Spinner from "../../ui/Spinner";
import MovieItem from "./MovieItem";
import { motion } from "framer-motion";

const StyledMovie = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;
  flex-wrap: wrap;
  margin-top: 3.8rem;
`;

function Movies() {
  const listItemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: -50 },
    visible: { opacity: 1, scale: 1, y: 0 },
    transition: { type: "spring", damping: 15, stiffness: 300 },
  };

  const staggerContainerVariants = {
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const staggeredChildrenTransition = {
    variants: staggerContainerVariants,
    initial: "hidden",
    animate: "visible",
  };

  const { movies, isLoading } = useMovies();

  if (isLoading) return <Spinner />;

  return (
    <motion.div {...staggeredChildrenTransition}>
      <StyledMovie>
        {movies.map((movie) => (
          <MovieItem key={movie.id} movie={movie} variant={listItemVariants} />
        ))}
      </StyledMovie>
    </motion.div>
  );
}

export default Movies;
