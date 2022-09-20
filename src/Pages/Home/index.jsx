import React from "react";
import Background from "./Assets/bg_home.jpg"
import * as S from "./style";


export default function Home(){

    return(
        <>
            <main>
                <S.Container>
                    <img src={Background} alt="Hogwarts" />
                    <S.Div>
                        <h2>Welcome to HP Lovers!</h2>
                    </S.Div>
                </S.Container>
            </main>
        </>
    )
};