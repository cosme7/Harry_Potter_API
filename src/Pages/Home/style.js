import styled from "styled-components";

export const Container = styled.section`
    max-width: 100%;
    min-height: 75vh;
    padding: 1rem 0.5;
    margin: 0 auto;
    display: grid;
    place-content: center;

    img{
        width: 100%;
        margin: 0 auto;
        filter: blur(1px);
        object-fit: contain;
    }

    h2{
        max-width: 50ch;
        font-size: clamp(40px, 5vw, 120px);
        font-family: var(--ff-primary);
        text-shadow: 0.5em 0.5em 0.5em white;
        text-align: center;
        color: var(--clr-primary);
        z-index: 5;
    }

    img, h2 {
        grid-area: 1 / 3;
    }
`;

// export const Div = styled.div`
//     width: 100%;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     position: absolute;
//     inset: 0;
// `;