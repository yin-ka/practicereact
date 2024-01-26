import React from 'react'
import "./Navbar.css";
import logo from "../images/airbnb 1.png"
function Navbar() {
  return (
    <>
      <nav className='navbar'>
        <img src={logo} className='logo' alt="logo"></img>
      </nav>
    </>
  )
}

export default Navbar;