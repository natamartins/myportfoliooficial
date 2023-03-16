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
export const Title = styled.h1`
`
export const TitleEmail = styled.a`
font-weight: 600;
:hover {
    color: #999;
}
`
export const Social = styled.div`
display: flex;
gap: 15px;
z-index: 999;
`
