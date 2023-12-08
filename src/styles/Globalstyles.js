import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root{
--red: #fc4747;
--dark-blue: #10141e;
--greyish-blue:  #5a698f;
--semi-dark-blue: #161d2f;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

  /* Creating animations for dark mode */
  transition: background-color 0.3s, border 0.3s, fill 0.1s,color 0.3s;
}

html {
  font-size: 62.5%;
}

body {
  font-family: 'Outfit', sans-serif;
  color: #fff;
  background-color: var(--dark-blue);
  transition: color 0.3s, background-color 0.3s;
  min-height: 100vh;
  line-height: 1.5;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
  border: none;
  outline: none;
}

*:disabled {
  cursor: not-allowed;
}




/* Parent selector, finally 😃 */
button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}

img {
  max-width: 100%;


}

`;

export default GlobalStyles;
