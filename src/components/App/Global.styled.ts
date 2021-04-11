import { createGlobalStyle } from "styled-components";
import colors from "../Layout/Header/colors";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
    }

    html, body, #root {
        height: 100%;
        font-family: 'Inter', 'Roboto'
    }

    body {
        background-color: ${colors.snowDrop}
    }
`;

export default GlobalStyle;
