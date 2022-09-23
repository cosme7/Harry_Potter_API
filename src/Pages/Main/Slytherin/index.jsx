import React, { useEffect, useState } from "react";
import axios from "axios";
import Flag from "../../../Assets/Flag_Slytherin.png";
import * as S from "./style"

export default function Slytherin(){

  let Api = 'https://hp-api.onrender.com/api/characters/house/slytherin';

  const [character, setCharacter] = useState ([])

  useEffect (() => {
      axios.get(Api).then((response) =>{
      console.log(response.data)
      setCharacter(response.data.slice(0,9))
    });
  }, [Api]);
    
  return (
    <>
      <main>
      <S.Container>
          {character.map((item, index) =>(
            <S.Div key={index}>
              <h2>Actor: {item.actor}</h2>
              <h3>My role is: {item.name}</h3>
              <p>Patronus: {item.patronus !== "" ? item.patronus : "Sorry not disponible!" }</p>
              <div>
                <S.Photo src={item.image} alt={item.name} title={item.name} />
                <S.Symbol src={Flag} alt="Slytherin Flag" />
              </div>
            </S.Div>
          ))};
        </S.Container>
      </main>
    </>
  );
};