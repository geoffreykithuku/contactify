import React from 'react'
import { Link } from "react-router-dom";
import './navbar.css'
const Navbar = () => {
  return (
    <nav className='nav'>
      <h2>Contactify</h2>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="about">About</Link>
        </li>
        <li>
          <Link to="contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar