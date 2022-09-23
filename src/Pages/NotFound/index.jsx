import React from 'react';
import Wrong from "../../Assets/error.png"
import * as S from "./style"

export default function Error(){
    return (
        <>
        <main>
            <S.Container>
                <img src={Wrong} alt="Error Page" />
                <h2>Page not Found! Sorry!</h2>
                <p>IT'S LEVIOOSAAAAA</p>
            </S.Container>
        </main>
        </>
    );
}
