import React from "react";
import Glass from "../../Assets/search_icon.svg"
import * as S from "./style";

export default function Search()  {

  return (
    <>
      <S.Form onSubmit={(e) => e.preventDefault()}>
        <input type="email"  placeholder="Search ..."/>
        <button type="reset">
          <img src={Glass} alt="Search Icon" />
        </button>
      </S.Form>
    </>
  );
};