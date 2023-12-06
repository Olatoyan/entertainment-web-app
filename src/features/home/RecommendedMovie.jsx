import styled from "styled-components";
import Heading from "../../ui/Heading";

import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { useToggleBookmark } from "./useToggleBookmark";
import { useEffect } from "react";

const BookmarkIcon = styled.button`
  background-color: rgba(16, 20, 30, 0.5);
  padding: 1rem;
  border-radius: 50%;
  align-self: flex-end;
  position: absolute;
  top: 6%;
  right: 5%;

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
  font-size: 1.3rem;
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
  height: 100%;
  width: 100%;
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
  display: flex;
  flex-direction: column;
  position: relative;
`;

const MovieImg = styled.img`
  width: 28rem;
  height: 17.4rem;
  border-radius: 0.8rem;
`;

const MovieImgBox = styled.div`
  position: relative;
  cursor: pointer;

  &:hover {
    > ${MovieOverlay} {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }
  }
`;

function RecommendedMovie({ movie }) {
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
