import styled from "styled-components";

export const Form = styled.form`
    --size: 40px;
    width: var(--size);
    transition: width 300ms cubic-bezier(.18,.89,.32,1.2);
    height: var(--size);
    margin-left: auto;
    padding: 2px;
    display: flex;
    border-radius: 50px;
    border: 2px solid firebrick;
    background-color: var(--bg-one);
    background-color: #EDF2F4;
    overflow: hidden;
    position: relative;

    @media screen and (max-width:59em){
        grid-area: 1 / 1;
        margin: 0 auto 0 0;
    }

    :focus-within{
        width: 350px;
        border: 2px solid limegreen;
    }

    @media screen and (max-width:59em){
        :focus-within{
            width: 240px;
        }
    }

    :focus-within button{
        margin-left: auto;
        background-color: lightblue;
    }

    :focus-within input{
        opacity: 1;
        cursor: initial;
    }

    input{
        flex-grow: 1;
        height: var(--size);
        font-size: clamp(0.9rem, 1vw, 1.2rem);
        font-weight: 600;
        padding-inline: 0.5em;
        border-radius: 50px;
        cursor: pointer;
        outline: none;
        border: none;
        position: absolute;
        background-color: inherit;
        top: 0;
        left: 0;
        bottom: 0;
        opacity: 0;
        transition: opacity 150ms ease-in-out;
    }

    input::placeholder{
        font-size: clamp(0.9rem, 1vw, 1.2rem);
    }

    button{
        width: calc(var(--size) - 10px);
        height: calc(var(--size) - 10px);
        border-radius: 50px;
        border: none;
        outline: none;
        transition: background-color 150ms ease-in-out;
    }

    button:hover,
    button:focus{
        box-shadow: 0 0 0 2px rgb(0 0 0 / 0.3);
    }

    img{
        width: calc(var(--size) - 15px);
        height: calc(var(--size) - 15px);
    }
`;