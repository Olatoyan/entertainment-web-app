import styled from "styled-components";
import Spinner from "../../ui/Spinner";
import TrendingMovie from "./TrendingMovie";
import { useTrendingMovies } from "./useTrendingMovies";
import { motion } from "framer-motion";

const StyledMovie = styled.div`
  display: flex;
  gap: 4rem;
  width: 100%;
  overflow-x: auto;
  margin-bottom: 4rem;

  @media (max-width: 31.25em) {
    gap: 1.6rem;
    margin-bottom: 2.4rem;
  }
`;

function TrendingMovies() {
  // const listItemVariants = {
  //   hidden: { opacity: 0, scale: 0.5 },
  //   visible: { opacity: 1, scale: 1 },
  //   transition: { type: "spring" },
  // };

  // const staggerContainerVariants = {
  //   visible: {
  //     transition: {
  //       staggerChildren: 0.2,
  //     },
  //   },
  // };

  // const staggeredChildrenTransition = {
  //   variants: staggerContainerVariants,
  //   initial: "hidden",
  //   animate: "visible",
  // };

  const listItemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: -50 },
    visible: { opacity: 1, scale: 1, y: 0 },
    transition: { type: "spring", damping: 15, stiffness: 300 },
  };

  const staggerContainerVariants = {
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const staggeredChildrenTransition = {
    variants: staggerContainerVariants,
    initial: "hidden",
    animate: "visible",
  };

  const { trendingMovies, isLoading } = useTrendingMovies();

  if (isLoading) return <Spinner />;

  return (
    <motion.div {...staggeredChildrenTransition}>
      <StyledMovie>
        {trendingMovies.map((movie) => (
          <motion.div key={movie.title} variants={listItemVariants}>
            <TrendingMovie movie={movie} />
          </motion.div>
        ))}
      </StyledMovie>
    </motion.div>
  );
}

export default TrendingMovies;
