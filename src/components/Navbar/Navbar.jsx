import React, { useState } from 'react';
import './Navbar.css';
import { profileIcon, shoppingCartIcon, menuIcon } from '../../assets';
import Logo from '../Logo/Logo';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavLinkClick = () => {
    setIsMenuOpen(false);
  };
  return (
    <div className='navbar'>
      <Logo />
      <div className="navbar__right font-secondary">
        <div className="navbar__links">
          <NavLink to="/" onClick={handleNavLinkClick}>Home</NavLink>
          <NavLink to="/shop" onClick={handleNavLinkClick}>Shop</NavLink>
          <NavLink to="/collections" onClick={handleNavLinkClick}>Collections</NavLink>
          <NavLink to="/about" onClick={handleNavLinkClick}>About</NavLink>
          <NavLink to="/contact" onClick={handleNavLinkClick}>Contact</NavLink>
        </div>
        <div className="navbar__icons">
          <NavLink to="/profile" className='navbar__icon' onClick={handleNavLinkClick}> <img src={profileIcon} alt="profileIcon" /> </NavLink>
          <NavLink to="/cart" className='navbar__icon' onClick={handleNavLinkClick}> <img src={shoppingCartIcon} alt="shoppingCartIcon" /> </NavLink>
          <div className="navbar__menu-toggle" onClick={handleMenuToggle}>
            <img src={menuIcon} alt="menuIcon" />
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="navbar__dropdown">
          <div className="navbar_dropdown_container">

          <NavLink to="/" onClick={handleNavLinkClick}>Home</NavLink>
          <NavLink to="/shop" onClick={handleNavLinkClick}>Shop</NavLink>
          <NavLink to="/collections" onClick={handleNavLinkClick}>Collections</NavLink>
          <NavLink to="/about" onClick={handleNavLinkClick}>About</NavLink>
          <NavLink to="/contact" onClick={handleNavLinkClick}>Contact</NavLink>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
