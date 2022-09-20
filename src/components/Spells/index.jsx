import React, { useEffect, useState } from "react";
import axios from "axios";

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
                {spells.map((item, index) => (
                    <div>
                        <h2>{item.name}</h2>
                        <p>{item.description}</p>
                    </div>
                ))};
            </main>
        </>
    );
};