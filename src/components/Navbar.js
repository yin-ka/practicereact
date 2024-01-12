import React from 'react'
import "./Navbar.css";
import logo from "../images/reactjs-icon.png"

function Navbar() {
  return (
    <>
      <nav>
        <div className='nav_latter'>
          <img src={logo} alt="logo"></img>
          <h1>ReactFacts</h1>
        </div>
        <div className='nav_former'>
          <h3>React Course - Project 1</h3>
        </div>
      </nav>
    </>
  )
}

export default Navbar;