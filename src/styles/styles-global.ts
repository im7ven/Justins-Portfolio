import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

html {
    font-size: 62.5%;
    scroll-behavior:smooth;
}



body{
    margin:0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Raleway", Arial, Helvetica, sans-serif;
    background:#000;
    overflow-x: hidden;

}

::selection {
    color:#fff;
    background: #6200F5;
}

`;
