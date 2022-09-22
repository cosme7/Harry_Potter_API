import styled from "styled-components";
import Book from "../../../Assets/spells_bg01.jpg"


export const Container = styled.section`
    max-width: 100%;
    padding: 1rem 0.5rem;
    /* display: grid;
    grid-template-columns: repeat(2, minmax(300px, 1fr));
    row-gap: 1rem; */
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
`;

export const Div = styled.div`
    width: 40%;
    padding: 1.5rem 1rem 1rem;
    border-radius: 30px;
    background-image: url(${Book});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    margin-block: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
    position: relative;
    isolation: isolate;

    :where(:hover, :focus){
        filter: drop-shadow(0 0 5px var(--bg-one));
    }

    @media screen and (max-width: 50em){
        width: 100%;
    }

    ::before{
        content: '';
        border-radius: 30px;
        position: absolute;
        inset: 0;
        background-color: rgb(0 0 0 / 0.5);
        z-index: -10;
    }


    h2{
        font-size: clamp(1.5rem, 2.5vw, 3rem);
        font-family: var(--ff-primary);
        color: var(--clr-primary);
    }

    img{
        width: 50%;
    }

    :where(:hover, :focus) img{
        filter: drop-shadow(0 5px 15px var(--bg-one));
    }

    p{
        font-size: clamp(0.9rem, 1.5vw, 2rem);
        font-family: var(--ff-secondary);
        color: var(--clr-primary);
    }
`;