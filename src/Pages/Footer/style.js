import styled from "styled-components";

export const Container = styled.section`
    max-width: 100%;
    padding: 2rem 1rem;
    margin: 0 auto;
    display: grid;
    align-items: center;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

    p{
        font-size: clamp(0.75rem, 1vw, 1.5rem);
        font-family: var(--ff-footer);
        text-shadow: 2px 2px 0 #000000, 
        2px -2px 0 #000000, 
        -2px 2px 0 #4074b5, 
        -2px -2px 0 #4074b5, 
        2px 0px 0 #4074b5, 
        0px 2px 0 #4074b5, 
        -2px 0px 0 #4074b5, 
        0px -2px 0 #4074b5, 
        2px 2px 2px rgba(0,0,0,0);
        color: var(--clr-primary);
        text-align: center;
    }

    @media screen and (max-width:59em){
        row-gap: 1.5rem;

        p{
            grid-area: 3 / 2 span;
            filter: drop-shadow(0 0 10px var(--bg-two));
        }
    }
`;

export const Logo = styled.img`
    width: clamp(45px, 3vw, 100px);
    aspect-ratio: 1;
    border-radius: 50%;
    filter: drop-shadow(0 0 20px var(--bg-one));

    @media screen and (max-width:59em){
        grid-area: 1 / 2 span;
        justify-self: center;
    }
`;

export const Nav = styled.nav`
    display: flex;
    justify-content: flex-end;
    gap: clamp(1rem, 2vw, 1.5rem);

    @media screen and (max-width:59em){
        grid-area: 2 / 2 span;
        justify-content: center;

        :where(:hover, :focus){
            filter: drop-shadow(0 0 10px var(--bg-two));
        }
    }
`;

export const Img = styled.img`
    width: clamp(45px, 3vw, 100px);
    aspect-ratio: 1;
    transition: 250ms ease-in-out;

    :where(:hover, :focus){
        transform: scale(1.1);
        filter: drop-shadow(0 0 3px var(--bg-one));
    }

    @media screen and (max-width:59em){
        :where(:hover, :focus){
            filter: drop-shadow(0 0 10px var(--bg-two));
        }
    }
`;