import React, { useEffect, useState } from "react";
import Flag from "../../../Assets/Flag_Ravenclaw.png";
import axios from "axios";

export default function Ravenclaw()  {

  let Api = 'https://hp-api.onrender.com/api/characters/house/ravenclaw';

  const [character, setCharacter] = useState ([])

  useEffect (() => {
      axios.get(Api).then((response) =>{
      console.log(response.data)
      setCharacter(response.data.slice(0,2))
    });
  }, [Api]);
    
  return (
    <>
      <main>
        {character.map((item, index) =>(
          <div key={index}>
            <h2>{item.name}</h2>
            <p>{item.house}</p>
            <figure key={index}>
              <img src={item.image} alt={item.name} title={item.name} />
              <img src={Flag} alt="Ravenclaw Flag" />
            </figure>
          </div>
        ))};
      </main>
    </>
  );
};