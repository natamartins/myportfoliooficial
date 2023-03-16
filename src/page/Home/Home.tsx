import React from 'react'
import * as S from './styles'
import Typical from 'react-typical'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Nav from '../../components/Nav/Index'
import Footer from '../../components/Footer/Index'
// img of carosel
import IMG from '../../img/myPhoto.svg'
import IMG01 from '../../img/image1.jpg'
import IMG02 from '../../img/image2.jpg'
import IMG03 from '../../img/image3.jpg'
import IMG04 from '../../img/image4.jpg'
import { Link } from 'react-router-dom';
// img of social midia
import Linkedin from '../../img/linkedin.svg'
import Github from '../../img/github.svg'
import Instagram from '../../img/instagram.svg'
// imgs of my stacks
import JS from '../../img/javascript.gif'
import RC from '../../img/react.gif'
import GT from '../../img/github.gif'
import VS from '../../img/vscode.gif'
// link of social midia
const L = 'https://www.linkedin.com/in/nat%C3%A3martins/'
const G = 'https://www.instagram.com/nata.devjr/?theme=dark '
const I = 'https://github.com/natamartins'

const imgs = [
    {
        IMG: IMG01,
        title: 'Wen NFTs',
        description: "Descubra a verdadeira arte digital e colecione diversos NFTs, dê uma olhada no projeto.",
        nameLink: 'Click Aqui!',
        link: 'https://natamartins.github.io/webNFT/',
        t: '_blank'
    },
    {
        IMG: IMG02,
        title: 'FlexBlog',
        description: "Projeto criado nos cursos de FlexBox da Origamid. Dê uma olhada no projeto.",
        nameLink: 'Click Aqui!',
        link: 'https://natamartins.github.io/FlexBlog/',
        t: '_blank'
    },
    {
        IMG: IMG03,
        title: 'Tmovies',
        description: "Tmovies, aqui você fica por dentro de todos os novos filmes e séries que vam lançar em primeira mão! confira a página.",
        nameLink: 'Click Aqui!',
        link: 'https://webtmovies.netlify.app/',
        t: '_blank'
    },
    {
        IMG: IMG04,
        title: 'BiKcraft',
        description: 'Projeto criado nos cursos de UI Design e HTML/CSS para Iniciantes da Origamid. Dê uma olhada no projeto.',
        nameLink: 'Click Aqui!',
        link: 'https://natamartins.github.io/bikcraft-projetofinal/',
        t: '_blank'
    }
]

const Links = [
    {
        title: 'Wildbest',
        link: 'https://natamartins.github.io/site.teste/#'
    },
    {
        title: 'Calculadora',
        link: 'https://natamartins.github.io/Calculadora/'
    },
    {
        title: 'Nike',
        link: 'https://natamartins.github.io/projeto-Nike/'
    },
    {
        title: 'Bank',
        link: 'https://natamartins.github.io/Bank/'
    },
    {
        title: 'code BR',
        link: 'https://natamartins.github.io/CodeHelp.oficial/?'
    },
    {
        title: 'Song',
        link: 'https://natamartins.github.io/violao/index.html'
    },
    {
        title: 'Wolf',
        link: 'https://natamartins.github.io/wolf/'
    },
]

const Home = () => {
    return (
        <>
            <S.ContainerNav>
                <Nav />
            </S.ContainerNav>
            <S.Container>
                <S.Box>
                    <S.BoxInfo>
                        <S.TitleBoxInfo><span>HI!</span> I Am </S.TitleBoxInfo>
                        <S.SubTitleBoxInfo>
                            <Typical
                                loop={Infinity}
                                steps={[
                                    'Front-End UI Designer',
                                    1000
                                ]}
                            />
                        </S.SubTitleBoxInfo>
                        <S.Localizaçao>Localização: Belo Horizonte - MG <span></span></S.Localizaçao>
                        <S.Sobre>
                            <S.LinkSocial href={L} target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="30px">    <path d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M10.496,8.403 c0.842,0,1.403,0.561,1.403,1.309c0,0.748-0.561,1.309-1.496,1.309C9.561,11.022,9,10.46,9,9.712C9,8.964,9.561,8.403,10.496,8.403z M12,20H9v-8h3V20z M22,20h-2.824v-4.372c0-1.209-0.753-1.488-1.035-1.488s-1.224,0.186-1.224,1.488c0,0.186,0,4.372,0,4.372H14v-8 h2.918v1.116C17.294,12.465,18.047,12,19.459,12C20.871,12,22,13.116,22,15.628V20z" /></svg>
                            </S.LinkSocial>
                            <S.LinkSocial href={G} target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="30px">    <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z" /></svg>
                            </S.LinkSocial>
                            <S.LinkSocial href={I} target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px">    <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z" /></svg>
                            </S.LinkSocial>
                        </S.Sobre>
                    </S.BoxInfo>
                    <S.Img src={IMG} />
                </S.Box>
                <S.BoxStacks>
                    <S.Title>Minhas Stacks</S.Title>
                    <S.Description>essa são alguma das tecnologiatecnologias
                        que uso no dia a dia
                    </S.Description>
                    <S.List>
                        <S.ImgList>
                            <S.Imgs src={JS} />
                        </S.ImgList>
                        <S.ImgList>
                            <S.Imgs src={RC} />
                        </S.ImgList>
                        <S.ImgList>
                            <S.Imgs src={GT} />
                        </S.ImgList>
                        <S.ImgList>
                            <S.Imgs src={VS} />
                        </S.ImgList>
                    </S.List>
                </S.BoxStacks>
                <S.BoxCarosel>
                    <S.SubTitleCarosel id='projects'>Projetos em Destaque</S.SubTitleCarosel>
                    <Carousel
                        showThumbs={true}
                        autoPlay={true}
                        transitionTime={4}
                        infiniteLoop={true}
                        showStatus={false}
                    >
                        {
                            imgs.map(img => (
                                <S.BoxInfoCarosel>
                                    <S.ImgCarosel src={img.IMG} />
                                    <S.SubTitleCarosel>{img.title}</S.SubTitleCarosel>
                                    <S.Description>{img.description}</S.Description>
                                    <S.Link href={img.link} target={img.t}>{img.nameLink}</S.Link>
                                </S.BoxInfoCarosel>
                            ))
                        }
                    </Carousel>
                    <S.BoxProjetos>
                        {
                            Links.map(L => (
                                <S.ListLink href={L.link} target='_blank'>{L.title}</S.ListLink>
                            ))
                        }
                    </S.BoxProjetos>
                </S.BoxCarosel>
            </S.Container>
            <S.BoxFooter>
                <Footer />
            </S.BoxFooter>
        </>
    )
}

export default Home