import React, { useEffect, useState } from "react";
import axios from "axios";
import Wand from "../../../Assets/spells.png"
import * as S from "./style"

export default function Header(){

    let Api = 'https://hp-api.herokuapp.com/api/spells';

    const [spells, setSpells] = useState ([])

    useEffect (() => {
        axios.get(Api).then((response) =>{
        console.log(response.data)
        setSpells(response.data)
        })
    }, [Api]);
    
    return(
        <>
        <main>
            <S.Container>
                {spells.map((item, index) => (
                    <S.Div key={index}>
                        <h2>{item.name}</h2>
                        <img src={Wand} alt="Wand" />
                        <p>{item.description}</p>
                    </S.Div>
                ))}
            </S.Container>
        </main>
        </>
    );
};