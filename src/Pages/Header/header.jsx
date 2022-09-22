import React from "react";
import Logo from "../../Assets/hp_logo.png"
import Grycrest from "../../Assets/Crest_Gryffindor.png";
import Huffcrest from "../../Assets/Crest_Hufflepuff.png";
import Ravcrest from "../../Assets/Crest_Ravenclaw.png";
import Slycrest from "../../Assets/Crest_Slytherin.png";
import Search from "../../Assets/search_icon.svg"
import { Link } from "react-router-dom";
import * as S from "./style";

export default function Header() {
  return (
    <>
      <header>
        <S.Container>
          <S.Title>
            <img src={Logo} alt="Harry Potter Logo" />
            <h1>Lovers</h1>
          </S.Title>
          <nav>
            <S.List>
              <Link to='/'><li>Home</li></Link>
              <li>Houses
                <div>
                  <S.House>
                    <li>
                      <Link to='/gryffindor'>
                        <S.Img src={Grycrest} alt="Gryffindor Crest" />
                      </Link>
                    </li>
                    <li>
                      <Link to='/hufflepuff'>
                        <S.Img src={Huffcrest} alt="Hufflepuff Crest" />
                      </Link>
                    </li>
                    <li>
                      <Link to='/ravenclaw'>
                        <S.Img src={Ravcrest} alt="Ravenclaw Crest" />
                      </Link>
                    </li>
                    <li>
                      <Link to='/slytherin'>
                        <S.Img src={Slycrest} alt="Slytherin Crest" />
                      </Link>
                    </li>
                  </S.House>
                </div>
              </li>
              <Link to='/spells'><li>Spells</li></Link>
            </S.List>
          </nav>
          <S.Form onSubmit={(e) => e.preventDefault()}>
              <input type="text" />
              <button type="reset">
                <img src={Search} alt="Search Icon" />
              </button>
          </S.Form>
        </S.Container>
      </header>
    </>
  );
}
