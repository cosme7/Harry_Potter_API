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
        width: 100%;
        min-height: 100vh;
        background-image: url(${Background});
        background-size: 100% 100%;
    }

    :root{
        --ff-primary: 'Henny Penny', cursive;
        --ff-secondary: 'Sofia', cursive;
        --ff-footer: 'Ubuntu', sans-serif;
        /*  */
        --clr-primary: #FFFFFF;
        --clr-secondary: ;
        /*  */
        --bg-one: #FFFFFF;
        --bg-two: #000000;
        /*  */
    }
`;