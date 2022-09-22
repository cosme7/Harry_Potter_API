import React from "react";
import Logo from "../../Assets/hp_logo.png"
import LinkeDin from "../../Assets/footer_01.svg"
import GitHub from "../../Assets/footer_02.svg"
import Discord from "../../Assets/footer_03.svg"
import Facebook from "../../Assets/footer_04.svg"
import * as S from "./style";

export default function Footer(){
    return (
        <>
        <footer>
            <S.Container>
                <S.Logo src={Logo} alt="Harry Potter Logo" />
                <p>All Rights Reserved for Cosme da S. Leite</p>
                <S.Nav>
                    <a href="https://www.linkedin.com/in/cosme-da-silva-leite-08baa3219/" target="_blank" rel="noreferrer">
                        <S.Img src={LinkeDin} alt="Linkedin" title="Linkedin" />
                    </a>
                    <a href="https://github.com/cosme7" target="_blank" rel="noreferrer">
                        <S.Img src={GitHub} alt="GitHub" title="GitHub" />
                    </a>
                    <a href="https://www.facebook.com/cosmewr" target="_blank" rel="noreferrer">
                        <S.Img src={Facebook} alt="Facebook" title="Facebook" />
                    </a>
                    <a href="https://discord.com/users/Sr.Cosme#4761" target="_blank" rel="noreferrer">
                        <S.Img src={Discord} alt="Whatsapp" title="Whatsapp" />
                    </a>
                </S.Nav>
            </S.Container>
        </footer>
        </>
    )
}