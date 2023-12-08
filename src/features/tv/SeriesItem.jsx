import Heading from "../../ui/Heading";

import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { useToggleBookmark } from "../../utils/useToggleBookmark";
import {
  BookmarkIcon,
  Category,
  Dot,
  Movie,
  MovieBox,
  MovieImg,
  MovieImgBox,
  MovieInfo,
  MovieOverlay,
  PlayButton,
  MovieSource,
} from "../../ui/BoxStyles";
import MiniSpinner from "../../ui/MiniSpinner";

function MovieItem({ series, variant }) {
  const {
    id,
    title,
    category,
    year,
    rating,
    isBookmarked,
    regular_large,
    regular_medium,
    regular_small,
  } = series;

  const { toggleBookmark, isToggling } = useToggleBookmark();

  function handleToggle() {
    toggleBookmark({ id, bookmark: !isBookmarked });
  }
  return (
    <div>
      <MovieBox variants={variant}>
        <MovieImgBox>
          <picture>
            <MovieSource media="(max-width: 31.25em)" srcSet={regular_small} />
            <MovieSource media="(min-width: 56.25em)" srcSet={regular_medium} />
            <MovieImg src={regular_large} alt={`Thumbnail of ${title}`} />
          </picture>
          <MovieOverlay>
            <PlayButton>
              <img src="./icon-play.svg" alt="play icon" />
              <span>Play</span>
            </PlayButton>
          </MovieOverlay>
        </MovieImgBox>
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
              <img src="./icon-category-tv.svg" alt="movie icon" />
              <span>{category}</span>
            </Category>
            <Dot />
            <span>{rating}</span>
          </Movie>

          <Heading as="h4">{title}</Heading>
        </MovieInfo>
      </MovieBox>
    </div>
  );
}

export default MovieItem;
