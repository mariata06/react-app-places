import React from 'react';
import { FaGithub, FaFacebook, FaLinkedin, FaTwitter, FaBehance } from 'react-icons/fa';
// import { social } from './data';

const Footer = () => {
    return (
        <section className='social'>
            <ul className='social-icons'>
            <li>
              <a href="https://www.github.com" target="_blank" rel="noreferrer"><FaGithub /></a>
            </li>
            <li>
              <a href="https://www.facebook.com" target="_blank" rel="noreferrer"><FaFacebook /></a>
            </li>
            <li>
              <a href="https://www.twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
            </li>
            <li>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            </li>
            <li>
              <a href="https://www.behance.com" target="_blank" rel="noreferrer"><FaBehance /></a>
            </li> 
          </ul>
        </section>
    )
}

export default Footer;