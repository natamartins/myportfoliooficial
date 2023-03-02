import styled from "styled-components";

export const UlNav = styled.div`
z-index: 100;
display: flex;
flex-direction: column;
text-align: center;
margin-top: 35%;
gap: 3rem;
font-size: 1.5rem;
a {
    color: #ffffff;
}
`

export const LinkSocial = styled.a`
font-weight: 600;
color: #fff;
z-index: 10;
:hover {
    color: #999;
    animation: ease-in-out;
}
`