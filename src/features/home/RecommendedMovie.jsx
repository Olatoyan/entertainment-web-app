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

function RecommendedMovie({ movie, search, variant }) {
  const { id, title, category, year, rating, isBookmarked, regular_large } =
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

      <BookmarkIcon onClick={handleToggle} disabled={isToggling || search}>
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

        <Heading as="h4">{title}</Heading>
      </MovieInfo>
    </MovieBox>
  );
}

export default RecommendedMovie;
