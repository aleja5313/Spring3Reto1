import React from 'react'
import { NavBar, NavBarUl} from '../styles/Header.jsx'
import { ImgLogo } from '../styles/Header'

const Header = () => {
  return (
    <NavBar>
      <ImgLogo src="https://i.ibb.co/ZzHvXHR/logo-fylo.png" alt="logo-fylo" border="0" className="logo-img"></ImgLogo>
      <NavBarUl>
      <a href='#features'>Features</a>
            <a href='#team'>Team</a>
            <a href='#signin'>Sign in</a>
      </NavBarUl>
    </NavBar>
  )
}

export default Header