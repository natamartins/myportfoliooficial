import React from 'react'
import * as S from './styles'
import IMG from '../../img/o-email.png'
import { Link } from 'react-router-dom'
// link of social midia
const L = 'https://www.linkedin.com/in/nat%C3%A3martins/'
const G = 'https://www.instagram.com/nata.devjr/?theme=dark '
const I = 'https://github.com/natamartins'

const Index = () => {
    return (
        <S.Container>
            <S.Email>
                <S.Img src={IMG} />
                <S.TitleEmail href='mailto:natacodedev@gmail.com' target="_blank">nata.codedev@gmail.com</S.TitleEmail>
            </S.Email>
            <S.Social>
                <S.TitleEmail><Link to='/'>Home</Link></S.TitleEmail>
                <S.LinkSocial href={L} target="_blank">Linkedin</S.LinkSocial>
                <S.LinkSocial href={G} target="_blank">Instagram</S.LinkSocial>
                <S.LinkSocial href={I} target="_blank">Github</S.LinkSocial>
            </S.Social>
        </S.Container>
    )
}

export default Index