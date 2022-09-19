import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Slytherin()  {
    let Api = 'https://hp-api.onrender.com/api/characters/house/slytherin';

    const [character, setCharacter] = useState ([])

    useEffect (() => {
      axios.get(Api).then((response) =>{
        console.log(response.data)
        setCharacter(response.data.slice(0, 9))
      })
    }, [Api]);
    
    

    return (
        <>
            {character.map((item, index) =>(
            <div key={index}>
                <h2>{item.name}</h2>
                <p>{item.house}</p>
                <img src={item.image} alt={item.name} title={item.name} />
            </div>
            ))}
        </>
    );
};