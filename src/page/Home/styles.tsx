import styled from "styled-components";


export const ContainerNav = styled.header`
width: 80%;
margin: auto;
`

export const Container = styled.article`

`
export const Localizaçao = styled.p`
position: relative;
margin-bottom: 10px;
span{
    content: '';
    position: absolute;
    width: 8px;
    height: 8px;
    background: green;
    border-radius: 50%;
    right: 80px;
    top: 7px;
}
@media (max-width: 850px){
    span {
display: none;
    }
}
`

export const Box = styled.div`
width: 80%;
margin: auto;
padding: 1rem;
display: flex;
align-items: center;
justify-content: space-around;
margin-bottom: 5rem;
@media (max-width: 850px) {
    width: 100%;
 flex-direction: column;
 text-align: center;
 padding: 1rem 2rem;
}
`
export const BoxInfo = styled.div``

export const TitleBoxInfo = styled.h1`
font-size: 3rem;
font-weight: 600;
span {
    color:#FD7900 ;
}
`
export const SubTitleBoxInfo = styled.h2`
width: 25rem;
font-size: 2rem;
font-weight: 500;
margin-bottom: 15px;
@media (max-width: 850px) {
    width: 100%;
   padding: 1rem 2rem;
}
`
export const SubTitleCarosel = styled.h2`
text-align: center;
margin-bottom: 10px;
`
export const Description = styled.p`
margin-bottom: 20px;
`
export const Img = styled.img`
margin-top: -230px;
padding-bottom: 25px;
@media (max-width: 850px) {
    margin-top: -80px;
   padding: 1rem 2rem;
}
`
export const ImgIcon = styled.img`
width: 1.5rem;
:hover{
    fill: #0088ff;
}
`

export const Link = styled.a`
padding: 10px;
color: green;
`

export const LinkSocial = styled.a`
font-weight: 600;
z-index: 10;
display: flex;
align-items: center;
svg {
width: 1.5rem;
animation: 0,2s ease-in;
}
:hover {
    color: #999;
    animation: ease-in-out;
  svg {
   fill: #FD7900;
  }
}
`

export const Sobre = styled.div`
display: flex;
gap: 10px;
@media (max-width: 850px) {
    justify-content: center;
}
`
export const BoxInfoCarosel = styled.div`
`
export const BoxCarosel = styled.div`
width: 80%;
margin: auto;
padding: 1rem 9rem;
@media (max-width: 850px) {
    width: 100%;
   padding: 1rem 2rem;
}
`
export const ImgCarosel = styled.img`
border-radius: 10px;
margin-bottom: 10px;
`
export const BoxFooter = styled.footer``


export const BoxStacks = styled.div`
width: 1000px;
margin: auto;
text-align: center;
margin-bottom: 5rem;
@media (max-width: 850px){
    width: 100%;
    padding: 1rem 2rem;
}
`

export const Title = styled.h1``

export const List = styled.ul`
display: flex;
align-items: center;
justify-content: center;
gap: 10px;
`

export const ImgList = styled.li``

export const Imgs = styled.img`
width: 5rem;
`

export const BoxProjetos = styled.div`
display: flex;
flex-wrap: wrap;
gap: 10px;
`
export const ListLink = styled.a`
padding: 5px 2rem;
background: #FD7900;
border-radius: 2px;
`