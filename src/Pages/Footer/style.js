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
        text-shadow: 0.2em 0.2em 0.2em blueviolet;
        color: var(--clr-primary);
        text-align: center;
    }
`;

export const Logo = styled.img`
    width: clamp(45px, 3vw, 100px);
    aspect-ratio: 1;
    border-radius: 50%;
    border: 2px solid var(--bg-two);
`;

export const Nav = styled.nav`
    display: flex;
    justify-content: flex-end;
    gap: clamp(1rem, 2vw, 1.5rem);
`;

export const Img = styled.img`
    width: clamp(45px, 3vw, 100px);
    aspect-ratio: 1;
    transition: 250ms ease-in-out;

    :where(:hover, :focus){
        transform: scale(1.1);
        filter: drop-shadow(0 0 3px var(--bg-one));
    }
`;