import { createGlobalStyle } from 'styled-components';
/* slick-carousel CSS */
import "~slick-carousel/slick/slick.css";
import "~slick-carousel/slick/slick-theme.css";


const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Lato', sans-serif;
    margin: 0;
    padding: 0;
    color: #424242;
    background-color: #F9F9F9;
  }
  a {
    color: #F9ED32;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }
`;

export default GlobalStyle;
