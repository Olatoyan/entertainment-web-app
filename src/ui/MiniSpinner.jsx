import styled, { css, keyframes } from "styled-components";
import { BiLoaderAlt } from "react-icons/bi";

const rotate = keyframes`
  to {
    transform: rotate(1turn)
  }
`;

const MiniSpinner = styled(BiLoaderAlt)`
  width: 2.4rem;
  height: 2.4rem;

  animation: ${rotate} 1.5s infinite linear;

  ${(props) =>
    props.type === "bookmark" &&
    css`
      position: absolute;
      top: 9%;
      right: 7%;
    `}

  &:hover svg {
    fill: var(--red);
  }
`;

export default MiniSpinner;
