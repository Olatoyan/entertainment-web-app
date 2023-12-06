import styled from "styled-components";
import Heading from "../../ui/Heading";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";

const BookmarkIcon = styled.button`
  background-color: rgba(16, 20, 30, 0.5);
  padding: 1rem;
  border-radius: 50%;
  align-self: flex-end;
  top: 6%;
  right: 5%;
  z-index: 10;

  &:hover {
    background-color: #fff;

    > svg {
      fill: var(--dark-blue);
    }
  }
`;

const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const Movie = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: 1.5rem;
  font-weight: 300;
  opacity: 0.75;
`;

const Dot = styled.span`
  background-color: #fff;
  opacity: 0.75;
  width: 0.3rem;
  height: 0.3rem;
  border-radius: 50%;
`;

const Category = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const MovieOverlay = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);

  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  opacity: 0;
  visibility: hidden;
  transform: translateY(-20%);
`;

const PlayButton = styled.button`
  background-color: rgba(255, 255, 255, 0.25);
  border-radius: 2.85rem;
  font-size: 1.8rem;
  font-weight: 500;
  padding: 0.9rem 2.4rem 0.9rem 0.9rem;

  display: flex;
  align-items: center;
  gap: 2rem;
`;

const MovieBox = styled.div`
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
  const { title, category, year, rating, isBookmarked, trending_large } = movie;

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
      <BookmarkIcon>
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
