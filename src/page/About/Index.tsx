import React from 'react'
import * as S from './styled'
// 
import Nav from '../../components/Nav/Index'
import Footer from '../../components/Footer/Index'
import Photo from '../../img/myPhoto.jpeg'

const skills = [
    'HTML',
    'CSS',
    'JAVASCRIPT',
    'SASS',
    'REACT.JS',
    'TYPESCRIPT',
    'STYLED-COMPONENT',
    'JEST',
    'CYPRESSS',
    'GIT/GITHUB',
    'UI/UX Designer'
]

const Index = () => {
    return (
        <>
            <Nav />
            <S.Container>
                <S.BoxInfo>
                    <S.Img src={Photo} />
                    <S.BoxInfoMe>
                        <S.Title>Natã Martins da silva </S.Title>
                        <S.Title>Menino do HTML®</S.Title>
                    </S.BoxInfoMe>
                </S.BoxInfo>
                <S.Descriprtion>
                    Meus hobbies são tocar violão e tomar café. Aperte o cinto,
                    pois minha próxima parada é dominar um universo chamado Front End.
                </S.Descriprtion>
                <S.BoxSkills>
                    <S.TitleSkil>Skills</S.TitleSkil>
                    <S.Box>
                        {
                            skills.map(s => (
                                <S.TitleSkills>{s}</S.TitleSkills>
                            ))
                        }
                    </S.Box>
                </S.BoxSkills>
                <S.BoxSkills>
                    <S.TitleSkil>Learning</S.TitleSkil>
                    <S.Box>
                        <S.TitleSkills>Storybook para documentar frontend melhor</S.TitleSkills>
                    </S.Box>
                </S.BoxSkills>
            </S.Container>
            <Footer />
        </>
    )
}

export default Index