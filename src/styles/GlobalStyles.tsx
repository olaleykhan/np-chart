import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Product Sans', sans-serif;
    font-size: 16px;
  }

  body{
      height: 100%;
      background-color: #756e7567;
  }


  `;

export default GlobalStyles;
