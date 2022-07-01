import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        margin: 0;
    }

    body {
        margin: 0;
        background: ${props => props.theme.background};
    }

    .form-control, .form-control:hover, .form-control:focus {
        background-color: ${props => props.theme.background};
        color: white;
    }
`