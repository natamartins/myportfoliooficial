import React from 'react'
import * as S from './styles'
import IMG from '../../img/o-email.png'
import { Link } from 'react-router-dom'

const Index = () => {
    return (
        <S.Container>
            <S.Title>NT</S.Title>
            <S.Social>
                <S.TitleEmail href='#projects'>Projetos</S.TitleEmail>
            </S.Social>
        </S.Container>
    )
}

export default Index