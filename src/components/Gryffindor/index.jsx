import React, { useEffect, useState } from "react";
import Flag from "../Assets/Gryffindor_Flag.png"
import axios from "axios";

export default function Gryffindor(){
  
  let Api = "https://hp-api.onrender.com/api/characters/house/gryffindor";

  const [character, setCharacter] = useState([]);

  useEffect (() => {
      axios.get(Api).then((response) =>{
      console.log(response.data)
      setCharacter(response.data.slice(0,10))
    });
  }, [Api]);

  return (
    <>
      <main>
        {character.map((item, index) =>(
          <div key={index}>
              <h2>{item.name}</h2>
              <p>{item.house}</p>
              <figure>
                <img src={item.image} alt={item.name} title={item.name} />
                <img src={Flag} alt="Gryffindor Flag" />
              </figure>
          </div>
        ))};
      </main>
    </>
  );
};
