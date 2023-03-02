import styled from "styled-components";


export const ContainerNav = styled.header`
width: 80%;
margin: auto;
`

export const Container = styled.article`

`

export const Box = styled.div`
width: 80%;
margin: auto;
padding: 1rem;
display: flex;
align-items: center;
justify-content: space-around;
margin-bottom: 2rem;
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
margin-bottom: 10px;
`
export const Img = styled.img`
margin-top: -230px;
padding-bottom: 25px;
@media (max-width: 850px) {
    margin-top: -80px;
   padding: 1rem 2rem;
}
`
export const Link = styled.a`
padding: 2px 5px;
color: green;
`

export const LinkSocial = styled.a`
font-weight: 600;
z-index: 10;
:hover {
    color: #999;
    animation: ease-in-out;
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
