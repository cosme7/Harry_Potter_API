import styled from "styled-components";

export const Container = styled.div`
    max-width: 100%;
    padding: 0.5rem 1rem;
    margin: 0 auto;
    display: grid;
    align-items: center;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

    nav{
        width: 100%;
    }
`;

export const Title = styled.div`
    display: flex;
    align-items: center;

    img{
        width: clamp(45px, 5vw, 150px);
        aspect-ratio: 1;
        filter: drop-shadow(0 0 20px var(--bg-one));
    }

    h1{
        font-family: var(--ff-primary);
        font-size: clamp(2rem, 3vw, 4rem);
        color: var(--clr-primary);
    }
`;

export const List = styled.ul`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: clamp(0.5rem, 2vw, 1rem);
    list-style: none;
    position: relative;

    div{
        width: 100%;
        display: none;
        position: absolute;
        top: 3.2rem;
        left: 0;
        z-index: 10;
    }

    div:where(:hover, :focus-visible){
        box-shadow: 0 0 0.5em 0 var(--bg-one);
        filter: drop-shadow(0 0 20px var(--bg-one));
    }

    li{
        font-size: clamp(1.5rem, 2vw, 2rem);
        font-family: var(--ff-secondary);
        color: var(--clr-primary);
    }

    li:where(:hover, :focus-visible) div{
        display: initial;
    }

    a{
        text-decoration: none;
    }
`;

export const House = styled.ul`
    padding: 1rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: clamp(0.5rem, 2vw, 1rem);
    list-style: none;
`;

export const Img = styled.img`
    width: clamp(45px, 5vw, 150px);
    aspect-ratio: 1;
    transition: 200ms ease-in-out;

    :where(:hover, :focus){
        transform: scale(1.5);
        filter: drop-shadow(0 0 10px var(--bg-one));
    }
`;

export const Form = styled.form`
    width: 100%;
    display: flex;
    justify-content: flex-end;

    img{
        width: 20px;
        aspect-ratio: 1;
    }
`;