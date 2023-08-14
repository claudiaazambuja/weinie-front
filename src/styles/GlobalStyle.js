import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    html {
        font-family: "Lexend Deca", sans-serif;
    }

    button, input[type="submit"] {
        cursor: pointer;
        border: none;
        font-family: "Lexend Deca", sans-serif;
    }

    input {
        font-family: "Lexend Deca", sans-serif;
        color: #666666;
    }
`;

export default GlobalStyle;
