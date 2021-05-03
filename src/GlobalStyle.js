import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  body {
    padding: 20px;
    box-sizing: border-box;
  };

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
