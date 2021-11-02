import { createGlobalStyle } from "styled-components";
import { PRIMARY, SECONDARY } from "./colors";

export const GlobalStyle = createGlobalStyle`
    html {
        font-size: 62.5%;
    }
    
    body {
        margin: 0;
        padding: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-size: 14px;
        font-size: 1.4rem;
        user-select: none;
    }

    main {
        background-color: ${PRIMARY};
        min-height: 100vh;
        color: ${SECONDARY};
        overflow: auto;
    }

    * {
	    box-sizing: border-box;
    }
`;
