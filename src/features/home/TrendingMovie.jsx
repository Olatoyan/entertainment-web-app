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
`;

function TrendingMovie({ movie }) {
  const { id, title, category, year, rating, isBookmarked, trending_large } =
    movie;

  const { toggleBookmark, isToggling } = useToggleBookmark();

  function handleToggle() {
    toggleBookmark({ id, bookmark: !isBookmarked });
  }

  const filterMovieCategory =
    category === "Movie"
      ? "./icon-category-movie.svg"
      : "./icon-category-tv.svg";

  return (
    <MovieBox
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        // backgroundImage: `url(${movie.thumbnail.regular.large})`,
        backgroundImage: `url(${trending_large})`,
      }}
    >
      <BookmarkIcon onClick={handleToggle} disabled={isToggling}>
        {isBookmarked ? (
          <FaBookmark fill="#fff" size="1.6rem" />
        ) : (
          <FaRegBookmark size="1.6rem" fill="#fff" />
        )}
      </BookmarkIcon>

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
