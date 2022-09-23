import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    padding: 1rem 0.5rem;
    display: grid;
    place-items: center;
    row-gap: 1rem;

    img{
        grid-area: 1 / 1;
        width: 100%;   
    }

    h2{
        grid-area: 1 / -1;
        font-family: var(--ff-primary);
        font-size: clamp(2rem, 6vw, 7rem);
        text-shadow: 2px 2px 0 #000000, 
        2px -2px 0 #000000, 
        -2px 2px 0 red, 
        -2px -2px 0 red, 
        2px 0px 0 red, 
        0px 2px 0 #4074b5, 
        -2px 0px 0 #4074b5, 
        0px -2px 0 #4074b5, 
        2px 2px 2px rgba(0,0,0,0);
        color: var(--clr-primary);
        text-align: center;
    }

    p{
        grid-area: 2/ -1;
        font-family: var(--ff-primary);
        font-size: clamp(2rem, 6vw, 7rem);
        text-shadow: 2px 2px 0 #000000, 
        2px -2px 0 #000000, 
        -2px 2px 0 red, 
        -2px -2px 0 red, 
        2px 0px 0 red, 
        0px 2px 0 #4074b5, 
        -2px 0px 0 #4074b5, 
        0px -2px 0 #4074b5, 
        2px 2px 2px rgba(0,0,0,0);
        color: var(--clr-primary);
        text-align: center;
    }
`;