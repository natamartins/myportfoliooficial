import React, { useState } from 'react'
import './styles.css'
import * as S from './styles'
import { NavLink } from 'react-router-dom'
// link of social midia
const L = 'https://www.linkedin.com/in/nat%C3%A3martins/'
const G = 'https://www.instagram.com/nata.devjr/?theme=dark '
const I = 'https://github.com/natamartins'

const Index = () => {
    const [burgue, setBurgue] = useState("burgue-bar unclick")
    const [menu, setMenu] = useState("menu hidden")
    const [isMenuClick, setIsMenuClick] = useState(false)

    const updateMenu = () => {
        if (!isMenuClick) {
            setBurgue("burgue-bar clicked")
            setMenu("menu visible")
        }
        else {
            setBurgue("burgue-bar unclick")
            setMenu("menu hidden")
        }
        setIsMenuClick(!isMenuClick)
    }
    return (
        <div >
            <div className='burgue' onClick={updateMenu}>
                <div className={burgue}></div>
                <div className={burgue}></div>
                <div className={burgue}></div>
            </div>
            <div className={menu}>
                <S.UlNav>
                    <NavLink to='/'>Home</NavLink>
                    <S.LinkSocial href={L} target="_blank">Linkedin</S.LinkSocial>
                    <S.LinkSocial href={G} target="_blank">Instagram</S.LinkSocial>
                    <S.LinkSocial href={I} target="_blank">Github</S.LinkSocial>
                </S.UlNav>
            </div>
        </div>
    )
}
export default Index