import styled from "styled-components";
import { motion } from "framer-motion";

export const Main = styled.main`
  width: 85vw;

  @media (max-width: 62.5em) {
    width: 100vw;
  }
`;

export const Results = styled.p`
  font-size: 3.2rem;
  font-weight: 300;
  letter-spacing: -0.05rem;
  margin-bottom: 3.2rem;
`;

export const StyledMovie = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;
  flex-wrap: wrap;

  @media (max-width: 31.25em) {
    gap: 1.6rem;
  }
`;

export const BookmarkIcon = styled(motion.button)`
  background-color: rgba(16, 20, 30, 0.5);
  padding: 1rem;
  border-radius: 50%;
  align-self: flex-end;
  position: absolute;
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

export const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: auto;
`;

export const Movie = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: 1.3rem;
  font-weight: 300;
  opacity: 0.75;

  @media (max-width: 31.25em) {
    font-size: 1.1rem;
  }
`;

export const Dot = styled.span`
  background-color: #fff;
  opacity: 0.75;
  width: 0.3rem;
  height: 0.3rem;
  border-radius: 50%;
`;

export const Category = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const MovieOverlay = styled.div`
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

export const PlayButton = styled.button`
  background-color: rgba(255, 255, 255, 0.25);
  border-radius: 2.85rem;
  font-size: 1.8rem;
  font-weight: 500;
  padding: 0.9rem 2.4rem 0.9rem 0.9rem;

  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const MovieBox = styled(motion.div)`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const MovieImg = styled.img`
  width: 28rem;
  height: 17.4rem;
  border-radius: 0.8rem;

  @media (max-width: 62.5em) {
    width: 22rem;
    height: 14rem;
  }

  @media (max-width: 31.25em) {
    width: 16.4rem;
    height: 11rem;
  }
`;

export const MovieSource = styled.source`
  width: 28rem;
  height: 17.4rem;
  border-radius: 0.8rem;

  @media (max-width: 62.5em) {
    width: 22rem;
    height: 14rem;
  }

  @media (max-width: 31.25em) {
    width: 16.4rem;
    height: 11rem;
  }
`;

export const MovieImgBox = styled.div`
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
