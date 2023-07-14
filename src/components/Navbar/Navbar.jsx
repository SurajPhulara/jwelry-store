import React from 'react'
import "./Navbar.css"
import { profileIcon, shoppingCartIcon } from '../../assets'
import Logo from '../Logo/Logo'

const Navbar = () => {
  return (
    <div className='navbar'>
      <Logo></Logo>
      <div className="navbar__right font-secondary">
        <div className="navbar__links">
          <a href="#" className='active'>Home</a>
          <a href="#">Shop</a>
          <a href="#">Collections</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
        <div className="navbar__icons">
          <img src={profileIcon} alt="profileIcon" className='navbar__icons' />
          <img src={shoppingCartIcon} alt="profileIcon" className='navbar__icons' />
        </div>
      </div>
    </div>
  )
}

export default Navbar
