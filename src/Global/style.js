import { createGlobalStyle } from "styled-components";
import Background from "../Assets/background_body.jpg"

export const GlobalStyle = createGlobalStyle`

    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    *::before, *::after{
        box-sizing: border-box;
    }

    body{
        min-height: 100vh;
        width: 100%;
        background-image: url(${Background});
    }

    :root{
        --ff-primary: 'Henny Penny', cursive;
        --ff-secondary: 'Sofia', cursive;
        --ff-footer: 'Ubuntu', sans-serif;
        /*  */
        --clr-primary: #FFFFFF;
        /*  */
        --bg-one: #FFFFFF;
        --bg-two: #000000;
        /*  */
    }
`;