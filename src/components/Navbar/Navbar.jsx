import React from 'react';
import './Navbar.css';
import { profileIcon, shoppingCartIcon } from '../../assets';
import Logo from '../Logo/Logo';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
      <Logo />
      <div className="navbar__right font-secondary">
        <div className="navbar__links">
          <NavLink exact to="/" activeClassName="active">Home</NavLink>
          <NavLink to="/shop">Shop</NavLink>
          <NavLink to="/collections">Collections</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
        <div className="navbar__icons">
<div className="navbar__icons">
  <NavLink to="/profile" activeClassName="active" className='navbar__icon'>
    <img src={profileIcon} alt="profileIcon"  />
  </NavLink>
  <NavLink to="/cart" activeClassName="active" className='navbar__icon' >
    <img src={shoppingCartIcon} alt="shoppingCartIcon"/>
  </NavLink>
</div>        </div>
      </div>
    </div>
  );
};

export default Navbar;
