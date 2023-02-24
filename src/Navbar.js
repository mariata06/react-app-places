import React, {useState, useRef, useEffect} from 'react';
import { FaBars } from 'react-icons/fa';
import { links } from './data';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <section className='section nav'>
      <div className='nav-header'>
        <div className='logo'>
          <Link to="/">
            <h1>Places</h1>
          </Link>
        </div>
        <div className='links-container show-container'>
          <div className='links'>
            <Link to="/">
              Home
            </Link>
            <Link to="/Info">
              Info
            </Link>
            <Link to="/Resources">
              Resources
            </Link>
            <Link to="/Checklist">
              Checklist
            </Link>
            <Link to="/Login">
              Login
            </Link>
          </div>
        </div>
        <button type="button" className='nav-toggle'>
          <FaBars />
        </button>
      </div>
    </section>
  )
}

export default Navbar;