import { createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle`

:root {
 --maxWidth: 1280px;
 --yellow: #FF9F1C;
 --red: #FF4040;
 --green: #2EC4B6;
 --dark: #0A1014;
 --grey: #1B2329;
 --midGrey: #353F4C;
 --lightGrey: #7A8C99;
 --white: #FFF;
 --fontLarge: 6.6rem;
 --fontLarge2: 5.5rem;
 --fontMedium1: 3rem;
 --fontMedium2: 1.6rem;
 --fontRegular: 1.3rem;
 --fontSmall: 1em;
}

* {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
}

body{
    margin: 0;
    padding: 0;
    background-color: var(--dark);
    overflow-x: hidden;

    h1 {
        font-size: 2rem;
        font-weight: 600;
        color: var(--white);
    }

    h3{
        font-size: 1.1rem;
        font-weight: 600;
    }

    p{
        font-size: 1rem;
        color: var(--white);
    }
}

`;