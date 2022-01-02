import { createGlobalStyle, css } from "styled-components";

const globalCss = css`
  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    background-color: #f0f0f2;
    font-family: "Montserrat", sans-serif;
    margin: 0;
    padding: 0;
  }
`;

const GlobalStyle = createGlobalStyle`
  ${globalCss}
`;

export default GlobalStyle;
