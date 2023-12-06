import styled, { css } from "styled-components";

const Heading = styled.h1`
  ${(props) =>
    (props.as === "h1" || props.as === "h2") &&
    css`
      font-size: 2.4rem;
      font-weight: 300;
      letter-spacing: -0.05rem;
    `}

  ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 2.4rem;
      font-weight: 500;
    `}

  ${(props) =>
    props.as === "h4" &&
    css`
      font-size: 1.8rem;
      font-weight: 500;
    `}
`;

export default Heading;
