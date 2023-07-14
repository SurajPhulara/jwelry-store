import React from 'react'
import "./Footer.css"
import Logo from '../Logo/Logo'
import { mailicon } from '../../assets'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer_upper">
        <Logo></Logo>
        <div className="footer_menu font-secondary">
          <div className="footer_menu_link">Shop</div>
          <div className="footer_menu_link">Contact</div>
          <div className="footer_menu_link">Collections</div>
          <div className="footer_menu_link">Privacy</div>
          <div className="footer_menu_link">About</div>
          <div className="footer_menu_link">terms</div>
        </div>
        <div className="newsletter font-secondary">
          <div className="title font-primary">Subscribe to our newsletter</div>
          <div className="description">For product announcements and exclusive insights</div>
          <form action="" className="newsletter_form">
            <div className="inputbox">
             <img src={mailicon} alt="" className="input_icon" />
            <input type="email" className="input" placeholder="Input your email"/>
            </div>
            <button className="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Footer
