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

    @media screen and (max-width:59em){
        padding: 1rem 0.5rem;
        row-gap: 1.5rem;
        grid-template-columns: 1fr 50px;

        nav{
            grid-area: 2 / 2 span;
        }
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

    @media screen and (max-width:59em){
        grid-area: 1 / 2;
        justify-content: flex-end;

        h1{
            display: none;
        }
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

    @media screen and (max-width:59em){
        div{
            top: 2rem;
        }
    }

    div:where(:hover, :focus-within){
        filter: drop-shadow(0 0 20px var(--bg-one));
    }

    li{
        font-size: clamp(1.5rem, 2vw, 2rem);
        font-family: var(--ff-secondary);
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
        cursor: pointer;
    }

    li:where(:hover, :focus-visible) div{
        display: initial;
    }

    li:active{
        color: red;
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
        transform: scale(2);
        filter: drop-shadow(0 0 10px var(--bg-one));
    }
`;