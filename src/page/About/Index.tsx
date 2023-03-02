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
                <S.BoxSkills>
                    <S.TitleSkil>Experience</S.TitleSkil>
                    <S.BoxExp>
                        <S.TitleOfExperience>Desenvolvedor Front end JR</S.TitleOfExperience>
                        <S.NameOFCompany>Pingback</S.NameOFCompany>
                        <S.Date>Jul 2022 - Nov 2022 · 5 mos</S.Date>
                        <S.Location>Belo Horizonte, Minas Gerais, Brazil</S.Location>
                        <S.TitleSkills>Tive a oportunidade de ganhar uma ótima experiência
                            individual e com time, trabalhei usando HTML, SASS, JavaScript
                            React, Cypress, jest e realizei tarefas .
                            Ganhei ótimos conhecimentos.
                        </S.TitleSkills>
                        <S.TitleSkills>Skills: SASS · HTML5 · Git · GitHub · JavaScript · React.jsSkills</S.TitleSkills>
                    </S.BoxExp>
                </S.BoxSkills>
            </S.Container>
            <Footer />
        </>
    )
}

export default Index