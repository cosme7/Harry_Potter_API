import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    padding: 1rem 0.5rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
`;

export const Div = styled.div`
    width: 45%;
    padding: 1rem 0;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    @media screen and (max-width: 50em){
        width: 100%;
        align-items: center;

        h2, h3, p{
            text-align: center;
        }
    }

    h2{
        font-size: clamp(1.5rem, 3vw, 3rem);
        font-family: var(--ff-primary);
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
    }

    h3{
        font-size: clamp(1.25rem, 1.5vw, 2.5rem);
        font-family: var(--ff-primary);
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
    }

    p{
        font-size: clamp(1rem, 1.5vw, 2.5rem);
        font-family: var(--ff-secondary);
        line-height: 1;
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
    }

    div{
        position: relative;
    }
`;  

export const Photo = styled.img`
    width: 80%;
    min-height: 100%;

    @media screen and (max-width: 50em){
        width: 100%;
    }
`;

export const Symbol = styled.img`
    width: 10%;
    position: absolute;
    top: 0;
    left: 0;

    @media screen and (max-width: 50em){
        width: 20%;
    }
`;