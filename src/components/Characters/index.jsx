import React, { useEffect, useState } from "react";
import axios from "axios";
import Gryffindor from "../Assets/Gryffindor_Flag.png"
import Hufflepuff from "../Assets/Hufflepuff_Flag.png"
import Ravenclaw from "../Assets/RavenClaw_Flag.png"
import Slytherin from "../Assets/Slytherin_Flag.png"

export default function Characters()  {

  let Api = 'https://hp-api.herokuapp.com/api/characters';

  const [character, setCharacter] = useState ([])
  const [house, setHouse] = useState ([])
  const [filter, setFilter] = useState ([Gryffindor, Hufflepuff, Ravenclaw, Slytherin])

  useEffect (() => {
    axios.get(Api).then((response) =>{
      console.log(response.data)
      setCharacter(response.data.slice(0, 25))
      setHouse(response.data.house)
    })
  }, [Api]);
    
  const flag = () => {
    const Filter = house.filter( item => {
      if(item === "Gryffindor"){
        return (
          <img src={setFilter[0]} alt={house} title={house} />
        )
      }else if (item === "Hufflepuff"){
        return (
          <img src={setFilter[1]} alt={house} title={house} />
        )
      }else if (item === "Ravenclaw"){
        return (
          <img src={setFilter[2]} alt={house} title={house} />
        )
      }else if (item === "Slytherin"){
        return (
          <img src={setFilter[3]} alt={house} title={house} />
        )
      }else {
        return ''
      };
    });

    setHouse(Filter)
  };

  return (
    <>
      {character.map((item, index) =>(
        <div key={index}>
          <h2>{item.name}</h2>
          <p>{item.house}</p>
          <figure>
            <img src={item.image} alt={item.name} title={item.name} />
            <img src={() => (filter ())} alt={item.house}/>
          </figure>
        </div>
      ))};
    </>
  );
};