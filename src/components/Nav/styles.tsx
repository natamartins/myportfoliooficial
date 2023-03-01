import styled from "styled-components";

export const Container = styled.nav`
display: flex;
align-items: center;
width: 1000px;
margin: auto;
justify-content: space-between;
padding: 1rem;
border-bottom: 3px solid #D9D9D9;
margin-bottom: 9rem;

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
`
export const LinkSocial = styled.a`
font-weight: 600;
z-index: 10;
:hover {
    color: #999;
    animation: ease-in-out;
}
`