import React from 'react'
import "./Navbar.css"
import { profileIcon, shoppingCartIcon } from '../../assets'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navbar__left font-primary">Darling.</div>
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
