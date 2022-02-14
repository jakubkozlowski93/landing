import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

html {
    box-sizing: border-box;
    font-size: 16px;
    height: 100%; 
    overflow:auto;
     scroll-behavior: smooth;
  }
  
*, *::after, *::before {
    box-sizing: inherit;
    font-family: 'Poppins', sans-serif;
  }
  
body {
    margin: 0;
    padding: 0;
    background-color: rgb(243, 243, 243);
    height: 100%;
    /* width: 80%; */
  }

::-webkit-scrollbar {
  display: none;
}


`

export default GlobalStyle
