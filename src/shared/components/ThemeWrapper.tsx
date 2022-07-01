import { ThemeProvider } from "styled-components";
import { darkTheme } from "../themes/dark";

export const ThemeWrapper = ({ children }) => (
    <ThemeProvider theme={darkTheme}>
        {children}
    </ThemeProvider>
);