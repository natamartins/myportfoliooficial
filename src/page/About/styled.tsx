import styled from "styled-components";

export const Container = styled.aside`
width: 80%;
margin: auto;
padding: 0rem 10rem;
margin-bottom: 2rem;
@media (max-width: 1060px){
 width: 90%;
 padding: 0rem 5rem;
}
@media (max-width: 850px){
 width: 100%;
 padding: 0rem 1rem;
}
`

export const BoxInfo = styled.div`
display: flex;
gap: 3rem;
align-items: center;
margin-bottom: 2rem;
@media (max-width: 850px){
gap: 1rem;
flex-direction: column;
text-align: center;
}
`

export const BoxInfoMe = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
`

export const Img = styled.img`
border-radius: 100%;
width: 10rem;
`

export const Title = styled.h1``

export const TitleSkil = styled.h1`
color: #fff;
margin-bottom: 2rem;
`

export const Descriprtion = styled.p`
text-align: center;
margin-bottom: 5rem;
`

export const BoxSkills = styled.div`
color: #fff;
background-color: #222;
padding: 3rem;
border-radius: 10px;
margin-bottom: 1rem;
@media (max-width: 850px){
 padding: 1.5rem;
}
`

export const Box = styled.ul`
display: flex;
flex-wrap: wrap;
gap: 3rem;

`
export const BoxExp = styled.ul`
display: flex;
flex-direction: column;
`

export const TitleSkills = styled.li`
padding-left: 5px;
border-left: 4px solid rgb(1, 255, 42, 100%);
border-radius: 2px;
margin-bottom: 5px;

`
export const TitleOfExperience = styled.h3`
color: #fff;
font-size: 1rem;
margin-bottom: 10px;
`

export const NameOFCompany = styled.p`
color: #969696;
margin-bottom: 5px;
`

export const Date = styled.p`
color: #969696;

`

export const Location = styled.p`
color: #969696;
margin-bottom: 15px;
`