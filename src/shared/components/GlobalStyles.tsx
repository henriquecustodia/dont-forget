import 'bootswatch/dist/lumen/bootstrap.min.css';

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        margin: 0;
        height: 100%;
    }

    body {
        margin: 0;
        height: 100%;
        background: ${props => props.theme.background};
    }

    .form-control, .form-control:hover, .form-control:focus {
        background-color: ${props => props.theme.background};
        color: white;
    }
`