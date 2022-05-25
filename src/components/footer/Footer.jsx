import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'


const Footer = () => {
  return (
    <footer>
      <a href="#logo" className='footer__logo'>JAKE</a>

      <ul className='permalinks'>
        <li><a href="#top">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#porfolio">Portfolio</a></li>
        <li><a href="#testmonials">Testmonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/chuljungkim/"><FaFacebookF/></a>
        <a href="https://www.instagram.com/a_jc.k/"><FiInstagram/></a>
      </div>
      
      <div className="footer__copyright">
        <small>&copy; Jake tutorials. All rights reserved</small>
      </div>
  
    </footer>
  )
}

export default Footer