import styled from "styled-components";
import Heading from "../../ui/Heading";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";

import {
  BookmarkIcon,
  Category,
  Dot,
  Movie,
  MovieInfo,
  MovieOverlay,
  PlayButton,
} from "../../ui/BoxStyles";
import { useToggleBookmark } from "../../utils/useToggleBookmark";
import { motion } from "framer-motion";
import MiniSpinner from "../../ui/MiniSpinner";

const MovieBox = styled(motion.div)`
  height: 23rem;
  width: 47rem;
  /* width: 100%; */
  border-radius: 0.8rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.6rem 2.4rem 2.4rem;

  position: relative;

  &:hover {
    > ${MovieOverlay} {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }
  }

  @media (max-width: 31.25em) {
    width: 24rem;
    height: 14rem;
    padding: 1.6rem;
  }
`;

function TrendingMovie({ movie }) {
  const {
    id,
    title,
    category,
    year,
    rating,
    isBookmarked,
    trending_large,
    trending_small,
  } = movie;

  const { toggleBookmark, isToggling } = useToggleBookmark();

  function handleToggle() {
    toggleBookmark({ id, bookmark: !isBookmarked });
  }

  const filterMovieCategory =
    category === "Movie"
      ? "./icon-category-movie.svg"
      : "./icon-category-tv.svg";

  const isMobile = window.innerWidth < 500;

  const backgroundStyle = `url(${isMobile ? trending_small : trending_large})`;

  return (
    <MovieBox
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",

        backgroundImage: backgroundStyle,
      }}
    >
      {isToggling ? (
        <MiniSpinner type="bookmark" />
      ) : (
        <BookmarkIcon
          onClick={handleToggle}
          disabled={isToggling}
          whileHover={{
            scale: 1.2,
            transition: { type: "spring", stiffness: 300, damping: 30 },
          }}
        >
          {isBookmarked ? (
            <FaBookmark fill="#fff" size="1.6rem" />
          ) : (
            <FaRegBookmark size="1.6rem" fill="#fff" />
          )}
        </BookmarkIcon>
      )}

      <MovieInfo>
        <Movie>
          <p>{year}</p>
          <Dot />

          <Category>
            <img src={filterMovieCategory} alt="movie icon" />
            <span>{category === "Movie" ? "Movie" : "TV Series"}</span>
          </Category>
          <Dot />
          <span>{rating}</span>
        </Movie>

        <Heading as="h3">{title}</Heading>
      </MovieInfo>

      <MovieOverlay>
        <PlayButton>
          <img src="./icon-play.svg" alt="play icon" />
          <span>Play</span>
        </PlayButton>
      </MovieOverlay>
    </MovieBox>
  );
}

export default TrendingMovie;
