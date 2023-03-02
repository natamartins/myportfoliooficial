import React from 'react'
import * as S from './styles'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Nav from '../../components/Nav/Index'
import Footer from '../../components/Footer/Index'
// link of social midia
const L = 'https://www.linkedin.com/in/nat%C3%A3martins/'
const G = 'https://www.instagram.com/nata.devjr/?theme=dark '
const I = 'https://github.com/natamartins'
// 
import IMG from '../../img/myPhoto.svg'
import IMG01 from '../../img/image1.jpg'
import IMG02 from '../../img/image2.jpg'
import IMG03 from '../../img/image3.jpg'
import IMG04 from '../../img/image4.jpg'
import { Link } from 'react-router-dom';
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

const Home = () => {
    return (
        <>
            <S.ContainerNav>
                <Nav />
            </S.ContainerNav>
            <S.Container>
                <S.Box>
                    <S.BoxInfo>
                        <S.TitleBoxInfo><span>Olá!</span> Sou </S.TitleBoxInfo>
                        <S.SubTitleBoxInfo>
                            Software Developer
                            UI/UX Designer
                        </S.SubTitleBoxInfo>
                        <S.Sobre>
                            <S.LinkSocial href={L} target="_blank">Linkedin</S.LinkSocial>
                            <S.LinkSocial href={G} target="_blank">Instagram</S.LinkSocial>
                            <S.LinkSocial href={I} target="_blank">Github</S.LinkSocial>
                        </S.Sobre>
                    </S.BoxInfo>
                    <S.Img src={IMG} />
                </S.Box>
                <S.BoxCarosel>
                    <S.SubTitleCarosel>Projetos em Destaque</S.SubTitleCarosel>
                    <Carousel
                        showThumbs={false}
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
                </S.BoxCarosel>
            </S.Container>
            <S.BoxFooter>
                <Footer />
            </S.BoxFooter>
        </>
    )
}

export default Home