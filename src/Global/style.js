import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    :root{
        --ff-primary: 'Henny Penny', cursive;
        --ff-secondary: 'Sofia', cursive;
        --ff-footer: 'Ubuntu', sans-serif;
        /*  */
        --clr-primary: #FFFFFF;
        --clr-secondary: ;
        /*  */
        --bg-primary: ;
        --bg-secondary: ;
        /*  */
    }
`;