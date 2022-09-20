import styled from "styled-components";

export const Container = styled.section`
    max-width: 100%;
    position: relative;

    img{
        width: 100%;
    }
`;

export const Div = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    inset: 0;

    h2{
        max-width: 50ch;
        font-size: clamp(40px, 5vw, 120px);
        font-family: var(--ff-primary);
        text-align: center;
        color: var(--clr-primary);
    }
`;