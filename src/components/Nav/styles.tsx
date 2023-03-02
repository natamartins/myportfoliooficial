import styled from "styled-components";

export const Container = styled.nav`
display: flex;
width: 80%;
align-items: center;
justify-content: space-between;
margin: auto;
padding: 1rem;
border-bottom: 3px solid #D9D9D9;
margin-bottom: 8rem;
@media (max-width: 850px) {
    width: 100%;
   padding: 1rem 2rem;
   margin-bottom: 2rem;
}
`
export const Email = styled.div`
display: flex;
align-items: center;
gap: 5px;
`
export const Img = styled.img`
width: 2.5rem;
`
export const TitleEmail = styled.a`
font-weight: 600;
:hover {
    color: #999;
    animation: ease-in-out;
}
`
export const Social = styled.div`
display: flex;
gap: 15px;
z-index: 999;
`
export const Sobre = styled.button`
padding: 5px 20px;
border: none;
background-color: #FF1F00;
cursor: pointer;
animation: ease-in-out;
a {
    color: #fff;
}
:hover {
    background-color: #999;
}
`