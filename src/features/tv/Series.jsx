import styled from "styled-components";
import Spinner from "../../ui/Spinner";
import SeriesItem from "./SeriesItem";
import { useSeries } from "./useSeries";
import { motion } from "framer-motion";

const StyledMovie = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;
  flex-wrap: wrap;
  margin-top: 3.8rem;

  @media (max-width: 31.25em) {
    gap: 1.6rem;
  }
`;

function Series() {
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

  const { series, isLoading } = useSeries();

  if (isLoading) return <Spinner />;

  return (
    <motion.div {...staggeredChildrenTransition}>
      <StyledMovie>
        {series.map((movie) => (
          <SeriesItem
            key={movie.id}
            series={movie}
            variant={listItemVariants}
          />
        ))}
      </StyledMovie>
    </motion.div>
  );
}

export default Series;
