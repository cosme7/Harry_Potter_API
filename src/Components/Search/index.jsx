import React from "react";
// import axios from "axios";
import Glass from "../../Assets/search_icon.svg"
import * as S from "./style";

export default function Search()  {

  // let Api = 'https://hp-api.herokuapp.com/api/characters';

  // const [character, setCharacter] = useState ([])

  // useEffect (() => {
  //   axios.get(Api).then((response) =>{
  //     console.log(response.data)
  //     setCharacter(response.data.slice(0, 25))
  //   })
  // }, [Api]);

  return (
    <>
      <S.Form onSubmit={(e) => e.preventDefault()}>
        <input type="text"  placeholder="Search ..."/>
        <button type="reset">
          <img src={Glass} alt="Search Icon" />
        </button>
      </S.Form>
    </>
  );
};