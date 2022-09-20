import styled from "styled-components";

export const Container = styled.section`
    max-width: 100%;
    padding: 0.5rem 1rem;
    margin: 0 auto;
    display: grid;
    align-items: center;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

    p{
        font-size: clamp(0.75rem, 1vw, 1.5rem);
        font-family: var(--ff-footer);
        text-align: center;
    }
`;

export const Logo = styled.img`
    width: clamp(45px, 3vw, 100px);
    aspect-ratio: 1;
`;

export const Nav = styled.nav`
    display: flex;
    justify-content: flex-end;
    gap: clamp(1rem, 2vw, 1.5rem);
`;

export const Img = styled.img`
    width: clamp(45px, 3vw, 100px);
    aspect-ratio: 1;
`;