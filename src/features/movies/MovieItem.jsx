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

function MovieItem({ movie }) {
  const { id, title, category, year, rating, isBookmarked, regular_large } =
    movie;

  const { toggleBookmark, isToggling } = useToggleBookmark();

  function handleToggle() {
    toggleBookmark({ id, bookmark: !isBookmarked });
  }
  return (
    <div>
      <MovieBox>
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
              <img src="./icon-category-movie.svg" alt="movie icon" />
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