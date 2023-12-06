import styled from "styled-components";

const Spinner = styled.div`
  width: 50px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: radial-gradient(farthest-side, #ffa516 94%, #0000) top/8px 8px
      no-repeat,
    conic-gradient(#0000 30%, #ffa516);
  -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 8px), #000 0);
  animation: rotate 1s infinite linear;

  @keyframes rotate {
    100% {
      transform: rotate(1turn);
    }
  }
`;

export default Spinner;
