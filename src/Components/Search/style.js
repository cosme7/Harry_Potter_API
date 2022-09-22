import styled from "styled-components";

export const Form = styled.form`
    justify-self: flex-end;
    width: fit-content;
    display: flex;
    overflow: hidden;
    border-radius: 50px;
    transition: 500ms ease-in-out;

    input{
        font-size: clamp(0.9rem, 1vw, 1.2rem);
        padding-inline: 1em;
        outline: none;
        border: none;
        transform: translateX(-100%);
        transition: 300ms ease-in-out;
    }

    :where(:hover, :focus){
        border: 2px solid navy;
        background-color: white;
    }
    
    :where(:hover, :focus) input{
        transform: translateX(0%);
    }

    :where(:hover, :focus) button{
        border-radius: 0 50px 50px 0;
    }

    input::placeholder{
        font-size: clamp(0.9rem, 1vw, 1.2rem);
    }

    button{
        padding: 0.5em;
        border-radius: 50px;
        border: none;
        background-color: var(--bg-one);
    }

    img{
        width: 20px;
        aspect-ratio: 1;
    }
`;