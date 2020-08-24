import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after{
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin:0;
    padding: 0;
}

html{
    font-size: 62.5%;
    overflow-x: hidden;
}

body{
    font-size: 1.6rem;
    font-family: "Montserrat", sans-serif;
    background: linear-gradient(90deg, rgba(244,223,231,1) 0%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 50%, rgba(255,255,255,1) 75%, rgba(244,223,231,1) 100%);
}

a{
    word-wrap: break-all;
}
`;

export default GlobalStyle;
