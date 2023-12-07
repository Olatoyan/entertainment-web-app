// import { useEffect, useState } from "react";
// import { getAllMovies } from "../../utils/helpers";

import RecommendedMovie from "./RecommendedMovie";
import Spinner from "../../ui/Spinner";
import { useAllMovies } from "./useAllMovies";
import { StyledMovie } from "../../ui/BoxStyles";
import { motion } from "framer-motion";

function RecommendedMovies() {
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

  const { allMovies, isLoading } = useAllMovies();

  if (isLoading) return <Spinner />;

  return (
    <motion.div {...staggeredChildrenTransition}>
      <StyledMovie>
        {allMovies.map((movie) => (
          <RecommendedMovie
            key={movie.title}
            movie={movie}
            variant={listItemVariants}
          />
        ))}
      </StyledMovie>
    </motion.div>
  );
}

export default RecommendedMovies;
