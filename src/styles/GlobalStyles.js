import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
    }
    body{
        min-height: 100vh;
        background-color: hsl(180, 52%, 96%);
        font-family: "Spartan", sans-serif;
    }
`;
