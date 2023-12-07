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
} from "../../ui/BoxStyles";

function MovieItem({ series,variant }) {
  const { id, title, category, year, rating, isBookmarked, regular_large } =
    series;

  const { toggleBookmark, isToggling } = useToggleBookmark();

  function handleToggle() {
    toggleBookmark({ id, bookmark: !isBookmarked });
  }
  return (
    <div>
      <MovieBox variants={variant}>
        <MovieImgBox>
          <MovieImg src={regular_large} alt={`Thumbnail of ${title}`} />
          <MovieOverlay>
            <PlayButton>
              <img src="./icon-play.svg" alt="play icon" />
              <span>Play</span>
            </PlayButton>
          </MovieOverlay>
        </MovieImgBox>

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
