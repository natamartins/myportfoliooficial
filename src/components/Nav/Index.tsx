import React from 'react'
import * as S from './styles'
import IMG from '../../img/o-email.png'
import { Link } from 'react-router-dom'
import MenuMobile from '../MenuMobile/Index'

const Index = () => {
    return (
        <S.Container>
            <S.Email>
                <S.Img src={IMG} />
                <S.TitleEmail href='mailto:natacodedev@gmail.com' target="_blank">Email</S.TitleEmail>
            </S.Email>
            <S.Social>
                <S.TitleEmail><Link to='/'>Home</Link></S.TitleEmail>
                <S.Sobre><Link to='/about'>Sobre</Link></S.Sobre>
            </S.Social>
        </S.Container>
    )
}

export default Index